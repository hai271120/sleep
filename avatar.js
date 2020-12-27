

const style = `
#avatar{
    position: absolute;
    left:20rem;
    maggin-top 10px;
    padding:10px;
}
button{
    background:green;
    border-radius:10px;
    width:10vw;
}
button:hover{
    background:blue;
    border-radius:10px;
    width:10vw;
}

`
class Avatar extends HTMLElement 
{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this.fullname = this.getAttribute('fullname')
        this.email = this.getAttribute('email');
        let currentUser = localStorage.getItem('currentUser');
        this._shadowRoot.innerHTML=
        `<style>
        ${style}
        </style>
            <form id='avatar'>
            <input type = 'file' name ='file'>
            <input-wrapper id="firstname" type="text" placeholder="fisrt-name" ></input-wrapper>
            <input-wrapper id="lastname" type="text" placeholder="last-name" ></input-wrapper>
            <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
            <button class='update'>Update</button>
            </form>
           
        `
         const update =this._shadowRoot.getElementById('avatar')
         update.addEventListener('submit', async(e) => { 
             e.preventDefault()
           const firstname = this._shadowRoot.getElementById('fisrtname').value
           const lastname =this._shadowRoot.getElementById('lastname').value
           const password = this._shadowRoot.getElementById('password').value
           if( lastname.trim() ===''||firstname.trim()===""||password.trim()===''){
               alert('hay nhap day du noi dung')
           }
           const users = getitemlocalStorage('currentUser')
           const data ={
               createlastname:users.lastname,
               createfirstname:users.firstname,
               createPassword:users.password,
               isShow:true,
           }
           const res = await firebase.firestore().collection('users').add(data)
           const img = update.firstElementChild.files
           if(img.length>0){
            const image = img[0]
            const url = await uploadFileToStorage(image)
            this.updateListFile(url,res.id)
        } 
        update.firstname.value = ''
        update.lastname.value = ''
        update.password.value = ''
         })
    }
    updateListFile(url,id ){
        const dataUpdate = {
            files: firebase.firestore.FieldValue.arrayUnion(url)
        }
        firebase.firestore().collection('users').doc(id).update(dataUpdate)
    }    
   
}
window.customElements.define('avatar-z', Avatar)

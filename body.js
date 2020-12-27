const style =`
.video{
    position: absolute;
    left:0;
    display:flex;
    top:15vh;
    margin-top: 2vw;
    width:100%;
    padding:10px;
    justify-content:space-around;
}
.text{
    width:80vw;
    position: absolute;
    left:5rem;

}
@media only screen and (max-width: 768px){
   
  }
`
class ServiceScreen5 extends HTMLElement 
{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = 
        `<style>
        ${style}
        </style>
        
                <div >
                    <h1 class='text'>Các bài tập và các phương pháp ngủ</h1>
                    <div class = 'video'>
                    <iframe width="250" height="200" src="https://www.youtube.com/embed/p4Wr73r6ZQE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="250" height="200" src="https://www.youtube.com/embed/G5ZtSrv1MJ8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="250" height="200" src="https://www.youtube.com/embed/6NzFG0aQwYI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="250" height="200" src="https://www.youtube.com/embed/-I0fRNZTs8M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
              </div>
           
        `
    }
}
window.customElements.define('body-z', ServiceScreen5)
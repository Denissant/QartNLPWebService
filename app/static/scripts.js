var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if(sPage == "about.html"){
    function analyzeButton(){
        const btn = document.getElementById('analyze-button');
        const grammarSection = document.getElementById('analyze-section');
        const clearBtn = document.getElementById('clear-icon');
        btn.addEventListener('click', ()=>{
            grammarSection.classList.toggle("display-flex");
            clearBtn.classList.toggle("display-flex");
            if(btn.innerHTML == 'გაანალიზე'){
                btn.innerHTML = 'გაასუფთავე';
                btn.style.background = '#707070';
            }else{
                btn.innerHTML = 'გაანალიზე';
                btn.style.background = '#172224';
            }
        });
    }
}

const loginBtn = document.querySelector('.login');
const loginContent = document.querySelector('.login-bg');

loginBtn.addEventListener('click',()=>{
    loginContent.classList.add('active-login');
})

window.onclick = (event) => {
    if (event.target == loginContent) 
        loginContent.classList.remove("active-login");
};


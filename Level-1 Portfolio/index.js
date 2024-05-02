
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

var hider=document.querySelectorAll('.hide')[0];
var hider1=document.querySelectorAll('.hide')[1];
var seeMore=document.getElementById('seeMore');
seeMore.addEventListener('click',()=>{
    hider.classList.toggle('hide');
    hider1.classList.toggle('hide');
    seeMore.style.height='55px';
})




const scriptURL = 'https://script.google.com/macros/s/AKfycbyrKDcaqU4NcqFVal4UhkYiVtGJPqJIcU1iUSIfD5t2pNRz3EY2IRl_l3DhM4GdMp5KoQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){msg.innerHTML=""
    },3000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})

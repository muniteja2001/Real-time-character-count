const textarea=document.getElementById('text-area');
const totalcharacters=document.getElementById('total-characters');
const remainingchars=document.getElementById('remaining-chars');

textarea.addEventListener('keyup',()=>{ updatecounter();

 })

function updatecounter(){
    totalcharacters.innerText=textarea.value.length;
    remainingchars.innerText=textarea.getAttribute('maxlength')-textarea.value.length;

}
updatecounter()


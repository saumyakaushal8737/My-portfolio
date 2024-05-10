let activity = document.querySelector(".activity");
let work = document.querySelector(".work");
activity.addEventListener("click",()=>
{
  toggleFunction();
});
function toggleFunction()
{
  if(work.style.display==="block")
  {
    work.style.display="none;"
  }
  else{
    work.style.display="block";
  }
}
document.addEventListener("click",(eve)=>
{
  if(eve.target!==activity && eve.target!==work)
  {
    work.style.display="none";
  }
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeK1H3d5G9xT-CSHshDF37jE3aGWNL3LrcpXHNMAHN1t0b_n5pJp0sVJDrJ-su1yn5/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
btn = document.querySelector("#btn");
mssg = document.querySelector(".mssg");
btn.addEventListener("click",()=>
  {
    mssg.style.transition="transform 0.5s ease-in";
    mssg.style.transform="translateY(-40px)";
 setTimeout(()=>
{  
  mssg.style.display="block";
},600);
    setTimeout(()=>
    {
      mssg.style.transition = "transform 0.5s ease-out";
      mssg.style.transform="translateY(40px)";
      setTimeout(()=>
      {
        mssg.style.display="none";
      },500); // wait for the transition to finish before hiding the message
      form.reset()
    },2000); 
  });
  let themeBtn=document.querySelector(".theme");
  let heroRight=document.querySelector(".hero-right");
  let nav=document.querySelector("nav");
  let isDarkTheme=true;
  themeBtn.addEventListener("click",()=>
  {
    document.body.classList.toggle("light-theme");
    themeBtn.innerText="Dark Theme";
    heroRight.style.url("img").src="eshu3 white bg.jpg";
    nav.style.boxShadow="1px 2px 1px 1px grey"
  });
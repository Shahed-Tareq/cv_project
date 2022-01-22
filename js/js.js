new WOW().init();
let icon_show = document.getElementById('icon');
let List = document.getElementById('list');
function show_list(){
   List.classList.toggle('active');
}
icon_show.addEventListener('click' , show_list  , false);

var element = document.querySelector('.skills');
var elements_span = document.querySelectorAll('.progress span');
 function get_element(){
   if(window.scrollY>=element.offsetTop){
    elements_span.forEach((span)=>{
        span.style.width=span.dataset.width;
     });
   }
}
window.onscroll=get_element;




var skill_Btn = document.getElementById('skill_btn');
var contact_Btn = document.getElementById('contact_btn');
var Experiance_Btn = document.getElementById('Experiance_btn');
var about_Btn = document.getElementById('about_btn');
var Education_Btn = document.getElementById('Education_btn');
var skill_sec = document.getElementById('skills');
var about_sec = document.getElementById('about_sec')
var Exp_sec = document.getElementById('exp_sec')
var Edu_sec = document.getElementById('Edu_sec')
var contact_sec = document.getElementById('contact_sec');
window.onscroll =function(){
   if(window.scrollY>=skill_sec.offsetTop){
console.log('we reached')
   }
}
function get_skill(){
   window.scrollTo({
      top:skill_sec.offsetTop-100,
      behavior:"smooth"
   });
  
}
function get_Exp(){
   window.scrollTo({
      top:Exp_sec.offsetTop-100,
      behavior:"smooth"
   });
  
}
function get_Edu(){
   window.scrollTo({
      top:Edu_sec.offsetTop-100,
      behavior:"smooth"
   });
  
}
function get_about(){
   window.scrollTo({
      top:about_sec.offsetTop-100,
      behavior:"smooth"
   });
  
}
function  get_cont(){
   
   window.scrollTo({
      top:contact_sec.offsetTop,
      behavior:"smooth"
   });
  
}
skill_Btn.addEventListener('click',get_skill,false);
Experiance_Btn.addEventListener('click' , get_Exp,false);
Education_Btn.addEventListener('click' , get_Edu,false);
contact_Btn.addEventListener('click' , get_cont,false);
about_Btn.addEventListener('click' , get_about,false);

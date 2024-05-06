const scholarshipTooltip = document.querySelector('.scholarship-tooltip');
const scholarshipList = scholarshipTooltip.querySelector('ul');
AOS.init({
  once:false,
  delay: 190
});
scholarshipTooltip.addEventListener('focus', () => {
  scholarshipList.style.display = 'block';
});

scholarshipTooltip.addEventListener('blur', () => {
  scholarshipList.style.display = 'none';
});


const Financial = document.querySelector('.Financial');
const FinancialList = Financial.querySelector('ul');

Financial.addEventListener('focus', () => {
  FinancialList.style.display = 'block';
});

Financial.addEventListener('blur', () => {
  FinancialList.style.display = 'none';
});



const Internships = document.querySelector('.Internships');
const InternshipsList = Internships.querySelector('ul');

Internships.addEventListener('focus', () => {
  InternshipsList.style.display = 'block';
});

Internships.addEventListener('blur', () => {
  InternshipsList.style.display = 'none';
});




var btn_divR = document.getElementById("btn_divR");
var btn_divM = document.getElementById("btn_divM");
var btn_divC=document.getElementById("btn_divC")

var divR = document.getElementById("divR");
var divM = document.getElementById("divM");
var divC=document.getElementById("divC");

btn_divR.addEventListener('click', ()=>{
    divR.style.display='block';
    divM.style.display='none';
    divC.style.display='none';
});


btn_divM.addEventListener('click', ()=>{
  divR.style.display='none';
  divC.style.display='none';
  divM.style.display='block';
});

btn_divC.addEventListener('click', ()=>{
  divM.style.display='none';
  divR.style.display='none';
  divC.style.display='block';
});










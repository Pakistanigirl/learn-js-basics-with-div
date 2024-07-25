"use strict"
////////////////////////DOM//////////////////////
let div1=document.getElementById("pikacho");
let childofDiv1=div1.children;
// console.log(childofDiv1);
let bodyofHtml=document.body;
let childinbody=bodyofHtml.children;
console.log(childinbody);
// console.log(childinbody[1]);
// let childnades=bodyofHtml.childNodes;
// console.log(childnades);
// let div2=document.getElementById("table1");
// let childnades1=div2.childNodes;
// console.log(childnades1);
// console.log(document.body.children);

childinbody[1].onclick=()=>{childinbody[1].style.backgroundColor="blue";}
/////////////////////////////////////////////////////////////////////
childinbody[2].onclick=()=>{childinbody[2].style.backgroundColor="rgb(180, 123, 207)";}
childinbody[4].onclick=()=>{childinbody[4].style.backgroundColor="purple";}
/////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded",()=>{
   let table=document.getElementById("table1");
   let thead1=table.getElementsByTagName('thead')[0];
   let rowinthead=thead1.getElementsByTagName('tr');
   // console.log(rowinthead);
   let tbody=table.getElementsByTagName('tbody')[0];
   let rows=tbody.getElementsByTagName('tr');
   // console.log(rows);

   rows[0].onclick=()=>{rows[0].style.backgroundColor=" rgb(103, 176, 225)";}
   rows[1].onclick=()=>{rows[1].style.backgroundColor=" rgb(103, 176, 225)";}
   rows[2].onclick=()=>{rows[2].style.backgroundColor=" rgb(103, 176, 225)";}
   
   rowinthead[0].onclick=()=>{rowinthead[0].style.backgroundColor="yellow";}
})

////////////////////////////////
childinbody[3].onclick=()=>childinbody[3].style.backgroundColor="yellow";
//////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
//////////////////pikacho 3/////////////////////////////////////
function showAttributes() {
   let element = document.getElementById("myParagraph");
   let id = element.getAttribute("id");
   let className = element.getAttribute("class");
   let title = element.getAttribute("title");
   // console.log(element.attributes());
   alert("ID: " + id + "\nClass: " + className + "\nTitle: " + title);
 }
//////////////////////////////////////////////////////////////////
function showAttributes1(){
let element1=document.getElementById("myParagraph2");
let id1=element1.getAttribute('id');
let class1=element1.getAttribute("class");
let title1=element1.getAttribute("title");
alert("ID: " + id1 + "\nClass: " + class1 + "n\Title: " + title1);

 }
 //////////////////hasattribute method//////////////
 
 ///////////////////////////////////////////////////////////////////
 ////////////////////////////pikacho4////////////////////////////////////
 //////////////////hasattribute method/////////////////
 function checkAttributes() {
  let element = document.getElementById("myParagraph3");
  let hasClass = element.hasAttribute("class");
  let hasTitle = element.hasAttribute("title");
   alert("Has class attribute: " + hasClass + "\nHas title attribute: " + hasTitle);
 }
 ////////////////////////remove Attribute///////////////
 function removeAttributes(){
   let element=document.getElementById("myParagraph4");
   let class1=element.getAttribute("class");
   let removeclass=element.removeAttribute("class");
   let hasClass=element.hasAttribute("class");
   alert("class is: " + class1 +"\nAfter removing " + "\nHas Class: " + hasClass);
    }
    ///////////////////////SET ATTRIBUTE///////////
    function changeAttributes() {
    let element = document.getElementById("myParagraph5");
    element.setAttribute("class", "text4");
    element.setAttribute("title", "New Tooltip1");
    element.setAttribute("style", "color: blue;");
  }
function clickme(){
   let element=document.getElementById("myParagraph6");
   element.setAttribute("style","color:pink");
   
}
/////////////////////////////HTML INSERTION////////////////////////
/////////////////prepend///////////////////////////
const newpara=document.createElement('p');
newpara.textContent="i am prepend";
document.getElementById('content').prepend(newpara);
const newpara2=document.createElement('p');
/////////////////append////////////////////////
newpara2.textContent="i am appended";
document.getElementById('content').append(newpara2);
const newpara3=document.createElement('p');
newpara3.textContent="i am appended using appendchild";
document.getElementById('content').appendChild(newpara3);
//////////////////////////innerhtml//////////////////////////////////
document.getElementById('clickhere').onclick=()=>document.getElementById('innerhtml').innerHTML="Mom I am famous!!!! hurray......";
//////////////////////////insertbefore////////////////////////
function insertbefore(){
  const newpara=document.createElement('p');
  newpara.textContent="It's my name dear: ";
  const refpara=document.getElementById('refPara')
 document.getElementById('insertbefore').insertBefore(newpara, refpara);
}
document.getElementById('clickhere1').onclick = insertbefore;

///////////////////////////////textContent/////////////////////////////////////////
document.getElementById('textcontent').textContent = 'This is inserted using textContent.';
////////////////////////////insertAdjacentHTML///////////////////////////////////////////////
document.getElementById('textcontent').insertAdjacentHTML('beforeend', '<p>This is inserted using insertAdjacentHTML.</p>');
document.getElementById('textcontent').insertAdjacentHTML('afterbegin', '<p>This is inserted using insertAdjacentHTML=> afterbegin</p>');
///////////////////////////////////////////////////////////////////////////
function replaceChild(){
  const newpara=document.createElement('p');
  newpara.textContent="Hi I had replaced this paragraph with a new paragraph";
  const oldParagraph = document.getElementById('existedpara');
  document.getElementById('letsreplace').replaceChild(newpara, oldParagraph);
 }
 document.getElementById("itisbutton").onclick=replaceChild;
 //////////////////////////class list////////////////////////////////
 let classlist_test=document.getElementById('itsid1');
 classlist_test.classList.toggle('red');
 console.log(classlist_test);
 let class1=classlist_test.classList.contains('red');
 console.log(class1);
 //////////////////////////////////time intervals////////////////////////////////////////
 //////////////////////set time out///////////////////////////////////
 function time(){setTimeout(function timeDelay(){
  const element=document.getElementById('timeinterval');
  const newpara=document.createElement('p');
  newpara.textContent="Hi i know it is delayed a lit bit so don't be confused about it.....";
  const oldParagraph=document.getElementById('timeinterval1');
 element.replaceChild(newpara,oldParagraph);
},2000);}
document.getElementById('pesudo').onclick=time;

////////////////////////setInterval//////////////////////////////////////////

// Get the div element by its ID
let colorDiv = document.getElementById("colorDiv");

// Array of colors to cycle through
let colors = ["red", "blue", "green","yellow","purple"];

// Index to keep track of the current color
let currentIndex = 0;

// Function to change the background color
let changeColor=function changeColor() {
    // Update the background color
    colorDiv.style.backgroundColor = colors[currentIndex];

    // Update the index to the next color
    currentIndex++;

    // If the index is equal to the length of the colors array, reset it to 0
    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}

// Use setInterval to change the background color every 3 seconds
let intervalID =setInterval(changeColor, 1000);

function cancelInterval() {
  clearInterval(intervalID);
  colorDiv.textContent = 'Now my color will not change';
}

// Attach the cancel function to the mouseenter event
colorDiv.onclick = cancelInterval;
/////////////////////////////////////////////////////////////


function submitForm() {
   alert ("This will redirect YOU");
   window.open("submissionform.html");
} 
console.log(submitForm)

function inputName() {
  //get the valus of input field with id=cardholder-name
  let x = document.getElementById("cardholder-name").value;
  //if x is empty
  let text;
  if(x==""){
    text= "Name must be filled out";
  }else{
    text=""
  }
  document.getElementById("demo2").innerHTML=text
}
console.log(inputName)

function inputCardNum() {
  //get the value of the input field with id=card-number
  let x = document.getElementById("card-number").value;
  //if x is not a number
  let text;
  if (isNaN(x)){
    text = "Wrong format, numbers only";
  } else {
    text = "";
  }
  document.getElementById("demo").innerHTML = text;
}
console.log(inputCardNum)

function inputYY() {
  //get the valus of input field with id=inputY
  let x = document.getElementById("inputY").value;
  //if x is empty
  let text;
  if(x==""){
    text = "Cannot be blank";
  } else {
    text="";
  }
  document.getElementById("demo4").innerHTML=text;
}
console.log(inputYY)

function inputMM() {
  //get the valus of input field with id=inputMM
  let x = document.getElementById("inputM").value;
  //if x is empty
  let text;
  if(x==""){
    text = "Cannot be blank";
  } else {
    text="";
  }
  document.getElementById("demo3").innerHTML=text;
}
console.log(inputMM)

function inputCVC() {
  //get the valus of input field with id=cvc
  let x = document.getElementById("CVC").value;
  //if x is empty
  let text;
  if(x==""){
    text = "Cannot be blank";
  } else {
    text="";
  }
  document.getElementById("demo5").innerHTML=text;
}
console.log(inputCVC)





const cardNumberInput = document.getElementById("cardholder-name");
const cardNameInput = document.getElementById("card-number");
const monthInput = document.getElementById("inputM");
const yearInput = document.getElementById("inputy");
const dateInputs = document.querySelector(".date-inputs");
const cvcInput = document.getElementById("CVC");













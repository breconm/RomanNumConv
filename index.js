const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const convertToRoman = (input) =>{
  const romanNumerals =[
  ['M',1000],
  ['CM',900],
  ['D',500],
  ['CD',400],
  ['C',100],
  ['XC',90],
  ['L',50],
  ['XL',40],
  ['X',10],
  ['IX',9],
  ['V',5],
  ['IV',4],
  ['I',1],
  ];
  let result = "";

  romanNumerals.forEach(([roman,value])=>{
    while (input >= value){
      result += roman;
      input -= value;
    }
  });
  return result;
};

const checkInput = (input)=>{
  const num = parseInt(input,10);
  if(!input || isNaN(num)){
    return "Please enter a valid number";
  } else if(num < 1){
    return "Please enter a number greater than or equal to 1";
  } else if(num > 3999){
    return "Please enter a number less than or equal to 3999";
  } 
    return null
};

const outputOut = ()=>{
  output.innerText ="";
  output.classList.remove("alert");
  output.classList.add("hidden");
}

numberInput.addEventListener("input",()=>{
  outputOut();
});

convertBtn.addEventListener("click", ()=>{
  const input = numberInput.value;
  const error = checkInput(input);

  if(error) {
    output.innerText = error;
    output.classList.add("alert");
    output.classList.remove("hidden"); 
  } else {
    const roman = convertToRoman(parseInt(input,10));
    output.innerText = roman;
    output.classList.remove("alert");
    output.classList.remove("hidden"); 
  }
});

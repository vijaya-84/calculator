let operator="";
let firstNumber="";
let secondNumber="";

function append(num){
    if(operator=="")
    {
        firstNumber+=num;
        document.getElementById('result').value=firstNumber;
    }
    else{
        secondNumber+=num;
        document.getElementById('result').value=secondNumber;

    }
}
function operation(op){
    operator=op;

}
function calculate(){
    let result;
    switch(operator){
        case '+': result=parseInt(firstNumber)+parseInt(secondNumber);  break;

        case '-': result=parseInt(firstNumber)-parseInt(secondNumber);  break;

        case '*': result=parseInt(firstNumber)*parseInt(secondNumber);  break;

        case '/': result=parseInt(firstNumber)/parseInt(secondNumber);  break;

    }
    document.getElementById('result').value=result;

}
function  clearresult(){
    operator="";
    firstNumber="";
    secondNumber="";

    document.getElementById('result').value="";
}
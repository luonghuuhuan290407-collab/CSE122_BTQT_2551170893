let currentExpression="";
function appendValue(value){
    currentExpression +=value;
    document.getElementById("operation").innerText=currentExpression;
}
function clearScreen(){
    currentExpression ="";
    document.getElementById("operation").innerText="";
    document.getElementById("result").innerText="0";
}
function calculate(){
    if (currentExpression == "") return;
    try{
        let computeString = currentExpression
        .replace(/x/g,'*')
        .replace(/chia/g,'/');
        let result = eval(computeString);
        document.getElementById("result").innerText=result;
    } catch(error){
        document.getElementById("result").innerText="Lỗi";
    }
}
function buttonclick(val){

    document.getElementById("screen").value+=val;
}
function clearDisplay(val){
    document.getElementById("screen").value=""

}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function del(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1);
}
function calc(){
    try{
        document.getElementById("screen").value=eval(document.getElementById("screen").value);
    }
    catch(err)
    {
        alert("Syntax error")
    }
}
let answerScreen = document.getElementById("output");
function display(num){
    answerScreen.value += num;
}
function Calculate(){
    try{
        answerScreen.value = eval(answerScreen.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
    function del(){
        answerScreen.value = answerScreen.value.slice(0,-1);
    }

    function Clear(){
        answerScreen.value = "";
    }
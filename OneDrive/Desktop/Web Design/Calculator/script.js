function clicked(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function clr()
{
    document.getElementById("display").value="";
}
function del() {
        var value = document.getElementById("display").value;
        document.getElementById("display").value = value.substr(0, value.length - 1);
    }
function equalClick(){
   try{
      display.value=eval(display.value);
   }
   catch(error){
     display.value= "Syntax Error"
   }
}
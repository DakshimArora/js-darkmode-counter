const btn=document.getElementById("btn")
const counter=document.getElementById("counter")
let count=0
let isDark=false;
btn.addEventListener("click",function(){
    if(isDark){
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        isDark=false
        btn.textContent="Dark mode"
    }
    else{
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        isDark=true
        btn.textContent="Light mode"
    }
    count=count+1
    counter.textContent=`Theme changed ${count} times`
})
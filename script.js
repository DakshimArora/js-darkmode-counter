const btn=document.getElementById("btn")
const counter=document.getElementById("counter")
let count=Number(localStorage.getItem("count")) || 0
counter.textContent=`Theme changed ${count} times`
let isDark=false;
const savedTheme=localStorage.getItem("theme")
if(savedTheme==="dark"){
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    btn.textContent="Light mode"
    
    isDark=true 
}
btn.addEventListener("click",function(){
    if(isDark){
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        isDark=false
        localStorage.setItem("theme","light")
        btn.textContent="Dark mode"
    }
    else{
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        isDark=true
        localStorage.setItem("theme","dark")
        btn.textContent="Light mode"
    }
    count=count+1
    localStorage.setItem("count",count)
    counter.textContent=`Theme changed ${count} times`
})
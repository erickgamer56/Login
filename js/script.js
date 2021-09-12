document.getElementById("btn").addEventListener("click",function(){
    var n1 = 0
    var n2 = 0
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    if (n1 == "adm56" && n2 == "adm123"){
        document.getElementById("escreva").innerHTML = "logado com sucesso. usuario: " + n1
    }else{
        document.getElementById("escreva").innerHTML = "dados incorretos"
    }
    n1=document.getElementById("n1").value = ""
    n2=document.getElementById("n2").value = ""
    var sub = document.getElementById("sub1")
    sub.style.top=""
    var sub1 = document.getElementById("sub")
    sub1.style.top=""
})
document.getElementById("n1").addEventListener("change", function(){
    var n3 = 0 
    n3 = document.getElementById("n1").value
    if (n3 == ""){
        var sub = document.getElementById("sub")
        sub.style.top=""
    }
    if (n3 != ""){
        var sub = document.getElementById("sub")
        sub.style.top="-73px"
    }
})
document.getElementById("n2").addEventListener("change", function(){
    var n3 = 0 
    n3 = document.getElementById("n2").value
    if (n3 == ""){
        var sub = document.getElementById("sub1")
        sub.style.top=""
    }
    if (n3 != ""){
        var sub = document.getElementById("sub1")
        sub.style.top="-73px"
    }
})
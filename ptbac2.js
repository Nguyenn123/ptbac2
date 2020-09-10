function tinhtoan(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)

    let denta = (b*b) - 4*a*c
if (a==0) {
    alert("k phải pt bậc 2")
}
else
    if (denta==0) {
        alert("x =" + (-b)/(2*a))}
        else if (denta>0){
            alert("x1 =" + ((-b +Math.sqrt(denta))/(2*a)))
            alert("x2 =" + ((-b -Math.sqrt(denta))/(2*a)))
    }
        else{
            alert("vô nghiệm")
    }
}
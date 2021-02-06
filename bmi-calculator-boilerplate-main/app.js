var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if (age.value=="" || heigh.value=="" || weight.value==""){
        alert("All fields are required!");
        document.getElementById("submit").removeEventListener("click",countBmi);
    }else{
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click",validateForm);

const countBmi=()=>{
    var p=[age.value, height.value, weight.value];
    form.reset();
    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100)
    var result='';

    if (bmi<18.5){
        result='Oh No! It looks like you are underweight!🙌! Make sure you add pounds and eat healthy!🤞';
    }else if (18.5<=bmi&&bmi<=24.9){
        result='Ok Zoomer, You are healthy!👍 That is very noice 👌';
    }else if(25<=bmi&&bmi<=29.9){
    result='Ok sir/madam , but uh ur over weight😶, so you can just reduse a liitle and then your fine🙄';
    }else if (30<=bmi&& bmi<=34.9){
    result='BRUH, I hate to say it but your fat 😂.You are over weight.🤣.You must be so mad,you --> 😤.LOL';
    }else if (30<=bmi){
    result='HOLY FRICK😥, OBESISTY ALERT? YEA NO DIP SHERLOCK 😣.OMG. EAT A COOKIE YOUR DEAD.😯'
    }

    var h1=document.createElement("h1");
    var p1=document.createElement("p1");

    var t =document.createTextNode(result);

    var b =document.createTextNode('BMI');

    var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(b);

    h1.appendChild(r);

    pr.appendChild(t);

    document.body.appendChild(h1);

    document.body.appendChild(p1);

    document.getElementById("submit").removeEventListener("click", countBmi);

    document.getElementById("submit").removeEventListener("click", validateForm);
}
    document.getElementById("submit").addEventListener("click", countBmi);
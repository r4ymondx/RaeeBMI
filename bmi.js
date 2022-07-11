 let calculate = document.getElementById("calc");
let comment = document.getElementById("comment");

calculate.addEventListener('click',  function calculate (){
    var w = 0;
    var h = 0;
    var r = 0;

    w = parseInt(document.getElementById("weight").value);
    h = document.getElementById("height").value;
    r = document.getElementById("result").value;

    r = (w/Math.pow(h,2)).toFixed(2);
    document.getElementById("result").innerHTML = r;
    
    if(r < 18.5){
      comment.innerHTML = "You are underweight"
      comment.style.color = "yellow";
    } else if ((r > 18.5) && (r < 24.9)){
        comment.innerText = "Your are within the normal & healthy weight range";
        comment.style.color = "green";
    }else if((r > 25) && (r < 29.9 )){
        comment.innerText = "Your are within the overweight range";
        comment.style.color = "red";
    }else{
        comment.innerText = "Your are within the obese range";
        comment.style.color = "maroon";
    }


   
 })

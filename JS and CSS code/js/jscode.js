const ss = document.getElementById("ss");
function myFunction(){
    var mytime = Number(document.getElementById("timeOut").value);
    var mytimes = Number(document.getElementById("timeOut").value='');
    document.getElementById("seconds").innerHTML = mytime;


    
    if (isNaN(mytime) || mytime <= 0) {
        alert("Enter a number that greater than zero.");
        return;
      }
    var countdown = setInterval( () => {
        mytime --;
        document.getElementById("seconds").innerHTML = mytime;
      ss.style.strokeDashoffset =440 - (440 * mytime) / 60;



        if(mytime <= 0){
            clearInterval(countdown);
            document.getElementById("seconds").innerHTML = "<span>Over</span>";
        }
    },1000)
}
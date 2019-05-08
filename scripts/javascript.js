function playRound(){
    
}




function computerPlay(){
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
      switch (x) {
    case 1:
      text = document.getElementById("demo").innerHTML = "Rock";
      break;
    case 2:
      text = document.getElementById("demo").innerHTML = "Paper";
      break;
    case 3:
       text = document.getElementById("demo").innerHTML = "Scissors";
      break;
  }}
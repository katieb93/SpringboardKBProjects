// Please fine solution to countdown exercise below. 

function countDown(i){
    let timer = setInterval(function(){
      i--;
      if(i >= 1){
        console.log(i);
      }
      else {
        clearInterval(timer);
        console.log('DONE!');
      }
  
    },1000)
  }

// Please fine solution to randomGame exercise below. 

function randomGame(){
    let rNum;
    let nofTimes = 0;
    let timer = setInterval(function(){
      rNum = Math.random();
      nOfTimes++
      if(rNum > .75) {
        clearInterval(timer);
        console.log("It took " + nOfTimes + " try/tries to get a number larger than .75.");
      }
    },1000)
  }

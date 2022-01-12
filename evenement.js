/*   document.getElementById(div1);

let click = 0;


div1.addEventListener('click', function(){
    click++;

    if(click===1){
    div1.style.width="500px"
    div1.style.backgroundColor="blue";
    }

   else if(click===2){
        div1.style.height="200px"
    }

    else if(click===3){
        div1.style.width="100px"
    }

    else if(click===4){
        div1.style.height="100px"
        div1.style.backgroundColor="red";
        
        click=0;
    }
    
});   */





// ---------------- Ballon de foot-------------------------//



function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  }

  ball.onclick = function() {

    let height = field.clientHeight - ball.clientHeight;
    let width = 100;

    animate({
      duration: 2000,
      timing: makeEaseOut(bounce),
      draw: function(progress) {
        ball.style.top = height * progress + 'px'
      }
    });

    animate({
      duration: 2000,
      timing: makeEaseOut(quad),
      draw: function(progress) {
        ball.style.left = width * progress + "px"
      }
    });
  }
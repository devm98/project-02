var tsmin = 0;
var auto = setInterval(function () {
  ++tsmin;
  console.log(tsmin);
  var number = document.getElementById('auto-number').innerHTML = tsmin;
  console.log(number);

  if (tsmin === 20) {
    myStopFunction();
  }
}, 400);
function myStopFunction() {
  clearInterval(auto);
}
let box = document.querySelector('.box')
let positionX = 0;
let positionY = 0;
const move = () => {
    if (positionY <=449 && positionX<=-1){
     positionY++;
     box.style.left = `${positionY}px`;
     setTimeout(move,1);
    }else if (positionY >=449 && positionX <=449){
     positionX++;
     box.style.top = `${positionX}px`;
     setTimeout(move,1);
    }else if (positionY >=0 && positionX >=449 ){
     positionY--;
     box.style.left = `${positionY}px`;
     setTimeout(move,1);
    }else if (positionY <=0 && positionX >=0){
     positionX--;
     box.style.top = `${positionX}px`;
     setTimeout(move,1);
    }
  }
move()
let number = document.querySelector('.number');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let intervalSet;
let zero = 0;
// start.onclick = ()=>{
//     function printNumbers(from, to) {
//   let current = from;
//
//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }printNumbers(1,100000000)
// }
start.onclick = ()=> {
    intervalSet = setInterval(()=>{
        zero++;
        number.innerHTML = zero;
    },1000)}

stop.onclick = ()=>{
    clearInterval(intervalSet)
}



//2) Отобразить на странице цифру 0 , создать 2 кнопки: stop и start
// Если нажать на start то цифра начнет увеличиваться на единицу до того момента пока вы не нажмете на кнопку stop
// Используйте методы которые мы прошли на уроке

//q.1 -> Create a button UI and add debounce as follws -> 
//      =>Show "Button pressed X time" every time button pressed
//      =>Show "Triggerd Y time" count every 800ms of debounce

const btn = document.querySelector(".increase")
const btnPressed = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

let pressedCount = 0;
let triggerCount = 0;

// Debouncing

// // Implementing debouncing using lodash libarry
// let debounceCount = _.debounce(() => {
//   triggerCount++;
//   count.innerHTML = triggerCount;
// }, 800)

// btn.addEventListener("click", () => {
//   pressedCount++;
//   btnPressed.innerHTML = pressedCount;

//   debounceCount()
// })


//Throttling
// =>Show "Triggerd Y time" count every 800ms of debounce

// let throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800)

// btn.addEventListener("click", () => {
//   pressedCount++;
//   btnPressed.innerHTML = pressedCount;

//   throttledCount()
// })



// Custom Debounce

function customDebounce(callback, delay){
  let timer;

  return function(...args){

    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay)
  }
}

// let customDebounceCount = customDebounce(() => {
//   triggerCount++;
//   count.innerHTML = triggerCount;
// }, 800)

// btn.addEventListener("click", () => {
//   pressedCount++;
//   btnPressed.innerHTML = pressedCount;

//   customDebounceCount()
// })



//Custom custom Throttle

function customThrottle(callback, delay){
  let last = 0;
  
  return function(...args){
    let now = new Date().getTime()
    console.log(now - last);

    if(now - last < delay) return;
    
    last = now;
    return callback(...args);
  }
}

let customThrottleCount = customThrottle(() => {
  triggerCount++;
  count.innerHTML = triggerCount;
}, 1000)

btn.addEventListener("click", () => {
  pressedCount++;
  btnPressed.innerHTML = pressedCount;

  customThrottleCount()
})

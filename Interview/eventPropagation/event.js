
const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

//Event Bubbling

// div.addEventListener("click", () => {
//   alert("Div")
// })

// form.addEventListener("click", () => {
//   alert("form")
// })

// button.addEventListener("click", () => {
//   alert("Button")
// })

/**
 * Here the Event propagte from => Button -> form -> Div
 * 
 * In Event bubbling the event are triggered in bottom up approach.
 * Means first the child event is triggerd then the nested parent elements are triggered.
 */



//What is event.target, this.target, event.currentTarget

// div.addEventListener("click",commonFunction)

// form.addEventListener("click",commonFunction)

// button.addEventListener("click", commonFunction)

// function commonFunction(event){
//   alert(`
//       Current Target = ${event.currentTarget.tagName},
//       Target = ${event.target.tagName},
//       This = ${this.tagName}
//   `)
// }

/**
 * event.currentTarget => This will always point to the element on which the event is attached.
 * event.target => This will point to the element which triggered the event.
 * this => This will point to the element on which the event is attached.
 */




//Event Capturing

// div.addEventListener("click", () => {
//   alert("Div")
// }, {capture: true})

// form.addEventListener("click", () => {
//   alert("form")
// }, true)

// button.addEventListener("click", () => {
//   alert("Button")
// }, true)

/**
 * Here the event event propagate from => Div -> form -> Button
 * 
 * Here the capture: true means we set the propagation to event capturing
 * 
 * This is the opposite of event bubbling.
 * In thid method the event is first captured by the outermost element and propagated to the inner elements.
 * It is also called trickle down.
 */



//Stop Event Propagation

div.addEventListener("click", (event) => {
  event.stopPropagation()
  alert("Div")
})

form.addEventListener("click", (event) => {
  event.stopPropagation()
  alert("form")
})

button.addEventListener("click", (event) => {
  event.stopPropagation()
  alert("Button")
})

/**
 * To stop the event propagation we use event.stopPropagation()
 * This will stop the event from propagating to the parent elements
 */
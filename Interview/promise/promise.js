
function viewTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (video) {
        resolve(`View ${video}`);
      } else {
        reject("No video found to view");
      }
    }, 1500);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (video) {
        resolve(`Like ${video}`);
      } else {
        reject("No video found to like");
      }
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (video) {
        resolve(`Share ${video}`);
      } else {
        reject("No video found share");
      }
    }, 2000);
  });
}

// Call backs in promise

// viewTheVideo("video1").then((vdo) => {
//   console.log(vdo);
//   likeTheVideo("video1").then((vdo) => {
//     console.log(vdo);
//     shareTheVideo("video1").then((vdo) => {
//       console.log(vdo);
//     })
//   })
// }).catch(err => console.log(err))

/**
 * This occur the callback hell which is difficult to manage
 * So to overcome this we need to implement promise chaing.
 */



// Promise Chaning

// viewTheVideo("Video 2")
//   .then((vdo) => {
//     console.log(vdo);
//     return likeTheVideo("Video 2") //Here we return another promise and resolve it in another then block
//   }).then((vdo) => {
//     console.log(vdo);
//     return shareTheVideo("Video 2")
//   }).then((vdo) => {
//     console.log(vdo);
//   }).catch(err => console.log(err))


//Promise Combinators

//Promise.all()

// Promise.all([
//   viewTheVideo("Video 3"),
//   likeTheVideo("Video 3"),
//   shareTheVideo("Video 3")
// ]).then((result) => {
//   console.log(result);
// }).catch(err => console.log(err))

/**
 * The Promise.all() method returns an array of fullfillment value from a list of promises, when all promises fulfill.
 * If any promise in the array rejects, Promise.all immediately rejects with the error from that promise.
*/



//Promise.race()

// Promise.race([
//   viewTheVideo("Video 3"),
//   likeTheVideo("Video 3"),
//   shareTheVideo("")
// ]).then((result) => {
//   console.log(result);
// }).catch(err => console.log(err))

/**
 * Here the value is "like video 3" because likeVideo() take less time to sattle.
 * 
 * The Promise.race() method returns a promise that settles (either fulfills or rejects) as soon as the first promise in an array resolves or rejects, returning that promise's value or error.
 */



//Promise.allSattle()

// Promise.allSettled([
//   viewTheVideo("Video 3"),
//   likeTheVideo("Video 3"),
//   shareTheVideo("")
// ]).then((result) => {
//   console.log(result);
// }).catch(err => console.log(err))

/**
 * Promise.allSettled() waits for all promises from the array to settle, meaning either resolve or reject.
 * It then returns an array of objects with the status and value or reason for each promise.
 * In this method catch block will never work
 */



//Promise.any()

// Promise.any([
//   viewTheVideo("Video 3"),
//   likeTheVideo(""),
//   shareTheVideo("Video 3")
// ]).then((result) => {
//   console.log(result);
// }).catch(err => console.log(err))


/**
 * Here the op is "view video 3". Because it ignore the rejection of likeVideo().
 * 
 * Promise any() method takes an array of promises as a parameter and returns the first fulfilled promise
 * It returns a rejected value when all of the promises in the array return rejects or if the array is empty.
 */




// Async / await -> By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.

// const asyncFunction = async () => {
//   try {
//     const msg1 = await viewTheVideo("Video 4")
//     const msg2 = await likeTheVideo("")
//     const msg3 = await shareTheVideo("Video 4")

//     console.log({
//       msg1,
//       msg2,
//       msg3,
//     });
//   } catch (error) {
//     console.log("Error : ", error);
//   }
// }

// asyncFunction()




//Interview Qestion


//q.1 -> What is the output

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2)
// })

// promise1.then((data) => {
//   console.log(data);
// })

// console.log("end");



//q.1 -> What is the output

// console.log("start");

// const promise2 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2)
//   console.log(3);
// })

// promise2.then((data) => {
//   console.log(data);
// })

// console.log("end");

/**
 * OP:- start -> 1 -> 3 -> end -> 2
 * 
 * Because when the promise is initialized then the promise execute the synchronous code forst 
 */




//q.3 -> What is the output

// console.log("Start");

// const fn = () => {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("Result")
//   })
// }

// console.log("Middle");

// fn().then((data) => {
//   console.log(data);
// })

// console.log("End");




//Promise Polyfill

function CustomPromise(executor){
  let onResolve, onReject;

  function resolve(value){
    onResolve(value)
  }

  function reject(value){
    onReject(value)
  }

  this.then = function(callback){
    onResolve = callback;
    return this
  }

  this.catch = function(calback){
    onReject = calback;
    return this;
  }

  executor(resolve, reject)

}


const examplePromise = new CustomPromise((resolve, reject) => {
  // setTimeout(() => {
  // }, 2000);
  resolve(1000)
})

examplePromise.then((data) => {
  console.log(data);
}).catch((err) => console.log("Error ", err))
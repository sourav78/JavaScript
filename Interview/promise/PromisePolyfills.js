// Promise.all() polyfil

function customPromiseAll(promiseArr) {
  return new Promise((resolve, reject) => {

    let result = []

    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then((data) => {
        result[i] = data

        if (i === promiseArr.length - 1) {
          resolve(result)
        }

      }).catch((err) => {
        reject(err)
      })
    }

  })
}


// Polyfill of Promise.allSettled()

function customPromiseAllSettled(promiseArr) {
  return new Promise((resolve, reject) => {

    let result = []

    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then((data) => {
        result[i] = data
        if (i === promiseArr.length - 1) {
          resolve(result)
        }
      }).catch((err) => {
        result[i] = err
        console.log(err);

        if (i === promiseArr.length - 1) {
          resolve(result)
        }
      })


    }

  })
}


// This is fucntion is used to create promise

function createAsyncTask(data, time, needToReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (needToReject) {
        reject(`${data} is rejected`);
      } else {
        resolve(data);
      }
    }, time);
  });
}

const p1 = createAsyncTask("p1", 400);
const p2 = createAsyncTask("p2", 1000, 1);
const p3 = createAsyncTask("p3", 500);
const p4 = createAsyncTask("p4", 3000);

customPromiseAllSettled([p1, p3, p2, p4]).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

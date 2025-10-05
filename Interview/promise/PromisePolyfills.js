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

// Polifill of Promise.any()

function customPromiseAny(promiseArr) {
  return new Promise((resolve, reject) => {

    let rejectArr = []

    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then(data => {
        resolve(data)
        return
      }).catch(err => {
        rejectArr.push(err)
        if (rejectArr.length === promiseArr.length) {
          reject(new AggregateError(rejectArr))
        }
        // console.log(rejectArr);
      })

    }

  })
}

// Polifils of Promise.race()

function customPromiseRace(promiseArr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      // Promise.resolve(promiseArr[i])
      //   .then(resolve)   // as soon as one resolves → resolve outer promise
      //   .catch(reject);  // as soon as one rejects → reject outer promise

      promiseArr[i].then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
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

const p1 = createAsyncTask("p1", 400, 1);
const p2 = createAsyncTask("p2", 1000, 1);
const p3 = createAsyncTask("p3", 200, 1);
const p4 = createAsyncTask("p4", 3000, 1);

customPromiseRace([p1, p3, p2, p4]).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

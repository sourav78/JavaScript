function createAsyncTask(data, time, needToReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (needToReject) {
        reject(data);
      } else {
        resolve(data);
      }
    }, time);
  });
}

const p1 = createAsyncTask("p1", 1000);
const p3 = createAsyncTask("p3", 1500, 1);
const p2 = createAsyncTask("p2", 2500);
const p4 = createAsyncTask("p4", 3000);

//Polyfill of Promise.all

// PolyfillAll([p1, p3, p2, p4]).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


function PolyfillAll(promiseArray) {
  return new Promise((resolve, reject) => {
    const result = [];

    let flag = promiseArray.length - 1;
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i]
        .then((data) => {
          result[i] = data;

          if (i === flag) {
            resolve(result);
          }
        })
        .catch((err) => {
            reject(err)
        });
    }
  });
}


//Async waterfall

async function asyncWaterfall(promiseArray) {
    for (const pr of promiseArray) {
      try {
        const data = await pr;
        console.log(data);
      } catch (error) {
        console.log("Error encountered:", error);
      }
    }
  }
  
  asyncWaterfall([p1, p2, p3, p4]);
const time = document.getElementById("time")
setInterval(() => {
    let currentTime = new Date().toLocaleTimeString()
    time.innerHTML = currentTime
    // console.log(currentTime);
}, 1000)
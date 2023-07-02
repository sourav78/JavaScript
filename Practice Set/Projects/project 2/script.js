const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

calculate.addEventListener("click", () => {
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const heightM = height/100
    
    if(height === '' || height < 0 || isNaN(height)){
        result.innerText = `Please Give a valid Height`
        result.style.color = "red"
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerText = `Please Give a valid Weight`
        result.style.color = "red"
    }else{
        result.style.color = "black"
        const BMI = (weight / (heightM**2)).toFixed(2)
        if(BMI < 18.6){
            result.innerText = `Your BMI is \"${BMI}\". This is consider Underweight`
        }else if(BMI > 18.6 && BMI < 24.9){
            result.innerText = `Your BMI is \"${BMI}\". This is consider Healthy`
        }else if(BMI > 24.9){
            result.innerText = `Your BMI is \"${BMI}\". This is consider Overweight`
        }
    }
})
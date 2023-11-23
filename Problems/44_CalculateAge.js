//write a function in java script to calculate the age of a person

function CalculateAge(dob){
    try {
        if(dob.includes("-")){
            let year = Number(dob.split("-")[2])
            let month = Number(dob.split("-")[1])
            let days = Number(dob.split("-")[0])
    
            let date = new Date().getFullYear()
    
            if(year <= date && month <= 12){
            
                if((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && days > 31){
                    throw "Please enter valid Dateeeeeeee"
                }else if((month === 4 || month === 6 || month === 9 || month ===11) && days > 30){
                    throw "Please enter valid Date"
                }else if(month === 2 && days > 28){
                    throw "Please enter a valid age"
                }else{
                    console.log(`Age is: ${date - year} year ${Math.abs(month - new Date().getMonth())+1} month ${Math.abs(days - new Date().getDate())} days`);
                }
            }else {
                if(month > 12){
                    throw "Month should not be greater than 12"
                }else {
                    throw "Birth day year is not should be greater than current year"
                }
            }
        }else{
            throw "DOB format should be 'dd-mm-yyyy'"
        }
    } catch (error) {
        console.log(error);
    }
}

CalculateAge("07-09-2009")
// /Angle Between Hands of a Clock

const findAngle = (hours, minutes) => {
    if(minutes === 0){
        return hours*30
    }else{
        let angle = 30 * hours - 11/2 * minutes
        if(angle > 180 || angle < -180) {
            let sm = Math.abs(angle - 360)
            let lg = Math.abs(angle + 360)
            return Math.min(sm, lg)
        }else {
            return Math.abs(angle)
        }
    }
    
}

console.log(findAngle(1, 14));
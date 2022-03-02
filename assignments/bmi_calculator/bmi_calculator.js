// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if ((height>0)&&(mass>0)){
        BMI = mass / (height * height);
        return BMI
    }
    else{
        return  "INVALID INPUT"
    }
}

module.exports = BMICalculator;

function isSkippedValue(value) {
  if(value === '') { return true }
  
  else if(value === undefined) { return true }
  
  else { return false }
}

function isNumericValue(value) {
  if(value === undefined) {return false }
  
  if(value === '') {return false }
  
  else if(isNaN(value)) {return false} 
  
  else if (value === null) {return true}
  
  else{return true }
}



function isNothingValue(value) {
  
  if (value === undefined){return true }
  
  else if(value == null) {return true }
  
  else if(value === '') {return true}
  
  else {return false}
} 

function isAcceptableValue(value) {
  const operators = ['+', '-', '*', '/']
  
  return typeof Number(value) === 'number' || operators.includes(value)
}

function performCalculationStep(firstOperand, operator, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '*':
      return firstOperand * secondOperand
    case '/':
      return firstOperand / secondOperand
    default:
      throw new Error('Invalid input!')
  }
}

function calculate(calculationSteps) {
  let total
  let operator

  calculationSteps.forEach(nextCalculationStep => {
    if (!isAcceptableValue(nextCalculationStep)) {
      throw new Error('Invalid input!')
    }

    if (isNothingValue(total) && isNumericValue(nextCalculationStep)) {
      total = Number(nextCalculationStep)

    } else if (isNothingValue(operator) && !isSkippedValue(nextCalculationStep)) {
      operator = nextCalculationStep

    } else if (isNumericValue(nextCalculationStep)) {
      total = performCalculationStep(total, operator, Number(nextCalculationStep))
      operator = null

    } else if (!isSkippedValue(nextCalculationStep)) {
      throw new Error('Invalid input!')
    }
  })

  return total
}

module.exports = calculate

function getIsEvenCalc(a,b) { // 1
  return a%2 ? a+b : a*b;
}

function getQuartersCordinate(x, y) { // 2
  if (x>0) {
    if (y>0) {
      return 1
    }
    return 4;
  }

  if (y>0) {
    return 2
  }
  return 3;
}

function calcPositiveSum(a, b, c) { // 3
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i] > 0 ? arguments[i] : 0;
  }
  return sum
}

function getMaxResult(a, b, c) { // 4
  if (a*b*c > a+b+c) {
    return a*b*c+3;
  }
  return a+b+c+3;
}

function getRatingStudy(a) { // 5
  const arrRating = ["F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","A","A","A","A","A","A","A","A","A","A","A"];
  return arrRating[a];
}

const resultCalcIsEven = getIsEvenCalc(4,3)
console.log(resultCalcIsEven);

const resultCordinateQuarters = getQuartersCordinate(4,-3)
console.log(resultCordinateQuarters);

const resultPositiveSum = calcPositiveSum(4,3,-5)
console.log(resultPositiveSum);

const resultMaxResult = getMaxResult(4,3,0.5)
console.log(resultMaxResult);

const resultStudyRating = getRatingStudy(55)
console.log(resultStudyRating);

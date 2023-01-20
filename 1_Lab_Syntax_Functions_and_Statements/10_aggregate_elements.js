function aggregateElements(array){
    let sum = array.reduce((a, b) => a + b, 0);
    let inverseNums = array.map(myFunction);

    function myFunction(value){
      return 1 / value;
    }
    let inverseSum = inverseNums.reduce((a, b) => a + b, 0);

    console.log(sum);
    console.log(inverseSum);
    console.log(array.join(''));

}

aggregateElements([1, 2, 3]);
console.log('--------------------');
aggregateElements([2, 4, 8, 16]);

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    console.log(x);
  }

gcd_two_numbers(15, 5);
console.log('--------------------');
gcd_two_numbers(2154, 458);

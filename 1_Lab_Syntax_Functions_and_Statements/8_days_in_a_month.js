function daysInMonth(m, y){
        return new Date(y, m, 0).getDate();
}

let a = daysInMonth(1, 2012)
console.log(a)
let b = daysInMonth(2, 2021)
console.log(b)
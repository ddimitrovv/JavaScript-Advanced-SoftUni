function evenElements(array) {
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            outputArray.push(array[i]);
        }
    }
    console.log(outputArray.join(' '))
}

evenElements(['20', '30', '40', '50', '60']);
evenElements(['5', '10']);

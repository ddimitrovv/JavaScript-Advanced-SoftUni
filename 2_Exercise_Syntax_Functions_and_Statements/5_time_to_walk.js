function timeToWalk(steps, footprintLenght, speed) {
    let distance = steps * (footprintLenght / 1000); //kilometers
    let breaks = Math.floor(distance/0.5) / 60; //breaks in hours
    let time = (distance / speed) * 3600; // seconds
    let hours = Math.floor((time / 3600) + breaks);
    let minutes = Math.floor((time - hours * 60)/60) + breaks * 60;
    let seconds = Math.round(time - (hours * 3600 + minutes * 60) + breaks * 3600)
    console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);

function roadRadar(speed, area) {
    let speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    if (speed > speedLimits[area]) {
        let difference = speed - speedLimits[area];
        let status = '';
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42);
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}

function distanceTravelledInFeet(pickUp, dropOff) {
    return Math.abs(pickUp - dropOff) * 264;
}

function calculatesFarePrice(pickUp, dropOff) {
    const feetTravelled = distanceTravelledInFeet(pickUp, dropOff);
    if (feetTravelled < 400) {
        return 0;
    }
    if (feetTravelled > 2500) {
        return 'cannot travel that far';
    }
    if (feetTravelled > 2000) {
        return 25;
    }
    return (feetTravelled - 400) * 0.02;
}


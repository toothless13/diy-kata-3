const reachDestination = (distance, speed) => {
    if(typeof distance !== 'number') {
        return false;
    }

    const initialTime = distance / speed;
    let timeRounded;
    const timeRemainder = (initialTime % 1);
    
    if(timeRemainder === 0.5 || timeRemainder === 0) {
        timeRounded = initialTime;
    } else if(timeRemainder < 0.5) {
        timeRounded = initialTime + (0.5 - timeRemainder);
    } else {
        timeRounded = initialTime + (1 - timeRemainder);
    }

    return `I should be there in ${timeRounded} hours.`
};

module.exports = reachDestination;

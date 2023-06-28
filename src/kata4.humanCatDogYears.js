const humanCatDogYears = (number) => {
    const yearsArr = [];
    const catDogFirstYear = 15;
    const catDogSecondYear = 9;
    const catDogTwoYears = catDogFirstYear + catDogSecondYear
    const otherCatYears = 4;
    const otherDogYears = 5;
    
    const catAge = (number) => {
        return catDogTwoYears + ((number - 2) * otherCatYears);
    }

    const dogAge = (number) => {
        return catDogTwoYears + ((number - 2) * otherDogYears);
    }

    if(typeof number !== 'number') {
        return false;
    }
    if(number === 0) {
        return [0, 0, 0];
    }
    if(number === 1) {
        return [1, catDogFirstYear, catDogFirstYear];
    }
    if(number === 2) {
        return [2, catDogTwoYears,catDogTwoYears]
    }
    if(number > 2) {
        yearsArr.push(number);
        yearsArr.push(catAge(number));
        yearsArr.push(dogAge(number));
    }
    
    return yearsArr;

};

module.exports = humanCatDogYears;

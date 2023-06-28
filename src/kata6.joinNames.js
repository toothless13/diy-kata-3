const joinNames = (namesObj) => {

    let namesArr = namesObj.map(object => object.name);

    const namesStr = namesArr.reduce((acc, curr, index) => {
        if (index !== namesArr.length - 1) {
            return `${acc}, ${curr}`;
        } else {
            return `${acc} & ${curr}`;
        }
    });
    return namesStr;
};

module.exports = joinNames;

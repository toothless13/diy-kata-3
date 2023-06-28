const joinNames = (namesObj) => {

    let namesArr = namesObj.map(object => object.name);

    if(namesArr.length === 1) {
        return namesArr[0];
    }
    if(namesArr.length === 2) {
        return `${namesArr[0]} & ${namesArr[1]}`;
    }
    const lastName = namesArr.pop();
    const secondLastName = namesArr.pop();
    let namesString = `${namesArr.join(", ")}, ${secondLastName} & ${lastName}`;
    return namesString;
};

module.exports = joinNames;

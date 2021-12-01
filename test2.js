/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
    let newData = [];
    let newDataIndex = 0;
    let temp = {};

    for (let i = 0; i < data.length; i++) {
        if (!temp[data[i]]) {
            temp[data[i]] = 1;
            newData[newDataIndex] = data[i];
            newDataIndex++;
        }
    }

    return newData
}

console.log(result(data));

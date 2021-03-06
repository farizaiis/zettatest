/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
    {
        session_name: 'first test',
        classes: [
            { class_name: undefined, students: [{ student_name: 'budi' }] },
        ],
    },
    {
        session_name: null,
        classes: [
            { class_name: 'second class', students: [{ student_name: 'adi' }] },
        ],
    },
];

function result(data) {
    if (Array.isArray(data)) {
        return data.map(result);
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
        let newObject = {};
        Object.keys(data).forEach((key) => {
            let newData = result(data[key]);
            if (newData != null && typeof newData != 'undefined')
                newObject[key] = newData;
        });
        data = newObject;
    }
    return data;
}

console.log(JSON.stringify(result(data)));

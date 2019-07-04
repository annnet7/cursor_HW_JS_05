console.log("Task2 A function which returns sum of all numbers from 1 to n using recursion.");
//A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) {
    if (n == 1) return 1;
    return n + sumAll(n - 1);
}
let checkNum = 2;
console.log(`sum n=${checkNum} - ` + sumAll(checkNum)); // 3
console.log(`sum n=${checkNum*2} - ` + sumAll(checkNum * 2)); // 10


//Task4
console.log("Task4");
//A function which returns factorial of number using recursion.
function factorial(n) {
    if (n == 1) return 1;
    else return factorial(n - 1) * n;
}
checkNum = 3;
console.log(`${checkNum}!= ` + factorial(checkNum)); // 6
console.log(`${checkNum+2}!= ` + factorial(checkNum + 2)); // 120


//Task 6 A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.
console.log("Task6");

function filterNumbers(arr, maxNumber) {
    let newArr = [];
    arr.forEach(element => {
        if (element <= maxNumber) newArr.push(element);
    });
    return newArr;
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]

//Task 7 A function that returns object with min and max numbers from array of numbers.
console.log("Task7");

function minMax(arr) {
    return {
        min: Math.min.apply(null, arr),
        max: Math.max.apply(null, arr)
    };


}
let checkArray = [1, 4, 8, 2, 20, 5, 1]; // { max: 20, min: 1 }

console.log(checkArray);
console.log(minMax(checkArray));

//Task 8 A function that returns average of numbers in array.
console.log("Task8");

function average(arr) {
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    let length = arr.reduce((accumulator) => accumulator + 1);
    return Math.round(100 * (sum / length)) / 100;

}
console.log("Average num is - " + average([1, 4, 2])); // 2.33

//Task 9 A function which concats all first-nested arrays in one array (use reduce):
console.log("Task9");

function concatFirstNestedArrays(arr) {
    var concat = arr.reduce(function(result, currentValue) {
        return result.concat(currentValue);
    }, []);
    return concat;

}
// [0, 1, 2, 3, 4, 5]
let checkArray2 = [
    [0, 1],
    [2, 3],
    [4, 5]
];
console.log(checkArray2)
console.log("стало: " +
    concatFirstNestedArrays(checkArray2));


//Task 10 A function accepts array of users and returns object of users where key is user id and value user data.
console.log("Task10");
const users = [
    { id: 1, name: 'John', birthday: '2001-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '2003-3-11' },
    { id: 4, name: 'Luce', birthday: '2001-12-22' }
];

function usersToObject(users) {
    let UsersObj = {};
    users.forEach(function(item) {
        UsersObj["" + item["id"]] = item["name"] + " " + item["birthday"]
    });
    return UsersObj;
}
console.log(users);
console.log("after transform:");
console.log(usersToObject(users));
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };

//Task 11 A function returns array of users that have birthdays in a specific month.
console.log("Task11");

function filterUsersByMonth(users, month) {
    let UsersObj = {};
    users.forEach(function(item) {
        let dateOfBirth = new Date(item["birthday"]);
        let monthNum = dateOfBirth.getMonth();
        //console.log("month num is: " + monthNum);
        if (monthNum == month) UsersObj["" + item["id"]] = item["name"] + " " + item["birthday"];

    });
    return UsersObj;

}
console.log(filterUsersByMonth(users, 1)); // [{ name: 'Bill', birthday: '1999-1-19' }]

//Task 12
//A function returns name and age of users separated by comma that are older than 18.
function getAdultNames(users) {
    //console.log("adults");
    let birthstring = "1990-03-21";
    // функция для определения возраста
    function getAge(birth) {
        let today = new Date();
        let actualDate = [today.getFullYear(), today.getMonth(), today.getDate()];
        let birthDayString = birth.split("-");
        let birthDay = birthDayString.map(function(currentValue) { return Number(currentValue) });


        let years = actualDate[0] - birthDay[0];
        //год подходит, но месяц или день не наступил:
        if (actualDate[1] < birthDay[1]) years--;
        else {
            if ((actualDate[2] == birthDay[2]) && (actualDate[1] == birthDay[1])) years--;
        }
        return years;
    }
    //console.log(getAge(birthstring));
    let adults = "";
    users.map(function(currentValue, index) {
        let dateOfBirth = currentValue["birthday"];

        let age = getAge(dateOfBirth);
        if (age >= 18) adults += currentValue["name"] + " - " + age + " years, ";
    });
    console.log(adults);
    //console.log(birthDay);
}
getAdultNames(users) // 'John 19, Luce 18'

//////////////////////////////////////////

//Tasks with timeouts
console.log("\n\n\nTasks with timeouts \n\n\n");

console.log("Task3 - Timer:");
//A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str
function bombTimer(str, time) {

    let bombTickingInterval = setInterval(function() {
        if (time > 0) {
            console.log(time);
            time--;
        } else {
            console.log(str);
            clearInterval(bombTickingInterval);
        }
    }, 1000);

}
bombTimer('Boooom', 5);

function bombTimerRec(str, time) {
    if (time > 0) {
        console.log(time);
        setTimeout(function() { bombTimerRec(str, time - 1) }, 1000);
    } else {
        console.log(str);
    }
}
setTimeout(function() {
    console.log("Task 5 - recursion timer started")
    bombTimerRec('Boooom', 4);
}, 9000)



//A function which prints str after n seconds.

function printTimeout(str, n) {
    const timeInMs = n * 1000;
    setTimeout(function() { console.log(str); }, timeInMs);
}
setTimeout(function() {
    console.log("Task 1 -  hello will appear after 10secs in console");
    printTimeout('hello', 10) // hello will appear after 10secs in console
}, 16000);
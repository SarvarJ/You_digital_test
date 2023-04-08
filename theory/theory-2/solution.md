Проблему в коде можно решить просто заменив var на let:

const arr= [10, 12, 15, 21]
for ( let i =0; i < arr.length; i++) {
    setTimeout (() => {
        console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 3000)
}


Если же ограничиваться возможностями ES5, можно вынести setTimeout в отдельную функцию:

var arr= [10, 12, 15, 21];
for ( var i =0; i < arr.length; i++) {
    newFunction(i);
}

function newFunction(i) {
    setTimeout (function () {
        console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 3000);
}
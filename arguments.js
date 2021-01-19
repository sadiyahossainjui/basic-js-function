function sub(num1, num2) {
    console.log(num1 - num2)
}
sub(30, 20)





var arr1 = [10, 20, 30]
var arr2 = [40, 50, 60]
var arr3 = [70, 80, 90]

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]

    }
    console.log(sum)

}

sumOfArray(arr1)
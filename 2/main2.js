String(10);

var div = 3 ** 3;

console.log(div);

var myFunction = function(x, y) {
    return x + y + 35;
}

console.log(myFunction(10,7));


var yourFunction = function(x, z) {
    return x ** z + 1203;
}

console.log(yourFunction(3, 19));

var myweight = function(height, weight) {
    return "my height is " + height + " and my weight is " + weight
}

console.log(myweight(176, 88));

var introduce = function(name, age,  gender) {
    return "Hi my name is " + name + " i'm " + age + " years old. and i am a " + gender + "."
}

console.log(introduce("gilsoon", 20, "female"));


// 문자열 

var 단어 = "함수야놀자";

console.log(단어[3]);

var 동물 = ["원숭이", "코끼리", "토끼", "호랑이", "개"];

console.log(동물[2]);

var 문자길이 = "dksfanklwnekflakfkalgjkalg;afkcvnzlckfdsafdsfalzsdfkankg";

 console.log(문자길이.length);

 var 문자길이2 = "dksffdsafhjewrjkafhiashfiahganklwnekflakfkalgjkalg;afkcvnzlckfdsafdsfalzsdfkankg";

 console.log(문자길이2.length);

 console.log(단어.length);

 //else if


if (1 * 5 === 5) {
    console.log('맞아')
} else {
    console.log('틀려')
};

if (5 * 5 === 27) {
    console.log('맞아')
} else {
    console.log('틀려')
};

if (1 * 5 === 5) {
    console.log('맞아')
} else {
    console.log('틀려')
};

var 내점수 = 97;

if (내점수 >= 95) {
    console.log('A' + '+')
} else if (내점수 >= 90) {
    console.log('A')
} else if (내점수 >= 85) {
    console.log('B' + '+')
} else if (내점수 >= 80) {
    console.log('B')
} else if (내점수 >= 75) {
    console.log('C' + '+')
} else if (내점수 >= 70) {
    console.log('C')
} else if (내점수 >= 65) {
    console.log('D' + '+')
} else if (내점수 >= 60) {
    console.log('D')
} else if (내점수 <= 59) {
    console.log('F')
};
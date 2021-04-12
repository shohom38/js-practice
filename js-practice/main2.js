var carMaker = "Hyundai";
var carName = "Sonata";
var price = 35000000;

document.getElementById("demo").innerHTML =
"이 차의 브랜드는" + " " + carMaker + " " + "입니다." + " " + "차의 이름은" + " " + carName + " " + "이며" + " " + "가격은" + " " + price + "원" + " " + "입니다.";

var car = {
    Maker: "Kia",
    Name: "Stonic",
    value: 2500000,
    position: "small size SUV"
};

document.getElementById("carExplain").innerHTML =
car.Maker + " 의 " + car.Name + " 입니다. 이 차의 가격은 " + car.value + " 입니다. 이 차의 포지션은 " + car.position + " 입니다.";

car = null;

document.getElementById("carExplain").innerHTML = typeof car;
var count = 0;

// Primative Types;

var integerZero = 0;
var stringZero = '0';
var booleanVariable = false;
var cat = {
    feet: 4,
    eyes: 2,
    name: 'Mingkoy',

};

function showMyHtmlDocument() {
    var message = `My cat's name is ${cat.name}`;
    document.body.getElementsByTagName('cat-name').innerHTML = message;    
}

function showMyCat() {
    document.getElementById('cat-name').innerHTML = message;
}

function isZeroEqual() {
    const isZero = integerZero == stringZero;
    alert('Integer zaro is equals to String Zero is $(isZero)');
}

function sayHello() {
    alert(`Hello! It's my first javascript code`);
}

function addCount() {
    count++;
    document.getElementsByClassName('count')[0].innerHTML=count;
}
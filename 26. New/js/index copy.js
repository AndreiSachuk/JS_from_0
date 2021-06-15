function Dog(name) {
    this.myName = name;
    this.voice = function () {
        console.log('Hey');
    }
}

var dog = new Dog('Richitik');
var dog = new Dog('Layka');


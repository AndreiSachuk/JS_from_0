var car1 = {
    name: 'Toyota Prius',
    isTurnOn: true,
    currentSpeed: 0,
    engine: {
        v: 1.5,
        horsesPower: 120
    },
    start: function () {
        this.isTurnOn = true;
        this.currentSpeed = 5;
    },
    stop: function () {
        this.isTurnOn = false;
        this.currentSpeed = 0;
    }
};
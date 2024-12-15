// Определяем интерфейсы для основных подсистем автомобиля
// Реализация класса двигателя
var CarEngine = /** @class */ (function () {
    function CarEngine(type, horsepower) {
        this.status = 'stopped';
        this.type = type;
        this.horsepower = horsepower;
    }
    CarEngine.prototype.start = function () {
        this.status = 'running';
    };
    CarEngine.prototype.stop = function () {
        this.status = 'stopped';
    };
    CarEngine.prototype.getInfo = function () {
        return "Engine Type: ".concat(this.type, ", Horsepower: ").concat(this.horsepower, ", Status: ").concat(this.status);
    };
    return CarEngine;
}());
// Реализация класса тормозов
var CarBrakes = /** @class */ (function () {
    function CarBrakes(type) {
        this.status = 'released';
        this.type = type;
    }
    CarBrakes.prototype.apply = function () {
        this.status = 'engaged';
    };
    CarBrakes.prototype.release = function () {
        this.status = 'released';
    };
    CarBrakes.prototype.getInfo = function () {
        return "Brakes Type: ".concat(this.type, ", Status: ").concat(this.status);
    };
    return CarBrakes;
}());
// Реализация класса трансмиссии
var CarTransmission = /** @class */ (function () {
    function CarTransmission(type, gear) {
        if (gear === void 0) { gear = 1; }
        this.type = type;
        this.gear = gear;
    }
    CarTransmission.prototype.changeGear = function (newGear) {
        this.gear = newGear;
    };
    CarTransmission.prototype.getInfo = function () {
        return "Transmission Type: ".concat(this.type, ", Current Gear: ").concat(this.gear);
    };
    return CarTransmission;
}());
// Реализация класса автомобиля
var MyCar = /** @class */ (function () {
    function MyCar(brand, model, year, engine, brakes, transmission) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.brakes = brakes;
        this.transmission = transmission;
    }
    MyCar.prototype.getCarInfo = function () {
        return "Car Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year, "\n") +
            this.engine.getInfo() + '\n' +
            this.brakes.getInfo() + '\n' +
            this.transmission.getInfo();
    };
    MyCar.prototype.startEngine = function () {
        this.engine.start();
    };
    MyCar.prototype.stopEngine = function () {
        this.engine.stop();
    };
    MyCar.prototype.applyBrakes = function () {
        this.brakes.apply();
    };
    MyCar.prototype.releaseBrakes = function () {
        this.brakes.release();
    };
    MyCar.prototype.changeGear = function (newGear) {
        this.transmission.changeGear(newGear);
    };
    return MyCar;
}());
// Пример использования
var myCar = new MyCar('Toyota', 'Camry', 2021, new CarEngine('Бензиновый', 200), new CarBrakes('Дисковые'), new CarTransmission('Автоматическая', 1));
// Проверяем состояние машины
console.log(myCar.getCarInfo());
// Запускаем двигатель и переключаем передачу
myCar.startEngine();
myCar.changeGear(2);
myCar.applyBrakes();
// Проверяем состояние машины после этого
console.log(myCar.getCarInfo());

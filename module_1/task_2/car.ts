// Определяем интерфейсы для основных подсистем автомобиля

interface Engine {
    type: string;
    horsepower: number;
    status: 'running' | 'stopped' | 'failed';
    start(): void;
    stop(): void;
    getInfo(): string; // метод для получения информации о двигателе
}

interface Brakes {
    type: string;
    status: 'engaged' | 'released';
    apply(): void;
    release(): void;
    getInfo(): string; // метод для получения информации о тормозах
}

interface Transmission {
    type: string;
    gear: number;
    changeGear(newGear: number): void;
    getInfo(): string; // метод для получения информации о трансмиссии
}

interface Car {
    brand: string;
    model: string;
    year: number;
    engine: Engine;
    brakes: Brakes;
    transmission: Transmission;
    getCarInfo(): string; // метод для получения информации о машине
}

// Реализация класса двигателя

class CarEngine implements Engine {
    type: string;
    horsepower: number;
    status: 'running' | 'stopped' | 'failed' = 'stopped';

    constructor(type: string, horsepower: number) {
        this.type = type;
        this.horsepower = horsepower;
    }

    start(): void {
        this.status = 'running';
    }

    stop(): void {
        this.status = 'stopped';
    }

    getInfo(): string {
        return `Engine Type: ${this.type}, Horsepower: ${this.horsepower}, Status: ${this.status}`;
    }
}

// Реализация класса тормозов

class CarBrakes implements Brakes {
    type: string;
    status: 'engaged' | 'released' = 'released';

    constructor(type: string) {
        this.type = type;
    }

    apply(): void {
        this.status = 'engaged';
    }

    release(): void {
        this.status = 'released';
    }

    getInfo(): string {
        return `Brakes Type: ${this.type}, Status: ${this.status}`;
    }
}

// Реализация класса трансмиссии

class CarTransmission implements Transmission {
    type: string;
    gear: number;

    constructor(type: string, gear: number = 1) {
        this.type = type;
        this.gear = gear;
    }

    changeGear(newGear: number): void {
        this.gear = newGear;
    }

    getInfo(): string {
        return `Transmission Type: ${this.type}, Current Gear: ${this.gear}`;
    }
}

// Реализация класса автомобиля

class MyCar implements Car {
    brand: string;
    model: string;
    year: number;
    engine: Engine;
    brakes: Brakes;
    transmission: Transmission;

    constructor(brand: string, model: string, year: number, engine: Engine, brakes: Brakes, transmission: Transmission) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.brakes = brakes;
        this.transmission = transmission;
    }

    getCarInfo(): string {
        return `Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}\n` +
               this.engine.getInfo() + '\n' +
               this.brakes.getInfo() + '\n' +
               this.transmission.getInfo();
    }

    startEngine(): void {
        this.engine.start();
    }

    stopEngine(): void {
        this.engine.stop();
    }

    applyBrakes(): void {
        this.brakes.apply();
    }

    releaseBrakes(): void {
        this.brakes.release();
    }

    changeGear(newGear: number): void {
        this.transmission.changeGear(newGear);
    }
}

// Пример использования

const myCar = new MyCar(
    'Toyota',
    'Camry',
    2021,
    new CarEngine('Бензиновый', 200),
    new CarBrakes('Дисковые'),
    new CarTransmission('Автоматическая', 1)
);

// Проверяем состояние машины
console.log(myCar.getCarInfo());

// Запускаем двигатель и переключаем передачу
myCar.startEngine();
myCar.changeGear(2);
myCar.applyBrakes();

// Проверяем состояние машины после этого
console.log(myCar.getCarInfo());
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal {
    constructor(name, age, runspeed) {
        super(name, age)
        this.runspeed = runspeed;
    }
    getinfo() {
        return `This ${this.name} is ${this.age} years old and can run ${this.runspeed} mph`
    }
}
class Fish extends Animal {
    constructor(name, age, swimspeed) {
        super(name, age)
        this.swimspeed = swimspeed;
    }
    getinfo() {
        return `This ${this.name} is ${this.age} years old and can swim ${this.swimspeedspeed} mph`
    }
}
class Eagle extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age)
        this.flyspeed = flyspeed;
    }
    getinfo() {
        return `This ${this.name} is ${this.age} years old and can fly ${this.flyspeed} mph`
    }
}
class Falcon extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age)
        this.flyspeed = flyspeed;
    }
    getinfo() {
        return `This ${this.name} is ${this.age} years old and can fly ${this.flyspeed} mph`
    }
}
const rabbit = new Rabbit('rabbit', 1, 25)
const fish = new Fish('fish', 1.5, 15)
const eagle = new Eagle('eagle', 3, 125)
const falcon = new Falcon('falcon', 1, 300)
document.getElementById('cover').innerHTML += `${rabbit.getinfo()} <br>`;
document.getElementById('cover').innerHTML += `${fish.getinfo()} <br>`;
document.getElementById('cover').innerHTML += `${eagle.getinfo()} <br>`;
document.getElementById('cover').innerHTML += `${falcon.getinfo()} <br>`;


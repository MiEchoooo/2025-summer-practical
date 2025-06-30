class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); 
  }

  speak() {
    console.log(`${this.name} says: Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.speak();

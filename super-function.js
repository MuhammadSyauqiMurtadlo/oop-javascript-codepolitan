class Hewan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Kucing extends Hewan {
  constructor(name, age) {
    super(name, age);
  }
  makan() {
    console.log(`${this.name} sedang makan`);
  }
}

class Anjing extends Hewan {
  constructor(name, age) {
    super(name, age);
  }
  makan() {
    console.log(`${this.name} sedang makan`);
  }
}

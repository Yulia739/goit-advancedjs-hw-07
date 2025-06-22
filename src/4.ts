class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас Будинок
abstract class House {
  protected door: boolean = false;  // false = зачинено, true = відчинено
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.constructor.name} has entered the house.`);
    } else {
      console.log(`Door is closed. Access denied.`);
    }
  }

  // Абстрактний метод для відкривання дверей
  public abstract openDoor(key: Key): void;
}

//реалізація класу House
class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door opened successfully.');
    } else {
      console.log('Wrong key. Door remains closed.');
    }
  }
}

// --- Сценарій ---
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
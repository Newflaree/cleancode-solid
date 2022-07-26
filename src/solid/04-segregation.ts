interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tacan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {
    throw Error( 'This bird cannot swim' )
  }
}

class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {
    throw Error( 'This bird cannot swim' )
  }
}

class Ostrich implements Bird {
  public fly() {
    throw Error( 'This bird cannot fly' )
  }
  public eat() {}
  public run() {}
  public swim() {
    throw Error( 'This bird cannot swim' )
  }
}

class Penguin implements Bird {
  public fly() {
    throw Error( 'This bird cannot fly' )
  }
  public eat() {}
  public run() {}
  public swim() {}
}

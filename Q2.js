// Abstract class Solid
class Solid {
    constructor() {
      if (this.constructor === Solid) {
        throw new Error("Cannot instantiate abstract class.");
      }
    }
  
    // Abstract methods
    calculateSurfaceArea() {
      throw new Error("Method 'calculateSurfaceArea()' must be implemented.");
    }
  
    calculateVolume() {
      throw new Error("Method 'calculateVolume()' must be implemented.");
    }
  }
  
  // Subclass: Cube
  class Cube extends Solid {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    calculateSurfaceArea() {
      return 6 * this.sideLength * this.sideLength;
    }
  
    calculateVolume() {
      return this.sideLength * this.sideLength * this.sideLength;
    }
  }
  
  // Subclass: Cuboid
  class Cuboid extends Solid {
    constructor(length, width, height) {
      super();
      this.length = length;
      this.width = width;
      this.height = height;
    }
  
    calculateSurfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  
    calculateVolume() {
      return this.length * this.width * this.height;
    }
  }
  
  // Subclass: Cylinder
  class Cylinder extends Solid {
    constructor(radius, height) {
      super();
      this.radius = radius;
      this.height = height;
    }
  
    calculateSurfaceArea() {
      return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
  
    calculateVolume() {
      return Math.PI * this.radius * this.radius * this.height;
    }
  }
  
  // Subclass: Sphere
  class Sphere extends Solid {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateSurfaceArea() {
      return 4 * Math.PI * this.radius * this.radius;
    }
  
    calculateVolume() {
      return (4 / 3) * Math.PI * this.radius * this.radius * this.radius;
    }
  }
  
  // Subclass: Cone
  class Cone extends Solid {
    constructor(radius, height) {
      super();
      this.radius = radius;
      this.height = height;
    }
  
    calculateSurfaceArea() {
      const slantHeight = Math.sqrt(this.radius * this.radius + this.height * this.height);
      return Math.PI * this.radius * (this.radius + slantHeight);
    }
  
    calculateVolume() {
      return (1 / 3) * Math.PI * this.radius * this.radius * this.height;
    }
  }
  
  // Usage example:
  const cube = new Cube(5);
  console.log("Cube Surface Area:", cube.calculateSurfaceArea());
  console.log("Cube Volume:", cube.calculateVolume());
  
  const cuboid = new Cuboid(6, 3, 4);
  console.log("Cuboid Surface Area:", cuboid.calculateSurfaceArea());
  console.log("Cuboid Volume:", cuboid.calculateVolume());
  
  const cylinder = new Cylinder(3, 8);
  console.log("Cylinder Surface Area:", cylinder.calculateSurfaceArea());
  console.log("Cylinder Volume:", cylinder.calculateVolume());
  
  const sphere = new Sphere(5);
  console.log("Sphere Surface Area:", sphere.calculateSurfaceArea());
  console.log("Sphere Volume:", sphere.calculateVolume());
  
  const cone = new Cone(4, 7);
  console.log("Cone Surface Area:", cone.calculateSurfaceArea());
  console.log("Cone Volume:", cone.calculateVolume());
  
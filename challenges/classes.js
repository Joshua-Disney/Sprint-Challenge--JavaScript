// 1. Copy and paste your prototype in here and refactor into class syntax.

class RefactoredCuboidMaker {
  constructor(properties) {
  this.length = properties.length;
  this.width = properties.width;
  this.height = properties.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2  * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
};

class CubeMaker extends CuboidMaker {
  constructor(cubeProperties) {
    super(cubeProperties);
    this.length = cubeProperties.edge;
    this.width = cubeProperties.edge;
    this.height = cubeProperties.edge;
  }//=================================================these are not needed to be changed because all lengths, widths, and heigths have been
  //=================================================reassigned to edge.
  // volume() {
  //   return this.length * this.width * this.height;
  // }
  // surfaceArea() {
  //   return 2  * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  // }
}


const newCuboid = new RefactoredCuboidMaker ({
  length: 4,
  width: 5,
  height: 5
});

const newCube = new CubeMaker ({
  edge: 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130
console.log(newCube.volume());
console.log(newCube.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area 
// for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and 
// surface area.
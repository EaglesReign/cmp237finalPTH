//Phil Hofer
//CMP237
//scope.js

var a = 5; //global scope because it is not declared in a function

function foo() {
  a = 7;//local, won't change value of a til function is called
}

print("The value of a is " + a);
foo();
print("The value of a is " + a);

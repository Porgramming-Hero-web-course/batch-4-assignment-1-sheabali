Type guards are essential in TypeScript as they enhance type safety by allowing developers to explicitly check and narrow the type of a variable at runtime, especially when dealing with union types or uncertain inputs, thereby enabling more precise and reliable code. By providing additional context to the TypeScript compiler, type guards ensure that operations on such variables are type-safe, reducing the risk of runtime errors and improving overall code robustness.


Some example of type guard and their use cases.

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}

printValue("Hello"); 
printValue(42);      

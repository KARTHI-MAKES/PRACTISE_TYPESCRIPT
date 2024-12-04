//Generators are a special kind of function that can stop, and then continue from where it stopped,
// using this kind of function you can make a function that implements an iterative algorithm only by writing just one function which doesn't have to run its course at a go.
// They are defined by a function with an * in it and make use of the keyword yield in order to generate a set of numbers.

function* GeneratorFunction(){
    yield "KARTHI";
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}
const generator = GeneratorFunction();
let obj = generator.next();
while(!obj.done){
    console.log(obj.value)
    obj=generator.next()
}
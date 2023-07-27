/** var - function scope variable */
for(var i=0; i<10; i++){
    var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);
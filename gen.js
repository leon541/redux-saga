function* gen() {
    yield console.log(1);
    yield console.log(2);
    console.log(3);
}
console.log("---0----");
const g = gen();
console.log("---start----");
g.next();
g.next();
g.next();
console.log('no next');
g.next();   // just empty

console.log('-----------------2---------------');
const g2 = gen();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

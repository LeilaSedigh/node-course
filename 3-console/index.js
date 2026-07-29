console.log("salam %s, welcome", "leila");
console.log("salam %i", "2.33");
console.log("salam %d", "2.33");

const obg = {
  name: "leila",
  family: "bakhshayesh",
};

console.log("hi %o", obg);
console.log("hi %o", Boolean);

console.time("my-label");

9999n ** 999999n;

console.timeEnd("my-label");

console.clear();

console.table(obg);

console.trace();

function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.trace();
}
f1();

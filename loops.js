'use strict';

let i = 10;
const limit = 5;
while(i < limit) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i < limit);
for (i = 0; i < limit; i++) {
  console.log(i);
}
let arr = [10, 20, 30];
arr.forEach(function(item) {
  console.log(item);
});
arr = [10, 20, 30];
for(let i of arr) {
  console.log(i);
}

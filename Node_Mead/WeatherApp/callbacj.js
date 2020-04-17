const add = (num1, num2, callback) => {
  return callback(num1, num2);
};

const res = add(1, 4, () => {
  return 1 + 4;
});

console.log(res);

const getData = new Promise((resolve, reject) => {
  const num = Math.round(Math.random() * 10);
  console.log(num);

  if (num < 5) {
    resolve(num);
  } else {
    reject("Number nai vai...");
  }
});

getData
  .then((data) => console.log(data + 22))
  .catch((err) => console.error("vai error le loooo;", err));


  let a = [2,434,43,53,21,564,3,533]
  // console.log(a);



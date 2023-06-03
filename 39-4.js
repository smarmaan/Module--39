function first() {
  setTimeout(() => {
    console.log("function() 1st called..");
  }, 1000);
}
function Second() {
  console.log("function() 2nd called..");
}

function main() {
  first();
  Second();
}


main()
//normal function - call back

// function a(call_b) {
//   call_b();
//   console.log("step1");
// }

// function b() {
//   console.log("step2");
// }

// a(b);

//object
let stocks = {
  Fruits: ["strawbeery", "grapes", "mango", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

//arrow function call back
let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log(`Production has started`);

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("The machine has been started");

          setTimeout(() => {
            console.log(`Ice cream was placed on the ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[1]} was added as toppings`);

              setTimeout(() => {
                console.log("Serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);

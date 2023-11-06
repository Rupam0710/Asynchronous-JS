//object
let stocks = {
  Fruits: ["strawbeery", "grapes", "mango", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

//promises

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log("Production has started");

    await time(2000);
    console.log("The fruit was chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Ice cream was placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);

    await time(2000);
    console.log(`Ice cream was served`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day is over,shop is closed");
  }
}

kitchen();

const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  stock[itemName]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName}  in stock`);
  console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
  let itemNameLower = itemName.toLowerCase();
  if (stock[itemNameLower] == undefined) {
    alert(`Item ${itemName} is not offered`);
    return;
  }

  stock[itemNameLower] == 0
    ? callbackError(itemNameLower)
    : callbackPayment(itemNameLower);
}

message = prompt(
  'Please enter the item you would like to purchase (Macbook, iPhone)'
);

processOrder(message, processPayment, processError);

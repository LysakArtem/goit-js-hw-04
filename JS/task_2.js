"use strict"

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
      //  2ой способ - вроде тоже работает.
      // action.call(this, itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
      // 2ой способ 
      //  invokeInventoryAction.call(inventory, 'Gas mask', inventory.add);

// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
      // 2ой способ 
      //  invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);

// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
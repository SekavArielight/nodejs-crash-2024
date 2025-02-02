const EventEmitter = require("events");

const myEvent = new EventEmitter();

const message = name => {
    console.log(`We celebrate you ${name}`);
};

myEvent.on("success", message);
myEvent.emit("success", "Joan");
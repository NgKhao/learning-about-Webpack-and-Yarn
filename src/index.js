import "core-js/modules/es.object.values";
import sum from "./utils";
import "./styles/style.css";
import "./styles/style.scss";
import domHandler from "./dom";
console.log(sum(100, 10));

domHandler();

// ES6 Spread Operator
const person = { name: "Duoc" };
const personClone = { ...person };
console.log("personClone", personClone);

// ES7 Object.values
console.log("Object.values", Object.values(personClone));

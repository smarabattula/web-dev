// var generateName = require("sillyname");
import generateName from "sillyName";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import {randomSuperhero} from 'superheroes';

var name = randomSuperhero();
console.log(`I am ${name}!`);

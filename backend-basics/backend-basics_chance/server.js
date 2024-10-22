import { createServer } from "node:http";
import Chance from "chance";
import { create } from "node:domain";

const chance = new Chance();
chance.character();

const name = chance.first();
const age = chance.age();
const profession = chance.profession();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end(
      `"Hello, my name is ${name} and I am ${age} years old. I am a ${profession}."`
    );
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});

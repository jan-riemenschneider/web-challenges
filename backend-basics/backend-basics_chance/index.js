import { server } from "./server.js";
import Chance from "chance";

const port = 8000;
server.listen(port, () => {
  console.log(`Using Port: ${port}`);
});

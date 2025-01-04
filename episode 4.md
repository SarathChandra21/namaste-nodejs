- global and globalThis keywords are used to access global object

- require("./xyz.js") => used for importing another module in entry point/app.js file (But we cannot access variables and functions from another module)
- it will just execute the code but do not have permission to access those varaibles and functions
- eventhough we don't write .js extension in the above #require it is completely fine

- But we can access in this way

# module a
function calcsum(){

}
module.exports = {
    calcsum : calcsum,
    x: x
    }; (or just)
    {x, calcsum}

- or we can even write it as this way
module.exports.x = x
module.exports.calcsum = calcsum

# module b
const obj = require("./module a.js");
obj.x;
obj.calcsum();

(or we can destructure at fly)
{x, calcsum} = requrie("./module a.js");

- so the above mechanism is for common js module (this is by default used in node whereas for react "es module" is default)

- for es modules we can just follow how we have done in react course.
e.g: export default func; import func from "module.js";

- to use es modules we have to change type from "commonjs" to "module" in package.json

- es modules runs in strict mode compared to common js (if there is any error it will not execute)

- if we are importing from two js files from a folder, we can create a index.js file in it and import those two in index.js and ultimately we can import from that folder(and even no need to mention index.js, just folder name is suffecient for importing)

- require("./data.json") - in json no need to mention export, we can import by "require" directly.




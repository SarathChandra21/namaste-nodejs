- when we call "require" generally the whole code wraps into a function, that's why by default we don't have access to their vaiables and functions of the code which we are importing.
- and that function is called IIFE(Immediately invoked function expression)
- (function(){})(); => IIFE

- How do you get access to module.exports, require in a js file
they are passed as parameters to the function IIFE
(function(moudle, require){
    require("/path");
    ---
    --
    module.exports = {};
})(); 

- when ever we do require("./path"), following things will happen
1. Resolving the module (local module, json type, node module)
2. loading the module
3. wraps inside a IIFE
4. evaluation (module.exports happen)
5. caching(it loads only once, and node caches it and reuses)


|        common js      |       Es modules    |
------------------------------------------------
| module.exports        | import
| require()             | export
| by default used NodeJS| by defualt used by react|
| older way             | newer way
| Synchronous           | Async
| non strict mode       | strict mode



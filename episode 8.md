in v8engine

- code goes 1st to parsing
a. parsing
- lexical analysis (code -> tokens)/tokenization
- syntax analysis (tokens -> AST)

- AST goes to Interpretter

2 types of languages
Interpretted 
- line by line
- Fast inital execution
Compiled
- first compilation and then execution
- initally heavy but executed fast

JS is 3rd type i.e, JIT(Just in time) compile (it consists of both types)

AST -> Ignition Interpretter -> Byte code -> Execution
                        |
                        |---> Turbofan compiler -> optimized machine code -> execution
- Turbofan is a compiler exists in JS

We have Garbage Collection some of them are
- Orinoco
- Oil Pon
- Scavenger




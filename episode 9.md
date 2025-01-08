 There is a event loop in Libuv where it constly checks the call stack of v8 engine and whenever it is empty, it pushes the async call back functions to main call stack.

 1. timer - seTimeout, setInterval
 2. poll - I/O callbacks (most of the callbacks comes under this category )
 3. check - setImmediate
 4. close - socket.on("close")

 these 4 phases run in a cyclic manner

 there is a inner loop in this also i.e.,
 1. process.nextTick()
 2. promise callbacks 

 this inner loop runs after each and every phase (4 phases listed above)

 - when there are no async callbacks left, eventloop waits at poll phase.
# Thread Pool

libuv uses thread pool and executes the async calls 

IS nodejs single threaded or multi-threaded?
- if it is complete synchronous code, then it is single threaded, if it uses libuv then multi threaded.

Thread pool has 4 threads by default.but we can change it.

DON"T BLOCK THE MAIN THREAD (don't do the below things)
- sync methods 
- Heavy JSON objects (don't do)
- complex Regex
- Complex calculations/loops


  
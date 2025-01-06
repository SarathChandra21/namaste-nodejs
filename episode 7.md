- "require" module works in synchronous way
  
- fs.readfile() is async method
- fs.readfilesync() is a sync method, it blocks main thread until it is finished. 

- eventhough we have setTimeout() for 0 seconds, it not execute immediately 
- it will be called only when the call stack of main thread is empty 
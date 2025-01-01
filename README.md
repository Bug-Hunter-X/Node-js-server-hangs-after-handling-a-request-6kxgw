# Node.js Server Hanging Issue

This repository demonstrates a common issue in Node.js servers where the server appears to hang after handling a request that takes a long time to process.  The problem stems from the fact that Node.js is single-threaded. If a long-running operation blocks the event loop, no other requests can be processed.

## Reproducing the Bug

1. Clone the repository.
2. Run `node server.js`.
3. Access `http://localhost:3000/`.  You'll see a response after 5 seconds.
4. Try accessing `http://localhost:3000/` again immediately. You might find that the server doesn't respond quickly or at all, or appears unresponsive.

## Solution

The solution involves using techniques to prevent blocking the event loop.  This example uses promises to handle asynchronous operations effectively.  See `server-fixed.js` for the corrected code.

## Technologies Used

* Node.js
* Express.js
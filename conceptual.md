### Conceptual Exercise

Answer the following questions below:


What are some ways of managing asynchronous code in JavaScript?
- You can utilize .then() which will wait for a resolved promise to continue onto the next code, or utilize async functions and await a response which will work similarly.


What is a Promise?
- A promise is an unresolved request that is a placeholder until data or an error is returned. 

What are the differences between an async function and a regular function?
- Async functions run out-of-sync or regular code. Usually, functions need to be completed syncronously to continue onto the next line of code, but async functions are able to return a promise which the browser holds onto and lets JS know when the promise has been resolved to continue with that async function. 

What is the difference between Node.js and Express.js?
- Node.js is an environment that runs server-side JS. Express.js is the most popular framework for Node.js, similar to the relationship between Flask and Python. 

What is the error-first callback pattern?
- This is where the required params are (error, data). Node.js callbacks use this. It accepts an error first, if !error, error=null, then the result of the request (the data). 

What is middleware?
- Middleware is what is happening between the request/response cycle. They are functions outside of routes that may be called for every route or specific ones. They are great for reducing duplication in code. They always require 3 params(req,res,next).
  
What does the `next` function do?
- If there are no params passed, it continues on to the next matching route. If there is a param passed, express treats this as an error and runs it through the error handler.

What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

This function above will likely return the promises rather than the resolved data and each line is awaiting the one before to run, therefore slow and not running parallel. This also will be getting a lot more that just the users, maybe getUserData() would be more appropriate. 

I would also want to save the data in an object associated with their names to make things a bit more organized and build a better structure if it were different users coming in with each request. But if it were the same each time I guess you could just use the following async function. 

What I would fix to access responses associated with names:

```js
async function getUserData(){
  let eliePromise = axios.get('https://api.github.com/users/elie');
  let joelPromise = axios.get('https://api.github.com/users/joelburton');
  let mattPromise = axios.get('https://api.github.com/users/mmmaaatttttt');
  
  let elie = await eliePromise;
  let joel = await joelPromise;
  let matt = await mattPromise;

  return [ {elie}, {joel}, {matt} ]

} 
getUserData();
```

Awaiting the variable allows them to run parallel.
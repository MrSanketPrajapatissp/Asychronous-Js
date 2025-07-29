// SetTimeout
// console.log("hey 1")
// console.log("hey 2")
// setTimeout(() => {
//     console.log("hey 3")
// }, 2000);

// SetInterval
// var count = 0;
// var hamaraInterval = setInterval(() => {
//     ++count;
//     if(count === 3) clearInterval(hamaraInterval);

//     console.log("count"+count);

// }, 1000);

// Fetch Api
// fetch(`https://randomuser.me/api/`)
//   .then((raw) => raw.json())
//   .then((readableData) => console.log(readableData.results[0].gender));

// Same as Fetch API but using Axios more devloper friendly
// const axios = require('axios')

// axios.get(`https://jsonplaceholder.typicode.com/posts`)
//   .then((res) => {
//     console.log(res.data)
// }).catch((err) => {
//     console.log(err);
// })

// Promise
/*
const parchi = new Promise((resolve, reject) => {
    fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((result) => {
        if(result.results[0].gender === 'male')
        {
            resolve();
        }
        else{
            reject();
        }
    })
})

parchi.then(() => {
    console.log("Harra button dab gaya");
})
.catch(() => {
    console.log("lal batton dab gaya");
})

*/

// Callback
/*
function getData(url, callback)
{
    fetch(url)
    .then(raw => raw.json())
    .then(data => {
        callback(data);
    })
}

getData("https://randomuser.me/api/",function(result){
    console.log(result.results[0].gender, result.results[0].name.first,  result.results[0].name.last, result.results[0].email)
})

*/

// Async Await - app aysynchronous code bhi aise like sakte ho jaise synchronous likha ho

/* 

async function abcd()
{
    let a =  await fetch(`https://randomuser.me/api/`);
    a = await a.json();
    console.log(a.results[0].name.first);
}

abcd()

*/

// event loop:  check karta hai hamara main stack khali hai ya nahi
// agar khali hai to callback queue se callback ko uthata hai aur main stack me dal deta hai
// agar main stack khali nahi hai to callback ko wait karna padta hai

// Async await vs Promises vs Callbacks
/* 
function detaFetcher(url, callback) {
  fetch(url)
    .then((raw) => raw.json())
    .then((result) => callback(result));
}

detaFetcher("https://randomuser.me/api/", function (result) {
  console.log(result);
});

*/

/* // Promise code
function detaFetcher(url){
    const parchi = new Promise(function(resolve,reject) {
        fetch(url)
        .then(raw => raw.json())
        .then(result => {
            resolve(result);
        })
    })
    return parchi;
}

detaFetcher("https://randomuser.me/api/")
.then((result) => {
    console.log(result);
})
 */

/* // Aync Await code: 

async function datafetcher(url){
    let data = await fetch(url);
    data = await data.json();
    return data;
}


async function hh(){
    let data =  await datafetcher("https://randomuser.me/api/")
    console.log(data);
}
 
hh();

 */

// Generators : generators are functions that can be paused and resumed, allowing you to control the flow of execution. They are defined using the `function*` syntax and use the `yield` keyword to pause execution and return a value.
/*
function* generatorfun()
{
    console.log("Started");
    yield 1;
    console.log("Pahala chal chuka");
    yield 2;
    console.log("Dusra chal chuka");
    yield 3;
    console.log("Teseara chal chuka");

}

const ans = generatorfun();

console.log(ans.next());
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
*/

/*
//  prime number generator
// The following code defines a generator function that yields prime numbers indefinitely. It checks each number starting from
// function checkPrime(num){
    if(num < 2) return false;

    for(let i = 2; i<= Math.sqrt(num); i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }
    return true;
}

function* findPrime()
{
    let num = 2;
    while(true)
    {
        if(checkPrime(num)){
            yield num;
        }
        num++;
    }
    
}

const gen = findPrime()
let count = 0 
while(count < 20)
{
    console.log(gen.next().value);
    count++;
}
    */

/* Web workers - 
Web Workers allow you to run scripts in background threads, enabling you to perform tasks without blocking the main thread. This is particularly useful for heavy computations or tasks that take a long time to complete, as it keeps the user interface responsive.
Web Workers are created using the `Worker` constructor, which takes a URL to a JavaScript file that contains the worker code. The worker runs in a separate global context, and you can communicate with it using the `postMessage` method and the `onmessage` event handler.

Web Workers are useful for offloading heavy computations or tasks that would otherwise block the main thread, allowing the main thread to remain responsive to user interactions. They are particularly useful for tasks like data processing, image manipulation, or any long-running computations that can be performed in parallel.

Web Workers are not allowed to access the DOM directly, but they can communicate with the main thread using messages. This means that you can perform computations in the worker and send the results back to the main thread for rendering or further processing.

Web Workers are a powerful feature of modern web development, enabling you to create responsive and efficient applications
 */

const worker = new Worker("worker.js");

const nums = Array.from({ length: 10000 }, (_, b) => b + 1);

worker.postMessage(nums);

worker.onmessage = function (data) {
  console.log("sum of numbers is : ", data.data);
};

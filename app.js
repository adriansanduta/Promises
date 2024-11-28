// fetch("https://jsonplaceholder.typicode.com/users/1" )
const emailRef = document.querySelector(".email")


// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1" )
// .then(response => {
//      return response.json()
// }).then(data => {
//  console.log(data);
//    emailRef.innerHTML = data.email
// })

// 2. Async/Await
// async function main() {
// const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
// const data = await response.json()
// console.log(data)
// emailRef.innerHTML = data.email
// }

// main();


// function getSubscriptionStatus() {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//        resolve("VIP");
//    }, 2000);
// });
// }

// 1.Then
// getSubscriptionStatus().then(response => console.log(response))

// 2.Async/Await
// async function main() {
//     const status = await getSubscriptionStatus();
//    statusRef.innerHTML = status;
// }
// main();


/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called 'subscriptionStatus'
 * 3.Return a new Promise inside of the function that:
 *  - if "VIP" resolve ("show video")
 *  - if "FREE" resolve ("show trailer")
 *  - otherwise reject ("no video")
 * 4. console.log the result of getVideo(status) in main ()
 */
const statusRef = document.querySelector(".status");
function getSubscriptionStatus() {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
            resolve("VIP");
        }, 2000);
     });
     }


function getVideo(subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === "VIP")  {
            resolve("show video");
        } 
        else if (subscriptionStatus === "FREE") {
                 resolve("show trailer"); 
                } 
                else { 
                    reject("no video");   
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    console.log(await getVideo(status))
}

main();

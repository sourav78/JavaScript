// Problem: Sequential Execution (One by One)
// When you put await inside a loop, you are telling your code: "Start this task, pause the entire loop, wait for the task to finish, and only then move on to the next iteration."

// This is like going to a coffee shop with 10 friends and ordering one by one.

// Friend 1 orders.

// Everyone waits until Friend 1's coffee is made.

// Friend 2 orders.

// Everyone waits until Friend 2's coffee is made. ...and so on. It's incredibly slow.

// Example (The "Bad" Way):

//  Let's say you have a list of user IDs and you want to fetch each user's profile from an API. Assume each API call takes 1 second.

async function fetchUserDetails(userId) {
  // Simulating a 1-second network call
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Fetched user ${userId}`);
      resolve({ id: userId, name: `User ${userId}` });
    }, 1000);
  });
}

async function getSequentialUsers(userIds) {
  console.time('Sequential');
  const users = [];
  for (const id of userIds) {
    // The loop STOPS here and waits 1 second
    const user = await fetchUserDetails(id); 
    users.push(user);
  }
  console.timeEnd('Sequential');
  return users;
}

// getSequentialUsers([1, 2, 3, 4, 5]);

/** 
Fetched user 1
Fetched user 2
Fetched user 3
Fetched user 4
Fetched user 5
Sequential: 5025ms (Total time: ~5 seconds) */

// Using Promise.all() method

// (Using the same fetchUserDetails function from above)

async function getConcurrentUsers(userIds) {
  console.time('Concurrent');
  
  // 1. Create an array of *pending promises*
  // The .map() loop does NOT await, it just starts all the tasks
  const promises = userIds.map(id => fetchUserDetails(id));
  
  // 2. Wait for ALL of them to finish
  const users = await Promise.all(promises);
  
  console.timeEnd('Concurrent');
  return users;
}

getConcurrentUsers([1, 2, 3, 4, 5]);

/*
Fetched user 1
Fetched user 2
Fetched user 3
Fetched user 4
Fetched user 5
Concurrent: 1008ms (Total time: ~1 second)*/
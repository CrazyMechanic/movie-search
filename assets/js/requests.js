
//CRUD aplication

//Create => POST (PUT?)
//Read   => GET
//update => PUT, PATCH
//Delete => DELETE

//--------------DELETE---------------------------------------------------------------

// async function deletehData(url,data) {
//   const response = await fetch(url, {
//     method: 'DELETE'
//   });

//   if (!response.ok) {
//     throw new Error('Something went wrong!' + ' ' + response.status);
//   }

//   return true;
// }

// deletehData('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//--------------PATCH---------------------------------------------------------------

// async function patchData(url,data) {
//     const response = await fetch(url, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error('Something went wrong!' + ' ' + response.status);
//     }

//     return response.json();
//   }

//   patchData(
//     'https://jsonplaceholder.typicode.com/posts/1',
//     {
//       title: 'Post Title',
//       body: 'Post Body',
//       userId: 123
//     }
//   )
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//---------------PUT---------------------------------------------------------------

// async function putData(url,data) {
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error('Something went wrong!' + ' ' + response.status);
//   }

//   return response.json();
// }

// putData(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   {
//     title: 'Post Title',
//     body: 'Post Body',
//     userId: 123
//   }
// )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//---------------POST---------------------------------------------------------------

// async function postData(url,data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error('Something went wrong!' + ' ' + response.status);
//   }

//   return response.json();
// }

// postData(
//   'https://jsonplaceholder.typicode.com/posts',
//   {
//     title: 'Post Title',
//     body: 'Post Body',
//     userId: 123
//   }
// )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//---------------GET---------------------------------------------------------------

// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Something went wrong!' + ' ' + response.status);
//   }

//   return response.json();
// }

// getData('https://jsonplaceholder.typicode.com/comments?postId=1')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
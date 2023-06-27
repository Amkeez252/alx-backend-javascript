export default function getFullResponseFromAPI(success) {
//resolve the promise by passing an object with 2 attributes
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
//reject the promise with an error
    reject(new Error('The fake API is not working currently'));
  });
  return promise;


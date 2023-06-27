// promises to  keep
// Return a Promise using this prototype
export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    resolve();
    reject();
  });
  return promise;
}

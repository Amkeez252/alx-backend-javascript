import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName),
    uploadPhoto(fileName)];
// The function should call the two other functions.

  return Promise.allSettled(promises)
    .then((values) => {
      const res = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          res.push(value);
        } else {
          res.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return res;
    });
}

import { uploadPhoto, createUser } from './utils';
//asyncUploadUser that will call these two functions and return an object
//if function fails, return an empty object.

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({ photo, user });
  } catch (err) {
    return Promise.resolve({ photo: null, user: null });
  }
}

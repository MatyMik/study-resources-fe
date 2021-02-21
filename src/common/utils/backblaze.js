import B2 from 'backblaze-b2';

const b2 = new B2({
  applicationKeyId: process.env.REACT_APP_BACKBLAZE_KEY_ID,
  applicationKey: process.env.REACT_APP_BACKBLAZE_KEY, // or masterApplicationKey
});

export const GetBucket = async () => {
  try {
    await b2.authorize(); // must authorize first
    const response = await b2.getBucket({ bucketName: 'my-bucket' });
    console.log(response.data);
  } catch (err) {
    console.log('Error getting bucket:', err);
  }
};

export const getUpluadUrl = async () => {
  console.log(b2);
  const authData = await b2.authorize();
  console.log(authData);
  // b2.getUploadUrl({
  //   bucketId: process.env.B2_BUCKET_NAME,
  // });
};

export const createKey = async () => {
  b2.createKey({
    capabilities: [
      b2.KEY_CAPABILITIES.READ_FILES,
      b2.KEY_CAPABILITIES.WRITE_FILES,
    ],
    keyName: 'mgenerated-key', // letters, numbers, and '-' only, <=100 chars
    validDurationInSeconds: 3600, // expire after duration (optional)
    bucketId: 'mmd-test-bucket', // restrict access to bucket (optional)
    // ...common arguments (optional)
  });
};

import faker from 'faker';

export const generateWords = (event, context, callback) => {
  const words = new Array(100)
    .fill()
    .map(index => faker.random.word())
    .join(' ');
  //   console.log(words);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const res = {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(words)
  };
  callback(null, res);
};
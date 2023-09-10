exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'shin',
      age: 85,
      email: 'shin@gmail.com',
    }),
  }
}

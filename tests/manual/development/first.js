module.exports.handle = () => {
  console.log({ message: 'testing logs', status: 400 })
  const result = {
    message: 'Hello from Serverless Framework and Scaleway Functions :D',
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  }

  // either return callback(undefined, response) or response
  return response
}

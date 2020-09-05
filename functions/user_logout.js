const faunadb = require('faunadb');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;
    const client = new faunadb.Client({
      secret: event.headers.authorization,
    });

    const data = await client.query(q.Logout(true));
    const response = {
      message: data
        ? 'Successfully Logout'
        : 'Couldn\'t logout. Try Again later.',
    };

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    const body = {
      message: error.message,
    };

    return {
      statusCode: 400,
      body: JSON.stringify(body),
    };
  }
};

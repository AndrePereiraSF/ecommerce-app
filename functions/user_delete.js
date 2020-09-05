const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: event.headers.authorization,
    });

    const { id } = event.queryStringParameters;

    const response = await client.query(
      q.Delete(q.Ref(q.Collection('users'), id))
    );
    
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

const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: event.headers.authorization,
    });

    const { email } = JSON.parse(event.body);
    const user = {
      data: {
        email,
      },
    };
    const { id } = event.queryStringParameters;

    const response = await client.query(
      q.Update(q.Ref(q.Collection('users'), id), user)
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

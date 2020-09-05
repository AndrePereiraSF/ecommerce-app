const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: event.headers.authorization,
    });

    const { id } = event.queryStringParameters;
    const { products } = JSON.parse(event.body);

    const cartUpdate = {
      data: {
        products,
      },
    };

    const response = await client.query(
      q.Update(q.Ref(q.Collection('carts'), id), cartUpdate)
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

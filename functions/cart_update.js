const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: event.headers.authorization,
    });

    const { cart_id } = event.queryStringParameters;
    const { cart } = JSON.parse(event.body);

    cart.items.shift();

    const cartUpdate = {
      data: {
        products: cart.items,
      },
    };

    const response = await client.query(
      q.Update(q.Ref(q.Collection('carts'), cart_id), cartUpdate)
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

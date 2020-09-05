const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: event.headers.authorization,
    });

    const cart = {
      data: {
        active: false,
        deleted_at: q.Now(),
      },
    };

    const newCart = {
      data: {
        active: true,
        products: []
      }
    };

    const { id, user_id } = event.queryStringParameters;

    const response = await client.query(
      q.Update(q.Ref(q.Collection('carts'), id), cart)
    );

    const createdCart = await client.query(
      q.Create(q.Collection('carts'), newCart)
    );

    const user = {
      data: {
        cart_id: createdCart.ref.value.id,
      },
    };

    await client.query(q.Update(q.Ref(q.Collection('users'), user_id), user));

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

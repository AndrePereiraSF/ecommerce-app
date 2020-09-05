const faunadb = require('faunadb');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const { email, password } = JSON.parse(event.body);

    const q = faunadb.query;
    const client = new faunadb.Client({
      secret: process.env.PUBLIC_CUSTOMER_KEY,
    });

    const cart = {
      data: {
        active: true,
        products: []
      }
    };

    const createdCart = await client.query(q.Create(q.Collection('carts'), cart));

    const user = {
      data: {
        email,
        cart_id: createdCart.ref.value.id
      },
      credentials: {
        password,
      },
    };

    const createdUser = await client.query(q.Create(q.Collection('users'), user));


    return {
      statusCode: 200,
      body: JSON.stringify(createdUser),
    };
  
  } catch (error) {
    const body = {
      message: error.message
    };

    return {
      statusCode: 400,
      body: JSON.stringify(body),
    };
  }
};

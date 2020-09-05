const faunadb = require('faunadb');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;
    const client = new faunadb.Client({
      secret: process.env.PUBLIC_CUSTOMER_KEY,
    });

    const { email, password } = JSON.parse(event.body);

    let response = await client.query(
      q.Login(q.Match(q.Index('users_by_email'), email), {
        password,
      })
    );

    const user = await client.query(
      q.Get(q.Ref(q.Collection('users'), response.instance.value.id))
    );

    response = {
      ...response,
      cart_id: user.data.cart_id,
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

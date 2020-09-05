const faunadb = require('faunadb');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const { name, image, price, available_quantity } = JSON.parse(event.body);

    const user = {
      data: {
        name,
        image,
        price,
        available_quantity,
      },
    };

    const q = faunadb.query;
    const client = new faunadb.Client({
      secret: process.env.MANAGER_KEY,
    });

    const response = await client.query(
      q.Create(q.Collection('products'), user)
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

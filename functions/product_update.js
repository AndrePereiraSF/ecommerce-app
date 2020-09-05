const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: process.env.MANAGER_KEY,
    });

    const { name, image, price, available_quantity } = JSON.parse(event.body);

    const product = {
      data: {
        name,
        image,
        price,
        available_quantity,
      },
    };
    const { id } = event.queryStringParameters;

    const response = await client.query(
      q.Update(q.Ref(q.Collection('products'), id), product)
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

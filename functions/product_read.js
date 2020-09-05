const faunadb = require('faunadb');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;

    const client = new faunadb.Client({
      secret: process.env.MANAGER_KEY,
    });

    const { id } = event.queryStringParameters;

    const response = await client.query(
      q.Get(q.Ref(q.Collection('products'), id))
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

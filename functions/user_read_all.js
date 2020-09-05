const faunadb = require('faunadb');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const q = faunadb.query;
    const client = new faunadb.Client({
      secret: process.env.MANAGER_KEY,
    });

    const response = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('all_users'))),
        q.Lambda('X', q.Get(q.Var('X')))
      )
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

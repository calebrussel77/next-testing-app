// src/mocks/handlers.js
import {rest} from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {name: 'Brune Wayne'},
        {name: 'Caleb russel'},
        {name: 'Princess Diana'},
      ])
    );
  }),
];

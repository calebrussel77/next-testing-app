/* eslint-disable testing-library/no-debugging-utils */
import {render, screen} from '@testing-library/react';
import {rest} from 'msw';

import {server} from '../../mocks/server';
import {Users} from './users';

describe(`Users`, () => {
  describe(`should be correctly display into the dom`, () => {
    it('should display a list of users on the screen', async () => {
      render(<Users />);
      const usersList = await screen.findAllByRole('listitem');
      expect(usersList).toHaveLength(3);
    });

    it('should render error on the screen', async () => {
      const errorHandler = rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      );
      server.use(errorHandler);
      render(<Users />);
      const errorMsg = await screen.findByText(/Something went wrong !/);
      expect(errorMsg).toBeInTheDocument();
    });
  });
});

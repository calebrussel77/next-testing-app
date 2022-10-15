/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable testing-library/no-debugging-utils */
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {render} from '../../../test-utils';
import Login from './login';

let btnLogin: HTMLElement;
let btnLogout: HTMLElement;
let loggedInText: HTMLElement;

describe('Login page', () => {
  beforeEach(() => {
    render(<Login />);
    btnLogin = screen.getByRole('button', {name: /btn_login/i});
    btnLogout = screen.getByRole('button', {name: /btn_logout/i});
    loggedInText = screen.getByText(/you are not loggedin/i);
  });

  it('should render on the screen', () => {
    expect(btnLogin).toBeInTheDocument();
    expect(btnLogout).toBeInTheDocument();
    expect(loggedInText).toBeInTheDocument();
  });

  describe('When the user click on the login', () => {
    it('should set the user as authenticated', async () => {
      userEvent.setup();
      await userEvent.click(btnLogin);
      loggedInText = screen.getByText(/Welcome calebrussel77@gmail/i);
      expect(loggedInText).toBeInTheDocument();
    });
  });
});

/* eslint-disable testing-library/no-debugging-utils */
import {render, screen} from '@testing-library/react';

import {Skills} from './skills';
import {skillsData} from './skills.mock';

describe('Skills', () => {
  beforeEach(() => {
    render(<Skills {...{skills: skillsData}} />);
  });

  it('should render on the screen', () => {
    const list_element = screen.getByRole('list');
    expect(list_element).toBeInTheDocument();
  });

  it('should render list of skills on the screen', () => {
    const list_item_element = screen.getAllByRole('listitem');
    expect(list_item_element).toHaveLength(skillsData.length);
  });

  it('should render `start-learn` button when logged on the screen', async () => {
    const loggedBtnElement = await screen.findByRole(
      'button',
      {
        name: /start-learn/i,
      }
      // We can specify the `timeout` => {timeout: 3000} the default is 1000 ms
    );
    expect(loggedBtnElement).toBeInTheDocument();
  });
});

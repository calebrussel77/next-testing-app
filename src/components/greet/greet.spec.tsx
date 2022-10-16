import {screen} from '@testing-library/react';
import {render} from '@testing-library/react';

import {Greet} from './greet';

/**
 * Greet component should render the text `hello` and if a name is passed into component
 * It should render `hello` followed by the name
 */

const setup = (name?: string) => render(<Greet name={name} />);

describe('Greet', () => {
  it('should render `hello` on the screen', () => {
    setup();
    const greetElement = screen.getByTestId('greeting');
    expect(greetElement).toHaveTextContent(/hello/i);
  });

  describe('when name is passed', () => {
    it('should render `hello james` on the screen', () => {
      setup('james');
      const greetElement = screen.getByTestId('greeting');
      expect(greetElement).toHaveTextContent(/hello james/i);
    });
  });
});

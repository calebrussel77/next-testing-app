import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ReactElement} from 'react';

import {Counter} from './counter';

// setup function
function setup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe(`Counter`, () => {
  const incrementorBtn = screen.getByRole('spinbutton', {name: /incrementor/i});
  const minusBtn = screen.getByRole('button', {
    name: /substract to counter/i,
  });
  const plusBtn = screen.getByRole('button', {name: /add to counter/i});

  describe(`Should have default initialize value equal to 15`, () => {
    beforeEach(() => {
      setup(<Counter defaultCount={15} />);
    });

    it(`Should have current count value equal to 15`, () => {
      expect(screen.getByText('Your counter is : 15')).toBeInTheDocument();
    });

    describe(`When the incrementor changes to 5`, () => {
      describe(`When plus button is clicked`, () => {
        beforeEach(async () => {
          await userEvent.type(incrementorBtn, '5');
          await userEvent.click(plusBtn);
        });
        it(`Should render incrementor count to 5`, () => {
          expect(incrementorBtn).toHaveValue(Number(5));
        });
        it(`Should render current co unt to 20`, () => {
          const counterTextDisplay = screen.getByText(/Your counter is : 20/);
          expect(counterTextDisplay).toBeInTheDocument();
        });
      });

      describe(`When minus button is clicked`, () => {
        beforeEach(() => {
          fireEvent.change(screen.getByLabelText(/Incrementor/), {
            target: {value: 5},
          });
          fireEvent.click(
            screen.getByRole('button', {name: 'substract to counter'})
          );
        });
        it(`Should render incrementor count to 5`, () => {
          expect(screen.getByLabelText(/Incrementor/)).toHaveValue(Number(5));
        });
        it(`Should render current count to 10`, () => {
          expect(screen.getByText(/Your counter is : 10/)).toBeInTheDocument();
        });
      });
    });
  });

  describe(`Should have default initialize value equal to 0`, () => {
    beforeEach(() => {
      setup(<Counter defaultCount={0} />);
    });

    it(`Should render current count to 0`, () => {
      expect(screen.getByText(/Your counter is : 0/)).toBeInTheDocument();
    });

    describe(`When plus button is clicked`, () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole('button', {name: 'add to counter'}));
      });
      it(`Should render current count to 1`, () => {
        expect(screen.getByText(/Your counter is : 1/)).toBeInTheDocument();
      });
    });

    describe(`When minus button is clicked`, () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole('button', {name: 'substract to counter'})
        );
      });

      it(`Should render current count to -1`, () => {
        expect(screen.getByText(/Your counter is : -1/)).toBeInTheDocument();
      });
    });
  });
});

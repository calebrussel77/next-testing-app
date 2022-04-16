import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

const setup = (value: number) => render(<Counter defaultCount={value} />);

describe(`Counter`, () => {
  describe(`Should have default initialize value equal to 15`, () => {
    beforeEach(() => {
      setup(15);
    });

    it(`Should have current count value equal to 15`, () => {
      expect(screen.getByText('Your counter is : 15')).toBeInTheDocument();
    });

    describe(`When the incrementor changes to 5`, () => {
      describe(`When plus button is clicked`, () => {
        beforeEach(() => {
          fireEvent.change(screen.getByLabelText(/Incrementor/), {
            target: { value: 5 },
          });
          fireEvent.click(
            screen.getByRole('button', { name: 'add to counter' })
          );
        });
        it(`Should render incrementor count to 5`, () => {
          expect(screen.getByLabelText(/Incrementor/)).toHaveValue(String(5));
        });
        it(`Should render current count to 20`, () => {
          expect(screen.getByText(`Your counter is : 20`)).toBeInTheDocument();
        });
      });

      describe(`When minus button is clicked`, () => {
        beforeEach(() => {
          fireEvent.change(screen.getByLabelText(/Incrementor/), {
            target: { value: 5 },
          });
          fireEvent.click(
            screen.getByRole('button', { name: 'substract to counter' })
          );
        });
        it(`Should render incrementor count to 5`, () => {
          expect(screen.getByLabelText(/Incrementor/)).toHaveValue(String(5));
        });
        it(`Should render current count to 10`, () => {
          expect(screen.getByText('Your counter is : 10')).toBeInTheDocument();
        });
      });
    });
  });

  describe(`Should have default initialize value equal to 0`, () => {
    beforeEach(() => {
      setup(0);
    });

    it(`Should render current count to 0`, () => {
      expect(screen.getByText('Your counter is : 0')).toBeInTheDocument();
    });

    describe(`When plus button is clicked`, () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole('button', { name: 'add to counter' }));
      });
      it(`Should render current count to 1`, () => {
        expect(screen.getByText('Your counter is : 1')).toBeInTheDocument();
      });
    });

    describe(`When minus button is clicked`, () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole('button', { name: 'substract to counter' })
        );
      });

      it(`Should render current count to -1`, () => {
        expect(screen.getByText('Your counter is : -1')).toBeInTheDocument();
      });
    });
  });
});

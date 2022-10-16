/* eslint-disable testing-library/no-debugging-utils */
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Counter} from './counter';

describe(`Counter`, () => {
  describe(`Should have default initialize value equal to 15`, () => {
    beforeEach(() => {
      render(<Counter defaultCount={15} />);
    });

    it(`Should have current count value equal to 15`, () => {
      const counterTextDisplay = screen.getByText(/Your counter is : 15/);
      expect(counterTextDisplay).toBeInTheDocument();
    });

    describe(`When the incrementor changes to 5`, () => {
      it(`Should render incrementor count to 5`, async () => {
        userEvent.setup();
        const incrementorInput = screen.getByRole('spinbutton', {
          name: /incrementor/i,
        });
        await userEvent.clear(incrementorInput);
        await userEvent.type(incrementorInput, '5');
        expect(incrementorInput).toHaveValue(5);
      });
      describe(`When plus button is clicked`, () => {
        it(`Should render current count to 20`, async () => {
          userEvent.setup();
          const plusBtn = screen.getByRole('button', {name: /add to counter/i});
          const incrementorInput = screen.getByRole('spinbutton', {
            name: /incrementor/i,
          });
          await userEvent.clear(incrementorInput);
          await userEvent.type(incrementorInput, '5');
          await userEvent.click(plusBtn);
          const counterTextDisplay = screen.getByText(/Your counter is : 20/);
          expect(counterTextDisplay).toBeInTheDocument();
        });
      });

      describe(`When minus button is clicked`, () => {
        it(`Should render current count to 10`, async () => {
          userEvent.setup();
          const minusBtn = screen.getByRole('button', {
            name: /substract to counter/i,
          });
          const incrementorInput = screen.getByRole('spinbutton', {
            name: /incrementor/i,
          });
          await userEvent.clear(incrementorInput);
          await userEvent.type(incrementorInput, '5');
          await userEvent.click(minusBtn);
          const counterTextDisplay = screen.getByText(/Your counter is : 10/);
          expect(counterTextDisplay).toBeInTheDocument();
        });
      });
    });
  });

  describe('should have default `isAsync` prop set to true', () => {
    beforeEach(() => {
      render(<Counter defaultCount={15} isAsync />);
    });

    it('should render current count to 16 when plus btn is clicked after 200ms', async () => {
      userEvent.setup();
      const plusBtn = screen.getByRole('button', {name: /add to counter/i});
      await userEvent.click(plusBtn);
      const counterTextDisplay = await screen.findByText(
        /Your counter is : 16/
      );
      expect(counterTextDisplay).toBeInTheDocument();
    });
  });

  describe(`Should have default initialize value equal to 0`, () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} />);
    });

    it(`Should render current count to 0`, () => {
      const counterTextDisplay = screen.getByText(/Your counter is : 0/);
      expect(counterTextDisplay).toBeInTheDocument();
    });

    describe(`When plus button is clicked`, () => {
      it(`Should render current count to 1`, async () => {
        userEvent.setup();
        const plusBtn = screen.getByRole('button', {name: /add to counter/i});
        await userEvent.click(plusBtn);
        const counterTextDisplay = screen.getByText(/Your counter is : 1/);
        expect(counterTextDisplay).toBeInTheDocument();
      });
    });

    describe(`When minus button is clicked`, () => {
      it(`Should render current count to -1`, async () => {
        userEvent.setup();
        const minusBtn = screen.getByRole('button', {
          name: /substract to counter/i,
        });
        await userEvent.click(minusBtn);
        const counterTextDisplay = screen.getByText(/Your counter is : -1/);
        expect(counterTextDisplay).toBeInTheDocument();
      });
    });
  });

  describe(`When tab is pressed`, () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} />);
    });

    it(`Should focus elements in order`, async () => {
      userEvent.setup();
      const incrementorInput = screen.getByRole('spinbutton', {
        name: /incrementor/i,
      });
      const plusBtn = screen.getByRole('button', {name: /add to counter/i});
      const minusBtn = screen.getByRole('button', {
        name: /substract to counter/i,
      });
      await userEvent.tab();
      expect(incrementorInput).toHaveFocus();
      await userEvent.tab();
      expect(plusBtn).toHaveFocus();
      await userEvent.tab();
      expect(minusBtn).toHaveFocus();
    });
  });
});

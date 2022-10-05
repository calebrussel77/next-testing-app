import {render, screen} from '@testing-library/react';

import {Application} from './application';

describe('Application', () => {
  beforeEach(() => {
    render(<Application />);
  });

  it('should render on the screen', () => {
    //For heading specially we can use `level` at the same place we are using `name`
    const page_heading_one = screen.getByRole('heading', {
      name: /Job application form/i,
    });
    expect(page_heading_one).toBeInTheDocument();

    const page_heading_two = screen.getByRole('heading', {
      name: /Section 1/i,
    });
    expect(page_heading_two).toBeInTheDocument();

    const page_input_text = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(page_input_text).toBeInTheDocument();

    const page_image = screen.getByAltText(/a person with a laptop/i);
    expect(page_image).toBeInTheDocument();
  });
});

import {RenderOptions, render} from '@testing-library/react';
import {ReactElement} from 'react';

import {AppProviders} from './src/app-providers/app-providers';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AppProviders, ...options});

export * from '@testing-library/react';

export {customRender as render};

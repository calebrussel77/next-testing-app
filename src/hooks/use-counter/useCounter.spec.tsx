import {act, renderHook} from '@testing-library/react';

import {useCounter} from './useCounter';

describe('useCounter', () => {
  it('should render the initial count', () => {
    const {result} = renderHook(useCounter);
    expect(result?.current?.count).toBe(0);
  });

  it('should accept and render the same initial count', () => {
    const {result} = renderHook(useCounter, {
      initialProps: {
        initialCount: 20,
      },
    });
    expect(result?.current?.count).toBe(20);
  });

  it('should increment the count', () => {
    const {result} = renderHook(useCounter, {
      initialProps: {
        initialCount: 20,
      },
    });
    // The act function encapsulate something who causes side effects
    act(() => result.current.increment());
    expect(result?.current?.count).toBe(21);
  });
  it('should decrement the count', () => {
    const {result} = renderHook(useCounter, {
      initialProps: {
        initialCount: 20,
      },
    });
    // The act function encapsulate something who causes side effects
    act(() => result.current.decrement());
    expect(result?.current?.count).toBe(19);
  });
});

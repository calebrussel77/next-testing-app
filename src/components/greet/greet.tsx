import React from 'react';

type GreetPropstype = {
  name?: string;
};

export const Greet: React.FC<GreetPropstype> = ({ name }) => {
  return <div data-testid="greeting">hello {name}</div>;
};

import { useState } from 'react';

type counterProps = {
  defaultCount?: number;
};

const Counter = ({ defaultCount = 0 }: counterProps) => {
  const [count, setCount] = useState<number>(defaultCount);
  const [increment, setIncrement] = useState<number>(1);

  const handleAddCounter = () => setCount(count + Number(increment));

  const handleSubstractCounter = () => setCount(count - Number(increment));

  const handleChangeIncrement = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIncrement(Number(e.target.value) || 1);

  return (
    <div
      style={{ display: 'flex', justifyItems: 'center', margin: '32px 10px' }}
    >
      <input
        aria-label="Incrementor"
        value={increment}
        onChange={(e) => handleChangeIncrement(e)}
      />
      <button aria-label="add to counter" onClick={handleAddCounter}>
        +
      </button>
      <p>Your counter is : {count}</p>
      <button
        aria-label="substract to counter"
        onClick={handleSubstractCounter}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

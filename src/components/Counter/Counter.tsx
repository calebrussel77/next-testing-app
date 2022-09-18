import {useState} from 'react';

type counterProps = {
  defaultCount?: number;
};

const Counter: React.FC<counterProps> = ({defaultCount}) => {
  const [count, setCount] = useState<number>(defaultCount || 0);
  const [increment, setIncrement] = useState<number>(1);

  const handleAddCounter = () => setCount(count + increment);

  const handleSubstractCounter = () => setCount(count - increment);

  const handleChangeIncrement = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIncrement(Number(e.target.value));

  return (
    <div className="flex items-center m-4 gap-3">
      <input
        aria-label="Incrementor"
        type="number"
        min={1}
        className="border px-3 py-1.5 shadow-sm rounded-sm focus:outline-green-500"
        value={increment}
        onChange={e => handleChangeIncrement(e)}
      />
      <button
        aria-label="add to counter"
        className="p-3 bg-gray-100 border rounded-lg"
        onClick={handleAddCounter}
      >
        +
      </button>
      <p>Your counter is : {count}</p>
      <button
        aria-label="substract to counter"
        className="p-3 bg-gray-100 border rounded-lg"
        onClick={handleSubstractCounter}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

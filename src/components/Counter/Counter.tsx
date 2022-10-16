import {useState} from 'react';

type counterProps = {
  defaultCount?: number;
  isAsync?: boolean;
};

const Counter: React.FC<counterProps> = ({defaultCount, isAsync = false}) => {
  const [count, setCount] = useState<number>(defaultCount || 0);
  const [increment, setIncrement] = useState<number>(1);

  const handleAddCounter = () => {
    if (isAsync) {
      setTimeout(() => {
        setCount(count + increment);
      }, 500);
      return;
    }
    setCount(count + increment);
  };

  const handleSubstractCounter = () => {
    if (isAsync) {
      setTimeout(() => {
        setCount(count - increment);
      }, 500);
      return;
    }
    setCount(count - increment);
  };

  const handleChangeIncrement = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIncrement(Number(e.target.value));

  return (
    <div className="flex items-center m-4 gap-3">
      <input
        aria-label="Incrementor"
        type="number"
        min={1}
        className="border px-3 py-1.5 shadow-sm rounded-s m focus:outline-green-500"
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

export {Counter};

import type {NextPage} from 'next';

import Counter from '@components/counter/counter';

const Home: NextPage = () => {
  return (
    <div className="bg-red-500 h-80">
      <Counter />
    </div>
  );
};

export default Home;

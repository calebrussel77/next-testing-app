import type {NextPage} from 'next';

import Counter from '@components/counter/counter';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-500">
      <Counter />
    </div>
  );
};

export default Home;

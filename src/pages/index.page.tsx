import type {NextPage} from 'next';

import {Counter} from '@components/counter/counter';

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <Counter />
    </div>
  );
};

export default Home;

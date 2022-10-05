import type {NextPage} from 'next';

import {Application} from '@components/application/application';
import {Counter} from '@components/counter/counter';
import {Skills} from '@components/skills/skills';
import {skillsData} from '@components/skills/skills.mock';

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <Counter />
      <Application />
      <Skills {...{skills: skillsData}} />
    </div>
  );
};

export default Home;

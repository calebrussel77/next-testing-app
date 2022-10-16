import type {NextPage} from 'next';

import {Application} from '@components/application/application';
import {Counter} from '@components/counter/counter';
import Login from '@components/login/login';
import {Skills} from '@components/skills/skills';
import {skillsData} from '@components/skills/skills.mock';
import {Users} from '@components/users/users';

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <Login />
      <Users />
      <Counter isAsync />
      <Application />
      <Skills {...{skills: skillsData}} />
    </div>
  );
};

export default Home;

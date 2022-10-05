import React, {useEffect, useState} from 'react';

type SkillsProps = {
  skills: Array<string>;
};

export const Skills: React.FC<SkillsProps> = ({skills}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ul>
      {skills.map((value, idx) => (
        <li key={idx}>{value}</li>
      ))}
      {isLoggedIn ? (
        <button
          className="rounded-md text-white px-2 py-1.5 text-sm bg-green-500"
          aria-label="start-learn"
          onClick={() => setIsLoggedIn(false)}
        >
          Start learning
        </button>
      ) : (
        <button
          className="rounded-md text-white px-2 py-1.5 text-sm bg-pink-500"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </ul>
  );
};

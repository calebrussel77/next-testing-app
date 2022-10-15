import React, {useEffect, useState} from 'react';

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'data'>(
    'idle'
  );

  useEffect(() => {
    setStatus('loading');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then((data: Array<{name: string}>) => {
        setStatus('data');
        setUsers(data?.map(user => user?.name));
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      {status === 'idle' || status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Something went wrong !</p>
      ) : (
        <ul aria-label="users-list">
          {users?.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

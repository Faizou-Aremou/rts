import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
    setName('');
  };
  return (
    <div>
      <h3> User Search </h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      <div>{user?.name} {user?.age}</div>
    </div>
  );
};

export default UserSearch;

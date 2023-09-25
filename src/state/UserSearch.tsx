import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [searchName, setSearchName] = useState<
    { name: string; age: number } | undefined
  >(undefined);

  const onClick = () => {
    const user = users.find((user) => user.name === name);
    setSearchName(user);
    setName('');
  };
  return (
    <div>
      <h3> User Search </h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default UserSearch;

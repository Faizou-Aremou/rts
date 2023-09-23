import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuest] = useState<string[]>([]);
  const onClick = () => {
    setGuest([...guests, name]);
    setName('');
  };
  return (
    <div>
      <h3> Gest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onInput={(e) => setName((e.target as any).value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;

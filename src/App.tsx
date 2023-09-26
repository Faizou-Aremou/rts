import './App.css';
import EventComponent from './events/EventComponent';
import GuestList from './state/GestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
     <GuestList></GuestList>
     <EventComponent/>
    </div>
  )
}
export default App;

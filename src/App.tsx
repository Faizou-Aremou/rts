import './App.css';
import UserSearch from './refs/UserSearch';
import GuestList from './state/GestList';


const App = () => {
  return (
    <div>
     <GuestList></GuestList>
     <UserSearch/>
    </div>
  )
}
export default App;

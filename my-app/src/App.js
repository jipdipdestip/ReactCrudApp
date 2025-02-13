import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import UserList from './UserList';
import AddUser from './AddUser';

function App() {
  return (
    <div>
      <HeaderComponent />
      <UserList />
      <AddUser />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import UserList from './app/components/AddUser/UserList/UserList';
import AddUser from './app/components/AddUser/AddUser';


function App() {
  return (
    <div>
      <HeaderComponent />
      <UserList />
    </div>
  );
}

export default App;

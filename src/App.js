import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Manager from './views/Manager';
import { useEffect, useState } from 'react';
import './normalize.css'

function App() {
  const [dataUser, setDataUser] = useState({ user: '', status: false })

  useEffect(() => {
    const data = localStorage.getItem('dataUser');
    if (data !== null && data !== null) {
      console.log('storageUserapp')
      setDataUser(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    if (dataUser.user !== '') {
      localStorage.setItem('dataUser', JSON.stringify(dataUser));
      console.log('storageUserappp')
    }
  }, [dataUser])
  return (
    <Router>
      <Route exact path='/manager'>
        <Manager dataUser={dataUser} setDataUser={setDataUser} />
      </Route>
      <Route exact path='/'>
        <Home dataUser={dataUser} setDataUser={setDataUser} />
      </Route>
    </Router>
  );
}

export default App;

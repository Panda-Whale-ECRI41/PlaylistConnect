import React, { useEffect, useState } from 'react';
// import LeftDiv from './LeftDiv';
import TopBar from './TopBar';
import PlaylistDiv from './PlaylistDiv.jsx';
import Login from "./Login.jsx";
import { Register } from "./Register";
import { Route, Routes } from 'react-router';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  function updatePlaylist(arr) {
    console.log(arr, ' this is the updated array .........');
    setCurrentPlaylist(arr);
  }
  useEffect(() => {
    async function getUser() {
      const user = await fetch('http://localhost:3000/user/StarNoseMole'); //NEEDS TO BE CHANGED
      const newUser = await user.json();
      setCurrentUser(newUser);
    }
    getUser();
  }, []);
  const [isUserOpen, setUserOpen] = useState(false);
  const [isPlaylistOpen, setPlaylistOpen] = useState(false);


  //login
  const [currentForm, setCurrentForm] = useState('login');
  //create account
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div>
      <div className='Login'>
          {
            currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
          }
      </div>

      <>
        <Routes>
          <Route exact path = '/login' element = {<Login />}/>
          <Route exact path = '/register' element = {<Register />}></Route>
        </Routes>
      </>


      {/* pass down playlist array to props */}
      <div
        className="total-div"
        style={{ display: 'flex', flexDirection: 'col', height: '90vh' }}
      >
        {/* <LeftDiv
          isUserOpen={isUserOpen}
          setUserOpen={setUserOpen}
          currentUser={currentUser}
          updatePlaylist={updatePlaylist}
        /> */}

        <div className="main-div">
          <TopBar
            isPlaylistOpen={isPlaylistOpen}
            setPlaylistOpen={setPlaylistOpen}
            updatePlaylist={updatePlaylist}
          />
          {/* render cards here */}
          <PlaylistDiv
            currentPlaylist={currentPlaylist}
            setCurrentPlaylist={setCurrentPlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

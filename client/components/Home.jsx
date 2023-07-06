import React, { useEffect, useState} from 'react';
// import LeftDiv from './LeftDiv';
import TopBar from './TopBar';
import PlaylistDiv from './PlaylistDiv.jsx';
import Login from "./Login.jsx";
//import { Register } from "./Register";
import { Route, Routes, Link, useNavigate, BrowserRouter } from 'react-router-dom';

const Home = () => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate()
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  function updatePlaylist(arr) {
    console.log(arr, ' this is the updated array .........');
    setCurrentPlaylist(arr);
  }
    
  useEffect(() => {
    async function getUser() {
      const user = await fetch('http://localhost:3000/user/xjqiu'); //NEEDS TO BE CHANGED
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
      <>
      {/* <BrowserRouter> */}
      {/* <Routes>
        <Route exact path = '/login' element = {<Login />}/>
        <Route exact path = '/register' element = {<Register />}></Route>
      </Routes> */}
      {/* </BrowserRouter> */}
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

export default Home;

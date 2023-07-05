//import use state allows rerendering of elements when we add new components
import React, { useEffect, useState } from 'react';
import LeftDiv from './LeftDiv';
import TopBar from './TopBar';
import PlaylistDiv from './PlaylistDiv.jsx';
import { Button } from './Button';
import { ListComponent } from './ListComponent';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  //added
  //use use state to set component and setComponents variables so when we change the components in the arr the component will rerender itself
  const [components, setComponents] = useState(['Sample Component']);

  //define add component fxn uses setComponent to add new string to components arr
  function addComponent() {
    console.log(`this is is the current components: ${components}`);

    //call setter fxn passing in copy of comps and what state should be set to
    setComponents([...components, 'Sample Component']);
    console.log(`this is is the new component: ${components}`);
  }

  function updatePlaylist(arr) {
    console.log(arr, ' this is the updated array .........');
    setCurrentPlaylist(arr);
  }
  useEffect(() => {
    async function getUser() {
      const user = await fetch('http://localhost:3000/user/StarNoseMole');
      const newUser = await user.json();
      setCurrentUser(newUser);
    }
    getUser();
  }, []);
  const [isUserOpen, setUserOpen] = useState(false);
  const [isPlaylistOpen, setPlaylistOpen] = useState(false);
  return (
    <div>
      <Button onClick={addComponent} text='Call Component' />
      {/* map in return takes each val of components arr and converts it to rendered element on screen. 
      map each item (string) to a list component that ues the item as inner text ie sample component rendered anytime we click button */}
      {components.map((item, i) => (
        <ListComponent text={item} />
      ))}
      {/* pass down playlist array to props */}
      <div
        className='total-div'
        style={{ display: 'flex', flexDirection: 'col', height: '90vh' }}
      >
        <LeftDiv
          isUserOpen={isUserOpen}
          setUserOpen={setUserOpen}
          currentUser={currentUser}
          updatePlaylist={updatePlaylist}
        />

        <div className='main-div'>
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

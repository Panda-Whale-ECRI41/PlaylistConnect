import React, { useState } from "react";


const STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  backgroundColor: "#FFF",
  zIndex: 1000
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000
};

/*

  playlistName: { type: String },
  description: { type: String, required: true },
  genre: { type: String },
  playlistID: { type: String, required: true },
  playlistURL: { type: String, required: true },
  groupID: { type: String, required: true },
  playlistOwner: { type: String, required: true },
});

*/

export default function CreatePlaylistPopup({ open, onClose }) {


  const grabFormFields = event => {

    event.preventDefault();


    console.log('playlist submit clicked');
    console.log('playlistName: ', playlistName);
    console.log('description: ', description);
    console.log('genre: ', genre);
    console.log('playlistURL: ', playlistURL);
    console.log('groupID: ', groupID);
    console.log('playlistOwner: ', playlistOwner);


    // const [playlistName, setPlaylistName] = useState('');
    // const [description, setDescription] = useState('');
    // const [genre, setGenre] = useState('');
    // // const [playlistID, setPlaylistID] = useState('');
    // const [playlistURL, setPlaylistURL] = useState('');
    // const [groupID, setGroupID] = useState('');
    // const [playlistOwner, setPlaylistOwner] = useState('');
    

    // const handlePlaylistNameChange = event => {
    //   setPlaylistName(event.target.value)
    // };

    // const handleDescriptionChange = event => {
    //   setDescription(event.target.value)
    // };

    // const handleGenreChange = event => {
    //   setGenre(event.target.value)
    // };

    // // const handlePlaylistIDChange = event => {
    // //   setPlaylistID(event.target.value)
    // // };

    // const handlePlaylistURLChange = event => {
    //   setPlaylistURL(event.target.value)
    // };

    // const handleGroupIDChange = event => {
    //   setGroupID(event.target.value)
    // };

    // const handlePlaylistOwnerChange = event => {
    //   setPlaylistOwner(event.target.value)
    // };

    fetch("http://localhost:8080/playlist", {
      method: "POST",
      body: JSON.stringify({
        playlistName,
        description,
        genre,
        playlistURL,
        groupID,
        playlistOwner
      }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Playlist Obj Created: ", data);
        form.reset();
        onClose();
      })
      .catch((error) => console.error("Not created.", error));
    
    onClose();
    // });
  };
    



  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  // const [playlistID, setPlaylistID] = useState('');
  const [playlistURL, setPlaylistURL] = useState('');
  const [groupID, setGroupID] = useState('');
  const [playlistOwner, setPlaylistOwner] = useState('');
  

  const handlePlaylistNameChange = event => {
    setPlaylistName(event.target.value)
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  };

  const handleGenreChange = event => {
    setGenre(event.target.value)
  };

  const handlePlaylistURLChange = event => {
  setPlaylistURL(event.target.value)
  };

  const handleGroupIDChange = event => {
    setGroupID(event.target.value)
  };

  const handlePlaylistOwnerChange = event => {
    setPlaylistOwner(event.target.value)
  };



  if (!open) return null;

  return (
    <>
      <div 
        style={OVERLAY_STYLE}
        // className="OVERLAY_STYLE"
      >
        <div 
          style={STYLE}
          // className="OVERLAY_STYLE"
        >
          <form 
            id="createPlaylistForm" 
            action="/playlist" 
            method="post"
            onSubmit={grabFormFields}
          >
            <h2>Add Playlist to Group</h2>
            
            <div>
              <label htmlFor="playlistName">
                Playlist Name:
                <br></br>
                <input
                  type="text"
                  id="playlistName"
                  placeholder="enter playlist name"
                  onChange={handlePlaylistNameChange}
                />
              </label>

              <br></br>
              <br></br>

              <label htmlFor="description">
                Description:
                <br></br>
                <input
                  type="text"
                  id="description"
                  placeholder="enter description"
                  onChange={handleDescriptionChange}
                />
              </label>

              <br></br>
              <br></br>

              <label htmlFor="genre">
                Genre:
                <br></br>
                <input 
                  type="text" 
                  id="genre" 
                  placeholder="enter genre" 
                  onChange={handleGenreChange}
                />
              </label>

              <br></br>
              <br></br>

              {/* <label htmlFor="Playlist ID">ID:</label> */}
              {/* <input type="text" id="Playlist ID" placeholder="enter ID" /> */}

              <label htmlFor="Playlist URL">
                URL:
                <br></br>
                <input 
                  type="text" 
                  id="URL" 
                  placeholder="enter URL" 
                  onChange={handlePlaylistURLChange}
                />
              </label>

              <br></br>
              <br></br>

              <label htmlFor="Group ID">
                Group ID:
                <br></br>
                <input 
                  type="text" 
                  id="Group ID" 
                  placeholder="enter group ID" 
                  onChange={handleGroupIDChange}
                />
              </label>

              <br></br>
              <br></br>

              <label htmlFor="Playlist Owner">
              Playlist Owner:
              <br></br>
              <input
                type="text"
                id="Playlist Owner"
                placeholder="enter Playlist Owner"
                onChange={handlePlaylistOwnerChange}
              />
            </label>
            </div>



            
            <br></br>
            <br></br>

            <button 
              id="submitButton" 
              type="submit" 
              className="closeButton"
            // onClick={buttonClick}
            >
               Submit 
            </button>

          </form>

          <button 
            className="closeButton" 
            type="closeAndSubmit" 
            onClick={onClose}>
             Close 
          </button>

          {/* {children} */}
        </div>
      </div>
    </>
  );
}







// action="/playlist" method="post"

// document.querySelector('#submitButton').addEventListener('click', (event)=> {
//     // create a new object {createdat: createby: message:}

//     const today = new Date();
//     const timeStamp = today.toISOString();

//     const sending = {
//       message: messageInput.value,
//       created_at: timeStamp,
//       created_by: user.value
//     };

//     console.log(stringIt(sending));
//     // console.log(`button`, submitButton.value)
//   })

// document.body.appendChild(form);

//     /*
//         Return form in popup:
//             input fields as follows:
//                 playlistName: string,
//                 description: string,
//                 genre: string (for now),
//                 playlistURL: string,
//     */

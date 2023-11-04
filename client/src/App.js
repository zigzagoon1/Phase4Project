import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CatImages from './CatImages';
import Memes from './Memes';
import { CurrentUserContext, CurrentUserProvider } from './context/current_user';
import Signup from './Signup';
import Login from './Login';
import MakeAMeme from './MakeAMeme';
import AddCat from './AddCat';
function App() {

  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

  useEffect(() => {
    let isMounted = true;
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        return r.json()
      }
      else {
        throw r;
      }
    })
        .then((user) => {
          if (user && !currentUser) {
            if (isMounted) {
              console.log(user)
              setCurrentUser(user);
              console.log(currentUser);
            }

          }
        });
        return () => {
          isMounted = false;
        }
      }, [setCurrentUser])

      useEffect(()=> {
        console.log(currentUser);
      }, [currentUser])


  function handleMakeMeme(imgName, imgSrc) {
    return <MakeAMeme name={imgName} src={imgSrc} />
  }

  return (
    <div className='container-flex justify-content-center'>
      <div className='row bg-danger bg-gradient'>
        <h1 className="col text-center">Cat Meme Generator</h1>
        <h6 className='col-12 text-center'>A phase 4 project by Kelly</h6>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<CatImages makeMeme={handleMakeMeme}/>} />
          <Route path="/me" element={<Memes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cats/make-meme/:name" element={<MakeAMeme />} />
          <Route path="/memes/edit/:id" element={<MakeAMeme />} />
          <Route path="/add-cat" element={<AddCat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// #region importazioni
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// contexts
import APIContext from './contexts/APIContext.jsx';
import { PostListProvider } from './contexts/PostListContext.jsx';

// pagine
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Posts from './pages/Posts.jsx';
import SinglePost from './pages/SinglePost.jsx';

// layout
import DefaultLayout from './pages/DefaultLayout.jsx';

// stile
import './App.css';

// #endregion importazioni

function App() {
  const baseUrl = 'http://localhost:3000';

  return (
    <>
      <APIContext.Provider value={{ baseUrl }}>
        <PostListProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/:slug' element={<SinglePost />} />
                <Route path='/about' element={<AboutUs />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PostListProvider>
      </APIContext.Provider>
    </>
  )
}

export default App

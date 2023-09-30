import { ContextApi } from './Context/ContextApi';
import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from './Components/Feed';
import VideoDetails from './Components/VideoDetails';
import SearchResult from './Components/SearchResult';

// used api in this project https://rapidapi.com/ytdlfree/api/youtube-v3-alternative

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
       <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/videodetails' element={<VideoDetails />} />
          <Route path="/SearchResult/:query" element={<SearchResult />} />
        </Routes>
       </div>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;

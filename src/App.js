import logo from './logo.svg';
import './App.css';
import News from './News';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NewsIndia from './NewsIndia';
import NewsWorld from './NewsWorld';
import NewsEntertainment from './NewsEntertainment';
import NewsSport from './NewsSport';
import NewsTech from './NewsTech';
import NewsLifeStyle from './NewsLifeStyle';
import NewsBusiness from './NewsBusiness';
import NewsCrime from './NewsCrime';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
      <Route path='/' element={<News/>} />
      <Route path='/india' element={<NewsIndia/>} />
      <Route path='/sport' element={<NewsSport/>} />
      <Route path='/world' element={<NewsWorld/>} />
      <Route path='/life-style' element={<NewsLifeStyle/>} />
      <Route path='/technology' element={<NewsTech/>} />
      <Route path='/entertainment' element={<NewsEntertainment/>} />
      <Route path='/business' element={<NewsBusiness/>} />
      <Route path='/crime' element={<NewsCrime/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

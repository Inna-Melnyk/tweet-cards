import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';


function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;

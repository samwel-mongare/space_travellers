import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/Profile';
import Missions from './components/pages/Missions';

const App = () => (
  <div className="spaceTravellers">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/Missions"
          element={
            <Missions />
    }
        />
        <Route
          path="/Profile"
          element={
            <Profile />
    }
        />
        <Route
          path="/"
          element={
            <Rockets />
    }
        />
      </Routes>
    </BrowserRouter>

  </div>
);

export default App;

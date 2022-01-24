import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile';
import Missions from './components/pages/Missions';

const App = () => (
  <div className="spaceTravellers">
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
      </Routes>
  </div>
);

export default App;

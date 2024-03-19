import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Host from './Host';
import Join from './Join';
import ConnectionType from './ConnectionType';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="grid grid-cols-2">
            <li>
              <Link to="/host">HOST</Link>
            </li>
            <li>
              <Link to="/join">JOIN</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route exact path="/host" element={<Host />} />
          <Route path="/join" element={<Join />} />
          <Route exact path="/connection-type" element={<ConnectionType />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

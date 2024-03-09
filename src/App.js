
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Get from './axios/Get';

import Adduser from './axios/Adduser';
import Edit from './axios/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

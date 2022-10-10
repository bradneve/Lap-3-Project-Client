import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import { LoginForm } from './components';

const App = () => {
    return (
        <Routes>
            <Route path="/auth" element={<LoginForm />} />
        </Routes>
    )
};

export default App;
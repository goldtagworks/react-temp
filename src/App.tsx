import { Route, Routes } from 'react-router-dom';

import MelonPage from './pages/Index';

const App = () => {
    return (
        <Routes>
            <Route element={<MelonPage />} path="/melon" />
        </Routes>
    );
};

export default App;

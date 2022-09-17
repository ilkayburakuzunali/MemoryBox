import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomeScreen/>}/>
                <Route path="/create" element={<CreateScreen/>}/>
            </Routes>
        </Router>

    );
}

export default App;

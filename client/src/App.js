import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'

import Header from './components/Header'
import {Container} from 'react-bootstrap'

function App() {
    return (
        <Router>
            <Header></Header>
            <Container>
                <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/create" element={<CreateScreen/>}/>
                </Routes>
            </Container>
        </Router>
    );
}

export default App;

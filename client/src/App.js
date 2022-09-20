import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'

import Header from './components/Header'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'
import UpdateScreen from "./Screens/UpdateScreen";
import AuthScreen from "./Screens/AuthScreen";

function App() {
    return (
        <Router>
            <Header></Header>
            <main className='py-4'>
                <Container>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen/>}/>
                        <Route path="/create" element={<CreateScreen/>}/>
                        <Route path="/update/:id" element={<UpdateScreen/>}/>
                        <Route path="/auth" element={<AuthScreen/>}/>
                    </Routes>
                </Container>
            </main>
            <Footer></Footer>
        </Router>
    );
}

export default App;

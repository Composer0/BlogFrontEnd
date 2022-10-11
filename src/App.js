import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

function App() {
    const user = true;
    return (
        <div className='App'>
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/post/:postId" element={<Single />} />
                <Route path="/write" element={user ? <Write /> : <Register />} />
                <Route path="/settings" element={user ? <Settings /> : <Register />} />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/register" element={user ? <Home/> : <Register />} />
            </Routes>

            {/* <Single /> */}
            {/* <Write /> */}
            {/* <Settings /> */}
            {/* <Login /> */}
            {/* <Register /> */}

        </Router>
        </div>
    )
}

export default App;
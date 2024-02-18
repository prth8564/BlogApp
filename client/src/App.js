import logo from './logo.svg';
import './App.css';
import Post from './Post';
import CreatePost from './Pages/CreatePost';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={
        <Post/>
        
      }>
        

      </Route>
      <Route path="/CreatePost" element={
          <CreatePost/>
      }></Route>

      <Route path="/register" element={
        <Register />
      }>
      </Route>

        <Route path="/login" element = {
          <Login />
        }>

        </Route>

    </Routes>
    
    
  );
}

export default App;

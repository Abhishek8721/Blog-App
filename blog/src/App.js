import Home from "./pages/home/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post/Post";

function App() {
  const user = false
  return (
    <>
    
  
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/post/:id" element={<Single/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
   
  );
}

export default App;

// import 'src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Header from './components/header'
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import {useState} from 'react'
import Container from './components/container';
function App() {
  // let [page, setPage] = useState('Home');
  // let pageSwapHandler = (whichPage) =>{
  //   setPage(whichPage);
  // }
  // let renderInfo = () => {
  //   switch(page){
  //     case 'Home': return <Home/>;
  //     case 'Projects': return <Projects/>;
  //     default: return <Home/>
  //   }
  // }
  return (
    <div>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;

import {useState} from 'react';
import Header from './header';
// import Footer from './components/footer';
import Home from './pages/home';
import Projects from './components/pages/projects';

export default function Container(){
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if(currentPage === 'Home'){
            return <Home/>
        }
        if(currentPage === 'Home'){
            return <Projects/>
        }
    }
    
    const handlePageChange = (page)=> setCurrentPage(page);
    return (
        <div>
            <header currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}
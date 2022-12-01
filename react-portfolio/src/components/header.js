import 'src/components/header.css';
export default function Header({currentPage, handlePageChange}){
    return (
        <header>
            <div>
                <h1>Jake Schmidt</h1>
            </div>
            <nav>
            <ul className="nav justify-content-end">
                 <li className="nav-item">
                    <a 
                    className="nav-link" href="#about">Home
                    onClick={() => handlePageChange('Home')}
                    className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    </a>
                 </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects
                    onClick={() => handlePageChange('Projects')}
                    className= {currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact
                    onClick={() => handlePageChange('Contact')}
                    className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    </a>
                </li>
            </ul>
            </nav>
        </header>
    )
}
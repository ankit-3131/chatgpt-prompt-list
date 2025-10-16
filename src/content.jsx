import { createRoot } from 'react-dom/client'
import './style.css'
import Sidebar from './Sidebar.jsx'


const rootDivStyles = {
    position: 'fixed',
    bottom: '0',
    right: '1vw',
    width: '27vw',                      
    height: '93vh',                    
    // zIndex: ,
    overflowY: 'auto',
    overflowX: 'auto',

    // borderRadius: '1rem 0 0 1rem',     
    padding: '.3rem',                   
    fontSize: '1rem',
};



const rootDiv = document.createElement('div');
rootDiv.id = 'rootDiv';

Object.assign(rootDiv.style, rootDivStyles);

document.body.appendChild(rootDiv);

createRoot(rootDiv).render(
    <Sidebar />
)

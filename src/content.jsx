// const btn = document.createElement('button');
// btn.textContent = 'Prompt List';
// btn.style.position = 'fixed';
// btn.style.bottom = '20px';
// btn.style.right = '40px';
// btn.style.zIndex = '1000';
// btn.style.padding = '10px 20px';
// btn.style.backgroundColor = '#1AF2F2';
// btn.style.color = 'white';
// btn.style.border = 'none';
// btn.style.borderRadius = '5px';
// btn.style.cursor = 'pointer';
// document.body.appendChild(btn);

// btn.addEventListener('click', handleBtnClick);

// function handleBtnClick() {
//   const userPrompts = document.querySelectorAll('.whitespace-pre-wrap');
//   userPrompts.forEach(prompt => {
//     const promptText = prompt.innerText;
//     if (promptText) {
//       console.log(promptText);
//       // Here you can add logic to store or display the prompts as needed
//     }
//     else{
//         alert('Error while fetching prompts!');
//     }
//   });
// }

import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'


const rootDiv = document.createElement('div');
rootDiv.id = 'rootDiv';
rootDiv.style.position = 'fixed';
rootDiv.style.bottom = '20px';
rootDiv.style.right = '1px';
rootDiv.style.zIndex = '1001';
rootDiv.style.height = '90vh';
rootDiv.style.width = '240px';
rootDiv.style.overflow = 'auto';
// rootDiv.style.border = '1px solid #ccc';
rootDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';

document.body.appendChild(rootDiv);

createRoot(rootDiv).render(
    <App />
)

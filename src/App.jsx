import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './mainApp.css'
import './style.css'
function App() {
  const [prompts, setPrompts] = useState([]);

  
  function handleView(idx){
    const userPrompts = document.querySelectorAll('.whitespace-pre-wrap');
    userPrompts[idx].scrollIntoView({
      behavior: 'smooth',
  })
  }

  function handleBtnClick() {
  const userPrompts = document.querySelectorAll('.whitespace-pre-wrap');
  setPrompts([]);
  userPrompts.forEach((prompt, index) => {
    const promptText = prompt.innerText;
    if (promptText) {
      setPrompts(prevPrompts => [...prevPrompts, promptText]);
      // Here you can add logic to store or display the prompts as needed
    }
    else{
        alert('Error while fetching prompts!');
    }
  });
}

  return (
    <div className="extension-popup">
      <h2 id='refreshBtn' onClick={handleBtnClick}>Refresh</h2>
      {
        prompts.length > 0 ? (
          <div className="prompt-list">
            <h2>Prompts</h2>
            <ul>
              {prompts.map((prompt, index) => (
                <li onClick={()=>handleView(index)} id='prpts' key={index}>{prompt.slice(0, 30)} {prompt.length > 30 && ".."}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No prompts found. Click the button to fetch prompts.</p>
        )
      }
    </div>
  )
}

export default App

import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react'
// import './mainApp.css'
import './style.css'
import { MdOutlineRefresh } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

function Sidebar() {
  const [prompts, setPrompts] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");


  function handleBtnClick() {
  const userPrompts = document.querySelectorAll('.whitespace-pre-wrap');
  setPrompts([]);
  userPrompts.forEach((prompt, index) => {
    const promptText = prompt.innerText;
    if (promptText) {
      setPrompts(prevPrompts => [...prevPrompts, promptText]);
    }
    else{
        console.log('Error while fetching prompts!');
    }
  });
  setPrompts(prevPrompts => [...prevPrompts.reverse()]); 
}


  useEffect(() => {
    const chatWindow = document.getElementsByClassName("w-full")[0];
    console.log(chatWindow);
    
    if (chatWindow) {
      chatWindow.style.width = isOpen ? "72%" : "100%";
    }
  }, [isOpen]);

  // useEffect(() => {
  //   const sendBtnOfChatGPT = document.querySelector('#composer-submit-button');
  //   const textInput = document.getElementById("prompt-textarea").children[0];
  //   setInput(textInput.textContent);

  //   const clickHandler = () => {
  //         handleBtnClick()
  //     }
  //   if(sendBtnOfChatGPT  && !sendBtnOfChatGPT.disabled){
  //       sendBtnOfChatGPT.addEventListener('click', clickHandler);
  //   }

  // return () => {
  //   sendBtnOfChatGPT.removeEventListener('click', clickHandler);
  // }
  // },[])

  useEffect(()=>{
    const interval = setInterval(()=>{
        const prompts = document.querySelectorAll('.whitespace-pre-wrap');

        if(prompts){
          handleBtnClick();
        }
    }, 1000);

    return () => clearInterval(interval);
  },[])

  function handleView(idx){
    const userPrompts = document.querySelectorAll('.whitespace-pre-wrap');
    userPrompts[prompts.length - idx - 1].scrollIntoView({
      behavior: 'smooth',

  })
  }

  

  return (
      isOpen ? (
        <>
        <div className={`extension-popup ${isOpen ? 'open' : 'closed'}`}>
        <div className='sticky top-0 right-0  bg-[#535bf2] mask-b-from-70% mask-b-to-100% w-[100%] flex flex-row items-center justify-between p-2 text-white'>
          <h2 className='font-bold'>Your Prompts</h2>

          <div className='flex flex-row items-center justify-between gap-2'>
            <h2 className='generalBtn' onClick={handleBtnClick}><MdOutlineRefresh /></h2> 
          <h2 className='generalBtn' onClick={()=> {setIsOpen(false); handleBtnClick();}}><IoCloseOutline /></h2> 
          </div>
        </div>

          {
            prompts.length > 0 ? (
              <div className="prompt-list">
                
                <ul>
                  {prompts.map((prompt, index) => (
                    <li onClick={()=>handleView(index)} id='prpts' key={index}>{prompt.slice(0, 60)} {prompt.length > 30 && ".."}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No prompts found. Refresh here to fetch prompt.</p>
            )
          }
        </div>
          </>
      ) : (
        <button className="open-Btn absolute right-[2vw] bottom-[10vh]" onClick={() => setIsOpen(true)}>Open Sidebar</button>
      )
  )
}

export default Sidebar

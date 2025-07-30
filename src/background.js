// Background script to handle extension events
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  // Initialize storage
  chrome.storage.local.set({ prompts: [] });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.jsx']
  });
});
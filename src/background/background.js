chrome.runtime.onInstalled.addListener(() => {
    console.log("I just installed my chrome extension.");
});

chrome.bookmarks.onCreated.addListener(() => {
    console.log("I just created a bookmark.");
});

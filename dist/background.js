/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(function () {
  console.log("I just installed my chrome extension.");
});
chrome.bookmarks.onCreated.addListener(function () {
  console.log("I just created a bookmark.");
});
/******/ })()
;
//# sourceMappingURL=background.js.map
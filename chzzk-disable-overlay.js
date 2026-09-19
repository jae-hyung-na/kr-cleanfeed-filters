// ==UserScript==
// @name         chzzk-disable-overlay
// @namespace https://github.com/jae-hyung-na/kr-cleanfeed-filters
// @version      1.0
// @match        https://chzzk.naver.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function(){
  'use strict';
  const sel = "#layout-body > section > div > main > div._contents_jwedy_31 > div._player_jwedy_23 > div._dimmed_1m5cq_39 > div";

  function removeIfExists(){
    const el = document.querySelector(sel);
    if(el) el.remove();
  }

  // 바로 시도(문서 시작 시에도 DOM이 없을 수 있으니 옵저버로 보강)
  new MutationObserver(removeIfExists).observe(document.documentElement, {childList:true, subtree:true});
})();
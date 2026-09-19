// ==UserScript==
// @name         chzzk-disable-overlay
// @namespace https://github.com/jae-hyung-na/kr-cleanfeed-filters/tree/main
// @version      1.0
// @match        https://chzzk.naver.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function(){
  'use strict';
  const sel = "#layout-body > section > div > main > div._contents_jwedy_31 > div._player_jwedy_23 > div._dimmed_1m5cq_39 > div";
  const targetTexts = [
    '고화질 시청을 위해 브라우저 확장 프로그램을 먼저 설치합니다',
    '브라우저 확장 프로그램을 먼저 설치합니다',
    '확장 프로그램 설치'
	'설치없이 일반화질 시청'
  ];

  function removeBySelector(){
    const el = document.querySelector(sel);
    if(el) el.remove();
  }

  function removeByText(){
    const els = Array.from(document.querySelectorAll('div,section,aside'));
    for (const el of els){
      const txt = (el.innerText || '').trim();
      if (!txt) continue;
      if (targetTexts.some(t => txt.includes(t))){
        const overlay = el.closest('div[class*="overlay"], div[class*="popup"], div[role="dialog"], section, aside') || el.parentElement;
        if (overlay && overlay.remove) overlay.remove();
      }
    }
  }

  const removeAll = () => { removeBySelector(); removeByText(); };

  // 빠르게 시도 + 동적 재생성 대응
  try { removeAll(); } catch(e){}
  new MutationObserver(removeAll).observe(document.documentElement, {childList:true, subtree:true});
})();
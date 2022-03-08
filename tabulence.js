// tabulence.js

var tabsInfo = document.getElementById('tabs-info');

var btnText = document.querySelector('.btn-text');
btnText.addEventListener('click', tabsInfoAsText);

var btnMd = document.querySelector('.btn-md');
btnMd.addEventListener('click', tabsInfoAsMd);

var btnLi = document.querySelector('.btn-li');
btnLi.addEventListener('click', tabsInfoAsLi);

var btnText = document.querySelector('.btn-select');
btnText.addEventListener('click', selectInfoText);


function tabsInfoAsText() {
    showTabsInfo(fmtInfoAsText);
}


function tabsInfoAsMd() {
    showTabsInfo(fmtInfoAsMd);
}


function tabsInfoAsLi() {
    showTabsInfo(fmtInfoAsLi);
}


function selectInfoText() {
    if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(tabsInfo);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}


function onError(error) {
    console.log(`ERROR: ${error}`);
}


function showTabsInfo(fmtFunc) {

    function listTabs(tabs) {
        var tabsText = "";

        for (let tab of tabs) {
            var p = document.createElement('pre');
            p.textContent = fmtFunc(tab);
            tabsInfo.appendChild(p);
        }
    }

    clearInfo();
    let qry = browser.tabs.query({currentWindow: true});
    qry.then(listTabs, onError);
}


function fmtInfoAsText(tab) {
    return `Title: ${escHtml(tab.title)}\n  URL: ${escHtml(tab.url)}`
}


function fmtInfoAsMd(tab) {
    return `[${escHtml(tab.title)}](${escHtml(tab.url)})`
}

function fmtInfoAsLi(tab) {
    return `<li><a target="_blank" href="${escHtml(tab.url)}">${escHtml(tab.title)}</a></li>`
}


function clearInfo() {
    while (tabsInfo.firstChild) {
        tabsInfo.removeChild(tabsInfo.firstChild);
    }
}


function escHtml(s) {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}


// Start with tabs as text for initial load.
tabsInfoAsText();

// ==UserScript==
// @name        Dark Feedly
// @namespace   https://feedly.com/i/
// @description Removes the sidebar and makes ticket views full width.
// @author      jbocook
// @copyright   2016
// @version     1.0.0
// @icon        https://raw.githubusercontent.com/johnbocook/HideSpiceworksAdBar/master/img/ticket.png
// @homepageURL https://github.com/johnbocook/DarkFeedly
// @supportURL  https://github.com/johnbocook/DarkFeedly/issues
// @include     *//feedly.com/i/*
// @grant       none
// ==/UserScript==


(function() {var css = [
	"#feedlyFrame {",
	"  background: #2A2B2F !important;",
    "  color: rgba( 255, 255, 255, 0.85 );",
	"}",
	"h1 {",
	"  color: #ffffff !important;",
	"}",
    "a.title, a.title:hover {",
    "  color: #F60 !important;",
    "}",
    "#sideArea {",
    "  display: none !important;",
    "}",
    "#feedlyPage {",
    "  width:100% !important;",
    "}",
    ".u4Entry {",
    "  max-width:100% !important;",
    "}",
    ".pageAction, .hercule-search {",
    "   -webkit-filter: invert(100%);",
    "}",
    "#herculePanel, h2, h3, h4, h5 {",
    "   color: #ffffff !important;",
    "}",
    "#herculePanel {",
    "   background: #272727 !important;",
    "   border: 1px solid #4E4E4E !important;",
    "}",
    ".magOverview {",
    "  background: #000000 !important;",
    "  border: 1px solid #5D5D5D !important;",
    "}",
    "#floatingBar, .floatingBar {",
    "   background: #000000 !important;",
    "}",
    ".u5Entry {",
    "   background: #000000 !important;",
    "   border: 1px solid #636363 !important",
    "}",
    ".u5Entry .visual {",
    "   border-bottom: 1px solid #717171 !important;",
    "}",
    ".floatingEntryScroller, .entryholder {",
    "   background: #000000 !important",
    "}",
    ".entryBody p, .entryBody, .entryBody h2 {",
    "  color:#ffffff !important;",
    "}",
    ".headerInfo, .headerInfo.headerInfo-article {",
    "   background-color: #444444 !important;",
    "   border: 1px solid #444444 !important;",
    "}",
    ".fx button.tertiary {",
    "   color: #000000 !important;",
    "}",
    ".entryBody a, .entryBody a:hover, .entryBody a:visited, .entryBody a:active {",
    "   color: #FFA76D !important;",
    "   border-bottom: none !important;",
    "}",
    ".entryBody a:hover {",
    " font-weight: bold !important;",
    "}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();

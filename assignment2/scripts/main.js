/**
 * Created by Leonti on 2016-06-11.
 */
/// <reference path="lib/typed/impress.d.ts" />
function init() {
    console.log("Yes!!");
    impress().init();
}
//intro title hiding
var title = document.getElementById('title');
title.addEventListener('webkitAnimationEnd', function (event) {
    title.style.display = 'none';
}, false);
//# sourceMappingURL=main.js.map
// to navigate between pages
function goto() {
    // get current page address
    var segments = window.location.href.split("/");
    var baseUrl = String(segments.slice(0,3).join("/"));
    // change to destination address
    window.location.replace(baseUrl + "/" + page);
}
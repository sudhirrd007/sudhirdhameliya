function goto(page) {
    var segments = window.location.href.split("/");
    var baseUrl = String(segments.slice(0,3).join("/"));
    window.location.replace(baseUrl + "/" + page);
}
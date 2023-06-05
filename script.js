function info() {
    pageId = "info";
    load();
    document.title = "Info | Ellie and Matthias"
}

function pictures() {
    pageId = "pictures";
    load();
    document.title = "Pictures | Ellie and Matthias"
}

function rosemary() {
    pageId = "rosemary-page";
    load();
    document.title = "Rosemary | Ellie and Matthias"
}

function load() {
    document.getElementById('home').style.display = "none";
    document.getElementById('rosemary').style.opacity = "0";
    document.getElementById(pageId).style.display = "block";
    if (pageId = "rosemary-page") {
        document.getElementById(pageId).style.animation = "load 1s, scroll-short 1s";
    } else {
        document.getElementById(pageId).style.animation = "load 1s, scroll-tall 1s";
    };
    document.getElementById(pageId).style.animationFillMode = "forwards", mozAnimationFillMode = "forwards", msAnimationFillMode = "forwards", oAnimationFillMode = "forwards";
}

function back() {
    document.getElementById('home').style.display = "";
    document.getElementById('rosemary').style.opacity = "0.7";
    document.getElementById('info').style.display = "none";
    document.getElementById('pictures').style.display = "none";
    document.getElementById('rosemary-page').style.display = "none";
}

(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
    history.pushState(null, document.title, location.pathname);

    window.addEventListener("popstate", function () {
        if (location.hash === "#!/stealingyourhistory") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                location.replace("index.html");
            }, 0);
        }
    }, false);
}(window, location));
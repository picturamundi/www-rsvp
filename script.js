function info() {
    pageId = "info";
    load();
    document.title = "Info | Ellie and Matthias"
    document.getElementById(pageId).style.animation = "load 0.5s, scroll-tall 1s";
    document.getElementById(pageId).style.animationFillMode = "forwards"; document.getElementById(pageId).style.mozAnimationFillMode = "forwards", msAnimationFillMode = "forwards", oAnimationFillMode = "forwards";
}

function pictures() {
    pageId = "pictures";
    document.getElementById('frog').style.display = "none";
    load();
    document.title = "Pictures | Ellie and Matthias"
    document.getElementById(pageId).style.animation = "load 0.5s, scroll-tall 1s";
    document.getElementById(pageId).style.animationFillMode = "forwards"; document.getElementById(pageId).style.mozAnimationFillMode = "forwards", msAnimationFillMode = "forwards", oAnimationFillMode = "forwards";
}

function rosemary() {
    pageId = "rosemary-page";
    load();
    document.title = "Rosemary | Ellie and Matthias"
    document.getElementById(pageId).style.animation = "load 0.5s, scroll-short 1s";
    document.getElementById(pageId).style.animationFillMode = "forwards"; document.getElementById(pageId).style.mozAnimationFillMode = "forwards", msAnimationFillMode = "forwards", oAnimationFillMode = "forwards";
}

function frog() {
    pageId = "frog";
    document.getElementById('pictures').style.display = "none";
    load();
    document.title = "Tree Frog| Ellie and Matthias"
    document.getElementById(pageId).style.animation = "load 0.5s";
    document.getElementById(pageId).style.animationFillMode = "forwards"; document.getElementById(pageId).style.mozAnimationFillMode = "forwards", msAnimationFillMode = "forwards", oAnimationFillMode = "forwards";
}

function load() {
    document.getElementById('home').style.display = "none";
    document.getElementById('rosemary').style.opacity = "0";
    document.getElementById(pageId).style.display = "block";
}

function back() {
    document.getElementById('home').style.display = "";
    document.getElementById('rosemary').style.opacity = "0.7";
    document.getElementById('info').style.display = "none";
    document.getElementById('pictures').style.display = "none";
    document.getElementById('rosemary-page').style.display = "none";
    document.getElementById('frog').style.display = "none";
    document.title = "Ellie and Matthias"
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
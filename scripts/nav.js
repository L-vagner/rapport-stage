const nav = document.querySelector('nav.pages');
const root = location.pathname.match(/.*(?<root>rapport-stage)/)[0];
const isLocal = location.protocol == 'file:';

let makeLink = (url, repoDiv) => root + repoDiv + url;

function makeAnchor(anchor) {
    let a = document.createElement("a");
    a.className = anchor.name;
    a.innerText = anchor.text;

    let div = '';
    if (isLocal)
        div = '/';
    else
        div = `\u005c`;
    a.href = makeLink(anchor.href, div);

    return a;
}

function Anchor(name, text, href) {
    this.name = name;
    this.text = text;
    this.href = href;

    return makeAnchor(this);
}

const pages = [
    Anchor('index', 'Page d\'introduction', 'index.html'),
    Anchor('artimbale', 'Introduction artimbale', 'artimbale.html'),
    Anchor('rapports', 'Rapport hebdomadaire', 'rapports/main.html'),
    Anchor('scripts', 'Scripts crée pour le rapport de stage', 'scripts/script.html')
]
pages.forEach(element => {
    nav.append(element);
});
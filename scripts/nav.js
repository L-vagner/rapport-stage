const ROOT = location.pathname.match(/.*(?<root>rapport-stage)/)[0];
const IsLOCAL = location.protocol == 'file:';
let nav = document.querySelector('nav.pages');


class Anchor {
    /**
     * 
     * @param {string} name Nom de l'élement dans le DOM
     * @param {string} text Text affiché sur la page
     * @param {string} href Chemin relatif depuis le répertoire racine du portfolio
     */
    constructor(name, text, href) {
        this.name = name;
        this.text = text;
        this.href = href;
    }

    /**
     * 
     * @returns {Element} L'élément <a> affiché dans la page
     */
    createElement() {
        let a = document.createElement("a");
        a.className = this.name;
        a.innerText = this.text;
        let div = this.getPathDiv();
        a.href = this.makeLink(this.href, div);
        return a;

    }


    /**
     * 
     * @returns string
     */
    getPathDiv() {
        let div = '';
        if (IsLOCAL)
            div = '/';
        else
            div = `\u005c`;
        return div;
    }


    makeLink(url, repoDiv) {
        return ROOT + repoDiv + url;
    };
}

const pages = [
    new Anchor('index', 'Page d\'introduction', 'index.html'),
    new Anchor('artimbale', 'Introduction artimbale', 'artimbale.html'),
    new Anchor('rapports', 'Rapport hebdomadaire', 'rapports/main.html'),
    new Anchor('scripts', 'Scripts crée pour le rapport de stage', 'scripts/script.html')
]
pages.forEach(object => { nav.append(object.createElement()); }
);
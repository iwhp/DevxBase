import Main = require('./Main');

var main: Main = null;

export function getMain(): Main {
    if (main === null) {
        main = new Main();
    }
    return main;
}
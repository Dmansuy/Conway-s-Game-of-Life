/* Projet - Le code du stagiaire
~ Lisez le README.md pour plus d'informations ~
*/
import gameServer from './gameServer'

const seedURL = './seeds/seed1.seed';
const updateTime = 1000;
let grid = document.getElementById('grid');
let table = "<table>";
for (let y = 0; y < 36; y++) {
    table += '<tr>';
    for (let x = 0; x < 61; x++) {
        table += "<td id=x-" + x + "-y-" + y + "></td>";
    }
    table += '</tr>'
}
table += '</table>';
grid.insertAdjacentHTML('afterbegin', table);
gameServer.onMessage = (message) => {
    const messageData = message.data;
    let obj = JSON.parse(messageData).cells;
    //let div = document.getElementById('grid');
    for (let i = 0; i < 36; i++) {
        for (let j = 0; j < 61; j++) {
            let id = "x-" + obj[i][j]['x'] + "-y-" + obj[i][j]['y'];
            if (obj[i][j]['alive'] === true) {
                //si les cellues sont vivantes
                document.getElementById(id).style.backgroundColor = "#00BFFF";
                //on les trouves via leurs id x-y et ont les color en bleue
            } else {
                document.getElementById(id).style.backgroundColor = "#000";
            }
        }
    }
};
gameServer
    .loadSeed(seedURL)
    .then((seed) => {
        /*
           Je reçois bien une seed ici !
        */
        gameServer.init(seed) // On m'a dit d'utiliser ça mais ça retourne RIEN
    })
    .catch((error) => {
        console.error(error)
    });
const interval = setInterval(() => {
    gameServer.next()
}, updateTime);

var apiUrlObj = {
    oldEnglish: "https://api.funtranslations.com/translate/oldenglish.json",
    minion: "https://api.funtranslations.com/translate/minion.json",
    yoda: "https://api.funtranslations.com/translate/yoda.json",
    pirate: "https://api.funtranslations.com/translate/pirate.json",
    valspeak: "https://api.funtranslations.com/translate/valspeak.json",
    pigLatin: "https://api.funtranslations.com/translate/pig-latin.json",
    ferbLatin: "https://api.funtranslations.com/translate/ferb-latin.json",
    dothrarki: "https://api.funtranslations.com/translate/dothraki.json",
    chef: "https://api.funtranslations.com/translate/chef.json",
    catalan: "https://api.funtranslations.com/translate/catalan.json",
    shakespeare: "https://api.funtranslations.com/translate/shakespeare.json",
    vulcan: "https://api.funtranslations.com/translate/vulcan.json"
}

var translatorMenu = document.querySelector('#translator-menu');
var inputField = document.querySelector('#input-field');
var outputField = document.querySelector('#output-field');
var btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener('click', () => {
    let userInputText = inputField.value;
    if ( userInputText ) {
        fetch( getUrl( userInputText ) )
        .then( response => response.json() )
        .then( response => {
            outputField.innerText = response.contents.translated;
        })
        }
});

function getUrl(text) {
    let apiUrl = apiUrlObj[translatorMenu.value];
    return apiUrl + '?' + 'text=' + text;
}

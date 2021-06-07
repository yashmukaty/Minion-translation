var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#translate-output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong wuth server! try again later")
}
function clickHandler(){
    var inputText = txtInput.value;

    //calling server
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

};
btnTranslate.addEventListener("click",clickHandler)

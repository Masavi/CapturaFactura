console.log(`Here's the main logic`);

function procesarArchivos(){

    // Archivos recibidos desde el input
    let inputFiles = document.getElementById("myFile");
    let txt = "";

    if ('files' in inputFiles) {
        if (inputFiles.files.length == 0) {
            txt = "Selecciona uno o más archivos.";
        } else {
            for (let i=0; i<inputFiles.files.length; i++) 
            {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = inputFiles.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (inputFiles.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + inputFiles.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("demo").innerHTML = txt;
}

var fileChooser = document.getElementById('myFile');

function parseTextAsXml(text) {
    var parser = new DOMParser(),
        xmlDom = parser.parseFromString(text, "text/xml");

    //now, extract items from xmlDom and assign to appropriate text input fields
}

function waitForTextReadComplete(reader) {
    reader.onloadend = function(event) {
        var text = event.target.result;

        parseTextAsXml(text);
    }
}

function handleFileSelection() {
    var file = fileChooser.files[0],
        reader = new FileReader();

    waitForTextReadComplete(reader);
    reader.readAsText(file);
}

fileChooser.addEventListener('change', handleFileSelection, false);
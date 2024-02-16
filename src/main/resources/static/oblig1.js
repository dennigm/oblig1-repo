let billetter  = [];

function kjøp() {
    let input = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value,
    }

    let errorAntall = 0;

    if(input.antall == "") {
        document.getElementById("errorAntall").innerHTML = "Feltet må fulles inn med et gyldig antall";
        errorAntall++
    }

    if(input.fornavn == "") {
        document.getElementById("errorFornavn").innerHTML = "Feltet må fulles inn med et gyldig fornavn";
        errorAntall++
    }

    if(input.etternavn == "") {
        document.getElementById("errorEtternavn").innerHTML = "Feltet må fulles inn med et gyldig etternavn";
        errorAntall++
    }

    if(input.telefonnr == "") {
        document.getElementById("errorTelefonnr").innerHTML = "Feltet må fulles inn med et gyldig telefonnummer";
        errorAntall++
    }

    if(input.epost == "") {
        document.getElementById("errorEpost").innerHTML = "Feltet må fulles inn med et gyldig epost";
        errorAntall++
    }


    if(errorAntall === 0){
        billetter.push(input);
        console.log(billetter)

        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";

        visBilletter();
    }
}

function  visBilletter(){
    let vis;
    let ut;
    for(let i =0;i<billetter.length;i++){
        ut += "Film "+billetter[i].film+"<br>"+
            "Antall Billetter: "+billetter[i].antall+"<br>"+
            "Navn: "+billetter[i].fornavn+" "+billetter[i].etternavn+"<br>"+
            "TelefonNr: "+billetter[i].telefonnr+"<br>"+
            "E-Post: "+billetter[i].epost+"<br>";
        document.getElementById("visBilletter").innerHTML =ut;
    }
}


function slettKunder(){
    while(billetter.length>0) {
        billetter.pop()
    }
    document.getElementById("visBilletter").innerHTML = " ";
}
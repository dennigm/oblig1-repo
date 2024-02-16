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

    const regexAntall = /[1-9]{1,25}/;
    let regexAntallCheck = regexAntall.test(input.antall);

    const regexFornavn = /[A-Å]{1,25}/;
    let regexFornavnCheck = regexFornavn.test(input.fornavn);

    const regexEtternavn = /[A-Å]{1,25}/;
    let regexEtternavnCheck = regexEtternavn.test(input.etternavn);

    const regexTelefonnr = /[0-9]{8}/;
    let regexTelefonnrCheck = regexTelefonnr.test(input.telefonnr);

    const regexEpost = /[@.]/;
    let regexEpostCheck = regexEpost.test(input.epost);

    if(regexAntallCheck === false) {
        document.getElementById("errorAntall").innerHTML = "Feltet må fylles inn med et gyldig antall";
        errorAntall++
    }
    else{
        document.getElementById("errorAntall").innerHTML = " ";
    }

    if(regexFornavnCheck === false) {
        document.getElementById("errorFornavn").innerHTML = "Feltet må fylles inn med et gyldig fornavn";
        errorAntall++
    }
    else{
        document.getElementById("errorAntall").innerHTML = " ";
    }

    if(regexEtternavnCheck === false) {
        document.getElementById("errorEtternavn").innerHTML = "Feltet må fylles inn med et gyldig etternavn";
        errorAntall++
    }
    else{
        document.getElementById("errorAntall").innerHTML = " ";
    }

    if(regexTelefonnrCheck === false) {
        document.getElementById("errorTelefonnr").innerHTML = "Feltet må fylles inn med et gyldig telefonnummer (8 siffer)";
        errorAntall++
    }
    else{
        document.getElementById("errorAntall").innerHTML = " ";
    }

    if(regexEpostCheck === false) {
        document.getElementById("errorEpost").innerHTML = "Feltet må fylles inn med en gyldig E-Post";
        errorAntall++
    }
    else{
        document.getElementById("errorAntall").innerHTML = " ";
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


function slettBestillinger(){
    while(billetter.length>0) {
        billetter.pop()
    }
    document.getElementById("visBilletter").innerHTML = " ";
}
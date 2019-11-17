//Do il benvenuto all'utente e spiego lo scopo del gioco
alert('Benvenuto! Con questo gioco simuliamo il lancio del dado....tu dovrai indovinare quale numero uscirà');
//creo una variabile attraverso un prompt dove memorizzo il numero della faccia del dado da indovinare
var numeroScelto = prompt('Inserisci un numero fra 1 e 6');
//controllo che l'utente ha inserito un input corretto
if ((isNaN(numeroScelto) || numeroScelto<1|| numeroScelto>6)) {
    alert('Numero inserito non corretto!Ricarica la pagina per ricominciare(F5-> Win, Mac->⌘r)')
}else{
    var numeroDaIndovinare = Math.floor(6 * Math.random()) + 1;
    if (numeroScelto == numeroDaIndovinare) {
        alert('Complimenti hai indovinato!!!');
    } else {
        alert('Peccato hai perso...il numero da indovinare era ' + numeroDaIndovinare);
    }

    alert('Vuoi giocare ancora?Ricarica la pagina per ricominciare(F5-> Win, Mac->⌘r)');

}

    // henter element fra HTML dokumentet inne i funksjonen
    // En funksjon som er satt opp til å bli aktivert via ein onclick på konverter-knappen i HTML

function unitConverter() {
    const myInput = document.querySelector("#my_input_id").value;
    console.log(myInput);
    const fromValue = document.querySelector("#from_unit_id").value;
    console.log(fromValue);
    const toValue = document.querySelector("#to_unit_id").value;
    console.log(toValue);
    const displayValue = document.querySelector("#display_value_id");
    console.log(displayValue);

    // Ein tom variabel som skal ta i mot resultatet som er satt opp under i if / else utrykk.
    let result;

    // Et if / else utrykk som sjekker om verdien som er gitt stemmer over ens med verdien vi ønsker.
    if 
    (fromValue === "cm" && toValue === "m")
    {
        result = myInput / 100;
    }
    else if (fromValue === "cm" && toValue === "km")
    {
        result = myInput / 100000;
    }
    else if (fromValue === "m" && toValue === "cm") 
    {
        result = myInput * 100;
    } 
    else if (fromValue === "m" && toValue ==="km")
    {
        result = myInput / 1000;
    } 
    else if (fromValue === "km" && toValue === "cm") 
    {
        result = myInput * 100000;
    } 
    else if (fromValue === "km" && toValue === "m")
    {
        result = myInput * 1000;
    } 
    else {
    }

    //Viser pop-up vindu på nettsiden viss du velger samme målenhet på fra og til

    if (fromValue === "cm" && toValue === "cm")
    {
        alert ("Du må velge forskjellig lengde enhet"); //du har valgt samme lengde enhet
    }
    
    if (fromValue === "m" && toValue === "m")
    {
        alert ("Du må velge forskjellig lengde enhet");
    }

    if (fromValue === "km" && toValue === "km")
    {
        alert ("Du må velge forskjellig lengde enhet");
    }

    // Resultat fra if / else utrykket som vises på nettsiden.
    displayValue.textContent = result.toFixed(3);
}

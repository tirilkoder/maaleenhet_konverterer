// A function that gets activated when clicked on via onclick on the convert button in HTML

function unitConverter() {
    const myInput = document.querySelector("#my_input_id").value;
    console.log(myInput);
    const fromValue = document.querySelector("#from_unit_id").value;
    console.log(fromValue);
    const toValue = document.querySelector("#to_unit_id").value;
    console.log(toValue);
    const displayValue = document.querySelector("#display_value_id");
    console.log(displayValue);

    let result;

    if (fromValue === "cm" && toValue === "m") {
        result = myInput * 10;
    }

    displayValue.textContent = result;
}


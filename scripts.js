let data_input = "";
const input = document.querySelector('input');

// Accessing the buttons
document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener("click", (output) => {
        const value = output.target.innerHTML;

        switch (value) {
            case "=":
                try {
                    data_input = eval(data_input);
                    //Evaluating the string as a math expression
                    input.value = data_input;
                } catch (error) {
                    input.value = "Error";
                    // Handles invalid input
                }
                break;
            case "C":
                data_input = "";
                input.value = data_input;
                break;
            case "bac":
                data_input = data_input.slice(0, -1);
                // Removes the last character
                input.value = data_input;
                break;
            case "00":
            case "000":
                data_input += value;
                // Appends zeroes
                input.value = data_input;
                break;
            case "%":
                data_input = parseFloat((data_input) / 100).toString();
                input.value = data_input;
                break;
            default:
                data_input += value;
                // Append the clicked button value
                input.value = data_input;
        }
    });
});
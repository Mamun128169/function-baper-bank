const getInputValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputFieldStringValue = inputField.value;
    const inputFieldValue = parseFloat(inputFieldStringValue);
    inputField.value = "";
    return inputFieldValue;
}

const getElementValueById = (elementId) => {
    const element = document.getElementById(elementId);
    const elementStringValue = element.innerText;
    const elementValue = parseFloat(elementStringValue);
    return elementValue;
}

const setElementValueById = (elementId, value) => {
    const element = document.getElementById(elementId); 
    element.innerText = value;
}

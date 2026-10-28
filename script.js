const resultField = document.getElementById('result');

// स्क्रीन पर वैल्यू जोड़ने के लिए
function appendValue(val) {
    resultField.value += val;
}

// स्क्रीन साफ करने के लिए (C बटन)
function clearScreen() {
    resultField.value = '';
}

// आखिरी अक्षर हटाने के लिए (DEL बटन)
function deleteChar() {
    resultField.value = resultField.value.slice(0, -1);
}

// कैलकुलेशन करने के लिए (= बटन)
function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
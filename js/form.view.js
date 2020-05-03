const formViewController = (function(){

    const DOMstrings = {
        inputUserName:  "#input__userName",
        inputPhone: "#input__phone",
        inputEmail: "#input__email",
        inputTypeProduct: "#input__typeProduct",
        form: "#form-enter"
    };   
        
    // Возращение элементов формы
    function getInputForm() {
        return{
            name: document.querySelector(DOMstrings.inputUserName).value,
            phone: document.querySelector(DOMstrings.inputPhone).value,
            email: document.querySelector(DOMstrings.inputEmail).value,
            type: document.querySelector(DOMstrings.inputTypeProduct).value
        }
    }
    // Очистка полей
    function clearFields() {
        let inputUserName = document.querySelector(DOMstrings.inputUserName);
        let inputPhone = document.querySelector(DOMstrings.inputPhone);
        let inputEmail = document.querySelector(DOMstrings.inputEmail);

        inputUserName.value = "";
        inputPhone.value = "";
        inputEmail.value = "";
    }


    return {
        getInputForm: getInputForm,
        clearFields: clearFields,
        getDomstrings: function(){
            return DOMstrings
        }
    }

})();
const formController = (function(crmCtrl, uiFormCtrl) {

    const setupEventListeners = function(){
        const DOM = uiFormCtrl.getDomstrings();
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddItemForm);
    }   

    function ctrlAddItemForm(e){

        e.preventDefault();

        const input = uiFormCtrl.getInputForm();        

        let id = modelController.createId();

        let date = modelController.creatDate();
        
        crmCtrl.addItem(id, date, input.name, input.phone, input.email, input.type);          
        modelController.saveToLocalStorage();

        alert("Спасибо!Ваша заявка принята!");

        formViewController.clearFields();

    }

    return {
        init: function(){
            console.log("Started");
            setupEventListeners();
        }
    }





})(modelController, formViewController);

formController.init();
const tableController = (function(crmCtrl, uiTableCtrl) {


    function ctrlAddDateRequests(){
        let formDataJson = crmCtrl.loadLocalStorage();
        uiTableCtrl.renderRowRequest(formDataJson);
    }


    return{
        init: function() {
            // setupEventListeners()
            ctrlAddDateRequests()
            console.log("Started")
        }
    }


})(modelController, tableViewController);
tableController.init();
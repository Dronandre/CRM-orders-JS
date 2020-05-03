const modelController = (function(){

    const Request = function (id, date, name, email, phone, type){
        this.id = id;
        this.date = date;        
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.type = type;           
    }
    // Создание массива под объекты
    let data = {
        requests: []
     };
    // Вызов проверки localstorage
    checkLocalStorage();

    // Создание ID
    function createId(){
        let id = data.requests.length + 1;
        if (data.requests.length) {
            id = data.requests[data.requests.length - 1].id + 1;
          } else {
            id = data.requests.length + 1;
          }
        return id;
    }    
     
    // обработка формата даты
    function creatDate(){
        var date = new Date().toLocaleDateString();
        return date;
    }

    // Добавление элемента в массив
    function addItem(id, date, name, email, phone, type) {           
        const newItem = new Request(id, date, name, phone, email, type);
        data.requests.push(newItem);
        return newItem;
    }

    // Добавление в localstorage
    function saveToLocalStorage(){
        const formData = modelController.getData()
        localStorage.setItem("formData", JSON.stringify(formData)); } 
    // Загрузка из localstorage
    function loadLocalStorage(){
        if(localStorage.getItem("formData")){
            return formJson = JSON.parse(localStorage.getItem("formData"));
        }
    }
    // Проверка localstorage
    function checkLocalStorage(){
        if (localStorage.getItem("formData")) {
            return loadLocalStorage("formData")
        } else {
            return {requests: []}
        }
    }

    


    return {
        addItem: addItem,
        saveToLocalStorage: saveToLocalStorage,
        createId: createId,
        creatDate:creatDate,
        loadLocalStorage: loadLocalStorage,
        getData: function(){
            return data           
        }
    }






})();
const tableViewController = (function(){

    const DOMstrings = {
        rowRequest: "#table-body",
        inputType: "#inputGroupSelect01",
        statusList: ".status-list a",
        statusListActive: ".status-list .active"
    }

    function getDomstrings (){
        return {            
            inputType: document.querySelector(DOMstrings.inputType),
            statusList: document.querySelectorAll(DOMstrings.statusList),
            statusListActive: document.querySelector(DOMstrings.statusListActive)
        }
    }

    const statusType = {
        new: ['badge-danger', 'Новый'],
        working: ['badge-warning', 'В работе'],
        closed: ['badge-success', 'Завершенный'],
        removed: ['badge-success', 'Завершенный']
    }

    function renderRowRequest(data){
        data.requests.forEach(item => {
                const newHtml =  `<tr>
                <th scope="row">${item.id}</th>
                    <td>${item.date}</td>
                    <td>${item.type}</td>
                    <td>${item.phone}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                <td>
                    <div class=" badge badge-pill ${statusType.new[0]} ">
                        ${statusType.new[1]}
                    </div>
                </td>
                <td>
                    <a href="03-crm-edit-bid.html">Редактировать</a>
                </td>
            </tr>`;                        
            const containerElement = document.querySelector(DOMstrings.rowRequest);
            containerElement.insertAdjacentHTML("beforeend", newHtml);
        });       
    }


    return {    
        renderRowRequest: renderRowRequest,    
        getDomstrings: function(){
            return DOMstrings
        }
    }


})();
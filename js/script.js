var newPage = {

    createHeader: function (tagName, tagText, tagClass) {
        var header = document.createElement(tagName);
        header.className = tagClass;
        header.innerHTML = tagText;
        document.body.appendChild(header);
    },

    createForm: function (tagName, tagText) {
        var form = document.createElement(tagName);
        form.innerHTML = tagText;
        form.setAttribute('action','#');
        form.setAttribute('id', 'myForm');
        document.body.appendChild(form);
    },

    createList: function (tagName, tagClass) {
        var listCreate = document.createElement(tagName);
        listCreate.className = tagClass;
        document.getElementById('myForm').appendChild(listCreate);
    },


    createQuestion: function (tagName) {
        var listItem = document.createElement(tagName);
        listItem.innerHTML = 'Вопрос #'+ i + '<br>';
        document.querySelector('ol').appendChild(listItem);
    },

    createAnswer (tagName) {
        var answer = document.createElement('input');
        answer.setAttribute('type','checkbox');
        var answerLabel = document.createElement(tagName);
        answerLabel.innerHTML = answer.outerHTML + 'Вариант ответа №'+ j;
        console.log (answerLabel.textContent);
        var counter = document.querySelectorAll('li');
        for (var i = 0; i < counter.length; i++) {
            counter[i].appendChild(answerLabel);
        };
    },

    createButton: function (tagText, tagClass) {
        var button = document.createElement('button');
        button.setAttribute('type','submit');
        button.className = tagClass;
        button.innerHTML = tagText;
        document.getElementById('myForm').appendChild(button);
    }
};

newPage.createHeader('h1', 'Тест по программированию', 'text-center');
newPage.createForm('form', '', '');
newPage.createList('ol','wrapper');

for (i = 1; i < 4; i++) {
    newPage.createQuestion('li','','');
    for (j = 1; j < 4; j++) {
        newPage.createAnswer('label','','');
    };   
};

newPage.createButton('Проверить мои результаты', 'btn btn-info center-block');
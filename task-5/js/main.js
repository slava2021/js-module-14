const btn = document.querySelector('.button');
const gallery = document.querySelector('.gallery');

const myForm = document.getElementById('myForm');



// Проверяем введено число или нет
function isNumber(value) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return true
    } else {
        return false
    }
}

// Проверяем входит ли число в заданный интервал
Number.prototype.isBetween = function (a, b) {
    return a <= this && this <= b;
};

// Функция вывода ошибок по коду
function errMessages(errorType) {
    const errObj = {
        error1: '<font color="red">Номер страницы вне диапазона от 1 до 10</font>',
        error2: '<font color="red">Лимит вне диапазона от 1 до 10</font>',
        error3: '<font color="red">Номер страницы и лимит вне диапазона от 1 до 10</font>'

    }


    if (errorType == 'error1') {
        gallery.innerHTML = errObj.error1;
    }

    if (errorType == 'error2') {
        gallery.innerHTML = errObj.error2;
    }

    if (errorType == 'error3') {
        gallery.innerHTML = errObj.error3;
    }
}

// Функция проверки данных принятых из формы
function checkInputData(inpName, value) {

    if (isNumber(value)) {
        if ((+value).isBetween(1, 10)) {
            return true
        } else {

            return false;
        }
    } else {
        errMessages(inpName);
        return false;
    }
}

// Создаем пустой объект со свойствами
let InpDataObj = {
    pages: {
        result: "",
        value: ""

    },
    limit: {
        result: "",
        value: ""
    }
}

// Получаем значения введеные в Input или выводим сообщение об ошибке
function getValues() {
    const data = new FormData(myForm)
    // console.log(data)

    for (let [name, value] of data) {
        if (name == "pageNum") {
            InpDataObj.pages.result = checkInputData(name, value)
            InpDataObj.pages.value = value
        }
        if (name == "limitData") {
            InpDataObj.limit.result = checkInputData(name, value)
            InpDataObj.limit.value = value
        }
    }

    if (InpDataObj.pages.result === false && InpDataObj.limit.result === false) {
        return errMessages('error3');
    } else if (InpDataObj.pages.result === false && InpDataObj.limit.result === true) {
        return errMessages('error1')
    } else if (InpDataObj.pages.result === true && InpDataObj.limit.result === false) {
        return errMessages('error2')
    }

}

function createImages(objData) {
    //console.log("data", data);
    objData.forEach(function (data, index) {
        gallery.innerHTML += `<img src="${data.url}">`;
    });
}

function useLocalStorage() {
    const myJSON = localStorage.getItem('myJSON');

    if (myJSON) {
        const data = JSON.parse(myJSON);
        // Если данные в localStorage есть - просто выводим их
        console.log('localStorage JSON', JSON.parse(myJSON));
        createImages(data);
    }
}

// Вешаем событие на кнопку отправки формы
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.removeItem('myJSON');

    getValues();

    if (InpDataObj.pages.result === true && InpDataObj.limit.result === true) {
        useRequest();
    }

});

document.addEventListener('DOMContentLoaded', (event) => {
    // localStorage.removeItem('myJSON');
    useLocalStorage();

});
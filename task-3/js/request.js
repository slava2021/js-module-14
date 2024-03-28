function useRequest(callback) {
    const inpData = +document.querySelector('.input-data').value;

    //console.log(inpData);
    if (inpData < 1 || inpData > 10) {
        const alertMsg = "число вне диапазона от 1 до 10"
        return resultNode.innerText = alertMsg;
    } else {

        const reqUrl = `https://jsonplaceholder.typicode.com/photos?_limit=${inpData}`;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', reqUrl, true);

        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                if (callback) {

                    let msg = xhr.status == 200 ? "Ответ от сервера получен" : "";
                    resultNode.innerText = msg;
                    setTimeout(callback, 1000, result);
                }
            }
        };

        xhr.onerror = function () {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };

        xhr.send();
    }
};
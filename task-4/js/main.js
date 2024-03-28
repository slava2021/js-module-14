const btn = document.querySelector('.button')
const gallery = document.querySelector('.gallery');


function isNumber(value) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return true
    } else {
        return false
    }
}

Number.prototype.isBetween = function (a, b) {
    return a <= this && this <= b;
};


btn.addEventListener('click', () => {
    const firstValue = document.querySelector('.f-value').value;
    const secondValue = document.querySelector('.s-value').value;

    if (isNumber(firstValue) && isNumber(secondValue)) {

        //Не понимаю почему в данной функции приходиться повторно преобразовывать значение в число, ставить + 
        //Не могли бы вы это прокомментировать?
        const range1 = (+firstValue).isBetween(100, 300);
        const range2 = (+secondValue).isBetween(100, 300);

        if (range1 && range2) {

            const reqUrl = `https://dummyimage.com/${firstValue}x${secondValue}/`

            useRequest(reqUrl)

        } else {
            return gallery.innerHTML = '<font color=red>Одно из чисел вне диапазона от 100 до 300</font>';
        }
    } else {
        return gallery.innerHTML = '<font color=red>Одно из чисел вне диапазона от 100 до 300</font>';
    }
});
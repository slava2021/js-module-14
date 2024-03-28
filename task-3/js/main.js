// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.gallery');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.input-btn');

/**
  * Функция обработки полученного результата
  * apiData - объект с результатом запроса
  */
function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);

    apiData.forEach(item => {
        const cardBlock = `
                                   <div class="card">
                                       <img
                                       src="${item.thumbnailUrl}"
                                       class="card-image"
                                       />
                                       <p>${item.title}</p>
                                   </div>
                                   `;
        cards += cardBlock;
    });

    // console.log('end cards', cards);

    resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    useRequest(displayResult);
})
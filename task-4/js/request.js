
function useRequest(url) {
    fetch(url)
        .then(response => response)
        .then(data => {
            gallery.innerHTML = `<img src="${data.url}">`
        })
        .catch(() => {
            gallery.innerHTML = '<font color=red>Произошла ошибка</a>'
        });
}
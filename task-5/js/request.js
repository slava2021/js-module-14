function useRequest() {

    const params = new URLSearchParams({
        _page: `${InpDataObj.pages.value}`,
        _limit: `${InpDataObj.limit.value}`
    })

    let setParam = params.toString()

    // console.log(params.toString())
    fetch(`https://jsonplaceholder.typicode.com/photos?${setParam}`)
        .then((response) => {
            const result = response.json();
            //console.log('result', result);
            return result;
        })
        .then(data => {
            gallery.innerHTML = "";
            // console.log(data);
            localStorage.setItem('myJSON', JSON.stringify(data));
            createImages(data);
        })
        .catch(() => {
            gallery.innerHTML = '<font color=red>Произошла ошибка</a>'
        });
}
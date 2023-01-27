$(window).scroll(() => {
    scrollToEndOfPage();
});

const scrollToEndOfPage = () => {
    const docElement = document.documentElement;
    if (docElement.scrollHeight - (docElement.scrollTop + docElement.clientHeight) === 0) {
        getData();
    } else {
        return;
    }
}

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(response => response.json())
        .then(json => {
            json.forEach(user => {
                $('body').append(`<p>User ID: ${user.id}</p>`);
                $('body').append(`<p>User Name: ${user.name}</p>`);
                $('body').append(`<p>User URL: ${user.website}<br>--------</p>`);
            });
        })
        .catch(error =>console.error(error))
        .finally(console.log('done'));
}
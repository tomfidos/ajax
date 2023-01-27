$('#button').click(() => {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php', (data) => {
        console.log(data);
        const ulElement = $('<ul></ul>').css({
            'list-style': 'none',
            'padding-left': '0',
        });
        $('#button').after(ulElement);
        for (let key in data) {
            const liElement =
                $('<li></li>')
                    .css('padding-bottom', '1em')
                    .text(`${key}: ${data[key]}`);
            ulElement.append(liElement);
        }
    });
});

exports.getCookies = function getCookies(request, response) {
    console.log('Был вызван контроллер для получения печенек');

    const cookies = [
        {
            name: 'Kreker',
            size: 25
        },
        {
            name: 'Песочное',
            size: 45
        }
    ]

    response.status(200).json(cookies);
}
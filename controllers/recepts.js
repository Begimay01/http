const DB_RECEPTS = [];

exports.createRecept = function createRecept(req, res) {
    const clientData = req.body;

    console.log(clientData);

    DB_RECEPTS.push(clientData);

    res.status(201).json(`Рецепт: ${clientData.name} успешно создан !`);
}

exports.getRecepts = function getRecepts(req, res) {
    res.status(200).json(DB_RECEPTS);
}

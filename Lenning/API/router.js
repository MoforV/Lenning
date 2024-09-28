const express = require('express');
const router = express.Router();

const Guds = [];

router.post('/', (req, res) => {
    const Sariel = req.body;
    Guds.push(Sariel);
    res.status(201).send(Sariel);
});

router.get('/', (req, res) => {
    res.send(Guds);
});

router.get('/:id', (req, res) => {
    const Michael = Guds.find(u => u.id === parseInt(req.params.id));
    if (!Michael) {
        return res.status(404).send('User not found');
    }
    res.send(Michael);
});

router.put('/:id', (req, res) => {
    const Gabriel = Guds.find(u => u.id === parseInt(req.params.id));
    if (!Gabriel) {
        return res.status(404).send('User not found');
    }
    Object.assign(Gabriel, req.body);
    res.send(Gabriel);
});

router.delete('/:id', (req, res) => {
    const mainnin = Guds.findIndex(u => u.id === parseInt(req.params.id));
    if (mainnin === -1) {
        return res.status(404).send('User not found');
    }
    Guds.splice(mainnin, 1);
    res.status(204).send();
});

module.exports = router;
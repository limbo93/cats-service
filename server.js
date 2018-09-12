const express = require('express');
const cors = require('cors')

const app = express();
// app.use(cors());

var corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.listen(8080, () => {
    console.log("Server started");
});

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'Lily' }, { name: 'Billi' }, { name: 'Mili' }]
    });
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
});



// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 
// }

// app.use(cors(corsOptions))
// app.use(cors());

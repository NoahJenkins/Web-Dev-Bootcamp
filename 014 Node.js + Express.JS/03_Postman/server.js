const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('sending root');
    });

    app.get('/profile', (req, res) => {
        res.send('getting profile');
    });

    app.post('/profile', (req, res) => {
        console.log(req.body);
        const users = [
            {name: 'John', age: 25},
            {name: 'Jane', age: 22}
        ];
        res.send(users);
    });


app.listen(3000);
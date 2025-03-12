const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    });

    app.get('/profile', (req, res) => {
        const users = [
            {name: 'John', age: 25},
            {name: 'Jane', age: 22}
        ];
        res.send(users);
    });

// app.use((req, res, next) => {
//     console.log('<h1>Hello World</h1>');
//     next();
//     res.send('<h1>Hello World</h1>');
// })

app.listen(3000);
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((express.static(__dirname + '/public')));

app.get('/', (req, res) => {
    console.log(req.query) // http://localhost:3000/?name=John&age=25 => { name: 'John', age: '25' }, this is the query string
    //req.body //
    console.log(req.header); // http://localhost:3000/ => { host: 'localhost:3000', connection: 'keep-alive', 'upgrade-insecure-requests': '1', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-US,en;q=0.9' }
    console.log(req.params); 
    res.send('getting root');
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
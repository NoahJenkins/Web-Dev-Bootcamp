// const http = require('http');

// const server = http.createServer ((req, res) => {
//     console.log("headers", req.headers);
//     console.log("method", req.method);
//     console.log("url", req.url);

//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1>');
//     console.log('Server is running');
// });

// server.listen(3000);

const http = require('http');

const server = http.createServer ((req, res) => {
    console.log("headers", req.headers);
    console.log("method", req.method);
    console.log("url", req.url);
    const users = [
        {name: 'John', age: 25},
        {name: 'Jane', age: 22}
    ];
    
    res.setHeader('Content-Type', 'text/html');
    res.end(JSON.stringify(users));
});

server.listen(3000);
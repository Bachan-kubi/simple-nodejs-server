const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());


app.get('/users', (req, res)=>{
    res.send(users);
});

app.post('/users', (req, res)=>{
    console.log('post api called');
    // data will come from req, data will reflect by res
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(req.body);
    res.send(user);
});

const users = [
    {"id": 1, "name": "mitu", "email": 'mitu@gmail.com'},
    {"id": 2, "name": "litu", "email": 'litu@gmail.com'},
    {"id": 3, "name": "jitu", "email": 'jitu@gmail.com'}
];

app.get('/', (req, res)=>{
    res.send('Simple node server')
});
app.listen(port, ()=>{
    console.log(`Simple node is running on ${port}`)
});
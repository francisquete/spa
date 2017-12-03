var router = require('./router');

var app = router(3412);

var operadoras = [{
        nome: 'oi',
        codigo: 14,
        categoria: 'celular',
        preco: 0.50
    },
    {
        nome: 'tim',
        codigo: 41,
        categoria: 'celular',
        preco: 0.99
    },
    {
        nome: 'vivo',
        codigo: 15,
        categoria: 'celular',
        preco: 0.99
    },
    {
        nome: 'claro',
        codigo: 11,
        categoria: 'celular',
        preco: 0.75
    },
    {
        nome: 'embratel',
        codigo: 21,
        categoria: 'fixo',
        preco: 0.25
    },
    {
        nome: 'telefonica',
        codigo: 15,
        categoria: 'fixo',
        preco: 0.15
    }
];

var contatos = [{
        id: 1,
        nome: 'Bruno',
        telefone: '33020631',
        data: new Date(),
        operadora: operadoras[0]
    },
    {
        id: 2,
        nome: 'Joyce',
        telefone: '39167256',
        data: new Date(),
        operadora: operadoras[1]
    },
    {
        id: 3,
        nome: 'Luana',
        telefone: '39003935',
        data: new Date(),
        operadora: operadoras[2]
    }
];


app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    var contato = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
});

app.post('/file', function (req, res) {
    console.log(req.body);
    res.end();
});

app.options('/file', function (req, res) {
    res.end();
});

app.options('/contatos', function (req, res) {
    res.end();
});
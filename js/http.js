var router = require('./router');

var app = router(3412);

var operadoras = [
    {nome: 'oi', codigo: 14, categoria: 'celular', preco: 2},
    {nome: 'tim', codigo: 41, categoria: 'celular', preco: 1},
    {nome: 'vivo', codigo: 15, categoria: 'celular', preco: 2}
];

var contatos = [
    {id: 1, nome:'Bruno', telefone:'33020631', data: new Date(), operadora:operadoras[0]},
    {id: 2, nome:'Ana', telefone:'39167256', data: new Date(), operadora: operadoras[1]},
    {id: 3, nome:'Luana', telefone:'39343935', data: new Date(), operadora: operadoras[2]}
];

app.get('/operadoras', function(req, res){
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function(req, res){
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function(req, res){
    res.end();
});
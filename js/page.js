var http = require('http');

http.createServer(function(req, res){
    res.write(
        '<html>'+
            '<head>'+
                '<title>OLa mundo</title>'+
            '</head>'+
            '<body>'+
                '<h1>OLa loosers</h1>'+
            '</body>'+
        '</html>'
    );
    res.end();
}).listen(3412);
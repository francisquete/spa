angular.module("listaTelefonica").provider("tokenGenerator", function () {
    var _length = 7;
    this.getLength = function () {
        return _length;
    };
    this.setLength = function (length) {
        _length = length;
    };
    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while (serial.length < 7) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});
module.exports = {
  eq : function (v1, v2) {
    return v1 === v2;
  },
  ne : function (v1, v2) {
    return v1 !== v2;
  },
  currency : function (v1) {
    return '$' +  v1.toFixed(2);
  },
  foo: function () {
    return 'foo';
  }
};
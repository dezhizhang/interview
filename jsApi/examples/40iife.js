(function () {
  var a = 1;
  function test() {
    console.log(++a);
  }
  window.$ = function () {
    return {
      test,
    };
  };
})();

$().test();

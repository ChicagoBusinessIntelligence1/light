(function () {
'use strict';

angular.module('#module#')
  .factory('#name#', function () {

    var meaningOfLife = 42;

    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
})();

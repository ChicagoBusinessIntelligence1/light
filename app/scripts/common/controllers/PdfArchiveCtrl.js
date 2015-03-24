(function () {
    'use strict';

    angular.module('common')
        .controller('PdfArchiveCtrl', function () {
            var archive = this;
            archive.data = [];
            for (var i = 1; i < 13; i++) {
                archive.data.push(i);
            }
        });
})();


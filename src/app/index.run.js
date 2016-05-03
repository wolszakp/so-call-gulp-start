(function() {
  'use strict';

  angular
    .module('gulpStart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

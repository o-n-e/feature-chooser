'use strict';

/* jasmine specs for controllers go here */

describe('FeatureCtrl', function(){

  beforeEach(module('featureChooserApp'));

  it('should create "availibleFeatures" model with 6 features', inject(function($controller) {
    var scope = {},
        ctrl = $controller('FeatureCtrl', {$scope:scope});

    expect(scope.availibleFeatures.length).toBe(6);
  }));

});

'use strict';

/* jasmine specs for controllers go here */
describe ('FeatureChooser controllers', function(){

  describe('FeatureCtrl', function(){
    var scope, ctrl;

    beforeEach(module('featureChooserApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('FeatureCtrl', {$scope:scope});
    }));

    it('should create "availibleFeatures" model with 6 features', inject(function($controller) {
      expect(scope.availibleFeatures.length).toBe(6);
    }));

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('id');
    });

  });
});

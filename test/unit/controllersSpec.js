'use strict';

/* jasmine specs for controllers go here */
describe ('FeatureChooser controllers', function(){

  describe('FeatureCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('featureChooserApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/simple-features.json').
      respond([{name: 'size'}, {name: 'calcDate'}]);

      scope = $rootScope.$new();
      ctrl = $controller('FeatureCtrl', {$scope: scope});
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.availibleFeatures).toEqual([{name: 'size'},
        {name: 'calcDate'}]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('id');
    });

  });
});

/*
 beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
 $httpBackend = _$httpBackend_;
 $httpBackend.expectGET('phones/phones.json').
 respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

 scope = $rootScope.$new();
 ctrl = $controller('PhoneListCtrl', {$scope: scope});
 }));


 it('should create "phones" model with 2 phones fetched from xhr', function() {
 expect(scope.phones).toBeUndefined();
 $httpBackend.flush();

 expect(scope.phones).toEqual([{name: 'Nexus S'},
 {name: 'Motorola DROID'}]);
 });


 it('should set the default value of orderProp model', function() {
 expect(scope.orderProp).toBe('age');
 });
 });
 });
 */

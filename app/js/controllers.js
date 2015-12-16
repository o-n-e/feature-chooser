'use strict';

/* Controllers */

var featureChooserApp = angular.module('featureChooserApp', []);

featureChooserApp.controller('FeatureCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/simple-features.json').success(function(data) {
        $scope.availibleFeatures = data;
    });

    $scope.orderProp = 'id';

}]);
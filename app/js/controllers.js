'use strict';

/* Controllers */

var featureChooserApp = angular.module('featureChooserApp', []);

featureChooserApp.controller('FeatureCtrl', function($scope) {
    $scope.availibleFeatures = [
        {
            'id': 1,
            'name': 'date',
            'displayName': 'Date',
            'category': 'feature'
        },
        {
            'id': 2,
            'name': 'colour',
            'displayName': 'Colour',
            'category': 'feature'
        },
        {
            'id': 3,
            'name': 'calc_date',
            'displayName': 'Calculation Date',
            'category': 'feature'
        },
        {
            'id': 4,
            'name': 'featureX',
            'displayName': 'Feature X',
            'category': 'feature'
        },
        {
            'id': 5,
            'name': 'price',
            'displayName': 'Price',
            'category': 'data'
        },
        {
            'id': 6,
            'name': 'featureY',
            'displayName': 'Feature Y',
            'category': 'feature'
        }
    ];

    $scope.orderProp = 'id';
});
'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('featureChooser', function() {

  describe('Feature list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the available features list as a user types into the search box', function() {

      var allOptions = element.all(by.options('feature as feature.displayName for feature in availibleFeatures | filter:query | orderBy:orderProp'));
      expect(allOptions.count()).toEqual(10);

      var firstOption = allOptions.first();
      expect(firstOption.getText()).toEqual('Calculation Date');

      var query = element(by.model('query'));
      query.sendKeys('p');

      expect(allOptions.count()).toEqual(1);
      expect(firstOption.getText()).toEqual('Price');

    });

    it('should be possible to control feature order via the drop down select box', function() {

      var allOptions = element.all(by.options('feature as feature.displayName for feature in availibleFeatures | filter:query | orderBy:orderProp'));

      var query = element(by.model('query'));
      query.sendKeys('s')

      var firstOption = allOptions.first();
      expect(firstOption.getText()).toEqual('Symbol');

      element(by.model('orderProp')).element(by.css('option[value="displayName"]')).click();

      firstOption = allOptions.first();
      expect(firstOption.getText()).toEqual('Size');

    });

  });

});

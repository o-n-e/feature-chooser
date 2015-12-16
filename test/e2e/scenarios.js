'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('featureChooser', function() {

  describe('Feature list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should filter the available features list as a user types into the search box', function() {

      var availableFeaturesList = element.all(by.repeater('feature in availibleFeatures'));
      var query = element(by.model('query'));

      expect(availableFeaturesList.count()).toBe(10);

      query.sendKeys('col');
      expect(availableFeaturesList.count()).toBe(2);

      query.clear();
      query.sendKeys('date');
      expect(availableFeaturesList.count()).toBe(2);
    });

    it('should be possible to control feature order via the drop down select box', function() {

      var featureNameColumn = element.all(by.repeater('feature in availibleFeatures').column('displayName'));
      var query = element(by.model('query'));

      function getNames() {
        return featureNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('s'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Symbol",
        "Size"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="displayName"]')).click();

      expect(getNames()).toEqual([
        "Size",
        "Symbol"
      ]);

    });

  });

});

'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('featureChooser', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should filter the available features list as a user types into the search box', function() {

    var availableFeaturesList = element.all(by.repeater('feature in availibleFeatures'));
    var query = element(by.model('query'));

    expect(availableFeaturesList.count()).toBe(6);

    query.sendKeys('col');
    expect(availableFeaturesList.count()).toBe(1);

    query.clear();
    query.sendKeys('date');
    expect(availableFeaturesList.count()).toBe(2);
  });

});

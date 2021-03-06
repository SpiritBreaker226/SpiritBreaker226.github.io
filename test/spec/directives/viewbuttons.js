'use strict';

describe('Directive: viewButtons', function () {

  // load the directive's module
  beforeEach(module('spiritBreaker226GitHubPageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<view-buttons></view-buttons>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the viewButtons directive');
  }));
});

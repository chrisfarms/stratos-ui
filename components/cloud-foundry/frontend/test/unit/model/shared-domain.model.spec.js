(function () {
  'use strict';

  describe('cloud-foundry shared domain model', function () {
    var $httpBackend, sharedDomainModel;
    beforeEach(module('templates'));
    beforeEach(module('console-app'));
    beforeEach(inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      var modelManager = $injector.get('modelManager');
      sharedDomainModel = modelManager.retrieve('cloud-foundry.model.shared-domain');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('listAllSharedDomains', function () {
      var result;
      var ListAllSharedDomains = mock.cloudFoundryAPI.SharedDomains.ListAllSharedDomains();
      $httpBackend.whenGET(ListAllSharedDomains.url).respond(200, ListAllSharedDomains.response['200'].body);
      $httpBackend.expectGET(ListAllSharedDomains.url);
      sharedDomainModel.listAllSharedDomains('guid', {}).then(function (resources) {
        result = resources;
      });
      $httpBackend.flush();
      expect(result).toBeDefined();
      expect(result.length).toBe(2);
    });
  });

})();

/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.ServiceBindings', new ServiceBindingsApi($http));
  }

  function ServiceBindingsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(ServiceBindingsApi.prototype, {

   /*
    * Create a Service Binding
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_bindings/create_a_service_binding.html
    */
    CreateServiceBinding: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_bindings';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    },

   /*
    * Delete a Particular Service Binding
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_bindings/delete_a_particular_service_binding.html
    */
    DeleteServiceBinding: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_bindings/' + guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    },

   /*
    * List all Service Bindings
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_bindings/list_all_service_bindings.html
    */
    ListAllServiceBindings: function (params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_bindings';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    },

   /*
    * Retrieve a Particular Service Binding
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_bindings/retrieve_a_particular_service_binding.html
    */
    RetrieveServiceBinding: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_bindings/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        config[option] = httpConfigOptions[option]
      }
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();

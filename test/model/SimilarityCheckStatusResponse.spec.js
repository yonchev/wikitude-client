/**
 * Wikitude Studio API
 * The Wikitude Studio API is a RESTful API which is used to * organize and manipulate projects and its targets * create wtc/wto files which can be used to create trackers in the Wikitude SDK with the JavaScript API * generate/publish a cloud archive to the cloud recognition service (image targets only)  Download API clients: * [`OpenAPI 3.0`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-openapi.zip) * [`JavaScript`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-javascript.zip) * [`Python`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-python.zip) * [`PHP`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-php.zip) * [`TypeScript (NodeJS)`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-typescript-node.zip) * [`Java`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-java.zip) * [`Ruby`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-ruby.zip)  This technical reference formally explains various API endpoints. Visit the [`Studio API documentation`](https://www.wikitude.com/external/doc/documentation/studio/) for a more general description. 
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.0.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WikitudeStudioApiClient);
  }
}(this, function(expect, WikitudeStudioApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SimilarityCheckStatusResponse', function() {
    it('should create an instance of SimilarityCheckStatusResponse', function() {
      // uncomment below and update the code to test SimilarityCheckStatusResponse
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be.a(WikitudeStudioApiClient.SimilarityCheckStatusResponse);
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property inputParams (base name: "inputParams")', function() {
      // uncomment below and update the code to test the property inputParams
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property estimatedLatency (base name: "estimatedLatency")', function() {
      // uncomment below and update the code to test the property estimatedLatency
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new WikitudeStudioApiClient.SimilarityCheckStatusResponse();
      //expect(instance).to.be();
    });

  });

}));
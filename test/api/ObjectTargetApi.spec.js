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
    instance = new WikitudeStudioApiClient.ObjectTargetApi();
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

  describe('ObjectTargetApi', function() {
    describe('createObjectTargetFromImages', function() {
      it('should call createObjectTargetFromImages successfully', function(done) {
        //uncomment below and update the code to test createObjectTargetFromImages
        //instance.createObjectTargetFromImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createObjectTargetFromWTO', function() {
      it('should call createObjectTargetFromWTO successfully', function(done) {
        //uncomment below and update the code to test createObjectTargetFromWTO
        //instance.createObjectTargetFromWTO(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteObjectTarget', function() {
      it('should call deleteObjectTarget successfully', function(done) {
        //uncomment below and update the code to test deleteObjectTarget
        //instance.deleteObjectTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('extendObjectTarget', function() {
      it('should call extendObjectTarget successfully', function(done) {
        //uncomment below and update the code to test extendObjectTarget
        //instance.extendObjectTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectTarget', function() {
      it('should call getObjectTarget successfully', function(done) {
        //uncomment below and update the code to test getObjectTarget
        //instance.getObjectTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectTargetStatus', function() {
      it('should call getObjectTargetStatus successfully', function(done) {
        //uncomment below and update the code to test getObjectTargetStatus
        //instance.getObjectTargetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectTargets', function() {
      it('should call getObjectTargets successfully', function(done) {
        //uncomment below and update the code to test getObjectTargets
        //instance.getObjectTargets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameObjectTarget', function() {
      it('should call renameObjectTarget successfully', function(done) {
        //uncomment below and update the code to test renameObjectTarget
        //instance.renameObjectTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

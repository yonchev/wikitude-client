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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WikitudeStudioApiClient) {
      root.WikitudeStudioApiClient = {};
    }
    root.WikitudeStudioApiClient.ProjectApi = factory(root.WikitudeStudioApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Project service.
   * @module api/ProjectApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ProjectApi. 
   * @alias module:api/ProjectApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get all projects
     * Request all projects from your account.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Set 0 to start with first entry, set e.g. to 2 to skip first 2 entries. Default value: 0
     * @param {Number} opts.limit Use positive value to define the amount of entries to return [1, 1000] per page. Default value: 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    this.getProjectsWithHttpInfo = function(xVersion, xToken, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling getProjects");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling getProjects");
      }


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Version': xVersion,
        'X-Token': xToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/projects', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all projects
     * Request all projects from your account.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Set 0 to start with first entry, set e.g. to 2 to skip first 2 entries. Default value: 0
     * @param {Number} opts.limit Use positive value to define the amount of entries to return [1, 1000] per page. Default value: 1000
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    this.getProjects = function(xVersion, xToken, opts) {
      return this.getProjectsWithHttpInfo(xVersion, xToken, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

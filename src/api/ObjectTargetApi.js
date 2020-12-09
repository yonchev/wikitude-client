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
    define(['ApiClient', 'model/CreateObjectTargetImagesBody', 'model/CreateObjectTargetWTOBody', 'model/ExtendObjectTargetBody', 'model/ObjectTargetJobResponse', 'model/ObjectTargetResponse', 'model/RenameObjectTargetBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateObjectTargetImagesBody'), require('../model/CreateObjectTargetWTOBody'), require('../model/ExtendObjectTargetBody'), require('../model/ObjectTargetJobResponse'), require('../model/ObjectTargetResponse'), require('../model/RenameObjectTargetBody'));
  } else {
    // Browser globals (root is window)
    if (!root.WikitudeStudioApiClient) {
      root.WikitudeStudioApiClient = {};
    }
    root.WikitudeStudioApiClient.ObjectTargetApi = factory(root.WikitudeStudioApiClient.ApiClient, root.WikitudeStudioApiClient.CreateObjectTargetImagesBody, root.WikitudeStudioApiClient.CreateObjectTargetWTOBody, root.WikitudeStudioApiClient.ExtendObjectTargetBody, root.WikitudeStudioApiClient.ObjectTargetJobResponse, root.WikitudeStudioApiClient.ObjectTargetResponse, root.WikitudeStudioApiClient.RenameObjectTargetBody);
  }
}(this, function(ApiClient, CreateObjectTargetImagesBody, CreateObjectTargetWTOBody, ExtendObjectTargetBody, ObjectTargetJobResponse, ObjectTargetResponse, RenameObjectTargetBody) {
  'use strict';

  /**
   * ObjectTarget service.
   * @module api/ObjectTargetApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ObjectTargetApi. 
   * @alias module:api/ObjectTargetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create Object Target from Images
     * Create a new Object Target in an Object Target Collection from at least two Image files.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {module:model/CreateObjectTargetImagesBody} createObjectTargetImagesBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectTargetJobResponse} and HTTP response
     */
    this.createObjectTargetFromImagesWithHttpInfo = function(xVersion, xToken, contentType, tcId, createObjectTargetImagesBody) {
      var postBody = createObjectTargetImagesBody;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling createObjectTargetFromImages");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling createObjectTargetFromImages");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling createObjectTargetFromImages");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling createObjectTargetFromImages");
      }

      // verify the required parameter 'createObjectTargetImagesBody' is set
      if (createObjectTargetImagesBody === undefined || createObjectTargetImagesBody === null) {
        throw new Error("Missing the required parameter 'createObjectTargetImagesBody' when calling createObjectTargetFromImages");
      }


      var pathParams = {
        'tcId': tcId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Version': xVersion,
        'X-Token': xToken,
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectTargetJobResponse;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create Object Target from Images
     * Create a new Object Target in an Object Target Collection from at least two Image files.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {module:model/CreateObjectTargetImagesBody} createObjectTargetImagesBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectTargetJobResponse}
     */
    this.createObjectTargetFromImages = function(xVersion, xToken, contentType, tcId, createObjectTargetImagesBody) {
      return this.createObjectTargetFromImagesWithHttpInfo(xVersion, xToken, contentType, tcId, createObjectTargetImagesBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Object Target from WTO
     * Create a new Object Target in an Object Target Collection from a WTO file.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {module:model/CreateObjectTargetWTOBody} createObjectTargetWTOBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectTargetJobResponse} and HTTP response
     */
    this.createObjectTargetFromWTOWithHttpInfo = function(xVersion, xToken, contentType, tcId, createObjectTargetWTOBody) {
      var postBody = createObjectTargetWTOBody;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling createObjectTargetFromWTO");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling createObjectTargetFromWTO");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling createObjectTargetFromWTO");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling createObjectTargetFromWTO");
      }

      // verify the required parameter 'createObjectTargetWTOBody' is set
      if (createObjectTargetWTOBody === undefined || createObjectTargetWTOBody === null) {
        throw new Error("Missing the required parameter 'createObjectTargetWTOBody' when calling createObjectTargetFromWTO");
      }


      var pathParams = {
        'tcId': tcId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Version': xVersion,
        'X-Token': xToken,
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectTargetJobResponse;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target/wto', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create Object Target from WTO
     * Create a new Object Target in an Object Target Collection from a WTO file.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {module:model/CreateObjectTargetWTOBody} createObjectTargetWTOBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectTargetJobResponse}
     */
    this.createObjectTargetFromWTO = function(xVersion, xToken, contentType, tcId, createObjectTargetWTOBody) {
      return this.createObjectTargetFromWTOWithHttpInfo(xVersion, xToken, contentType, tcId, createObjectTargetWTOBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Object Target
     * Delete a particular Object Target from your Object Target Collection.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteObjectTargetWithHttpInfo = function(xVersion, xToken, tcId, targetId) {
      var postBody = null;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling deleteObjectTarget");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling deleteObjectTarget");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling deleteObjectTarget");
      }

      // verify the required parameter 'targetId' is set
      if (targetId === undefined || targetId === null) {
        throw new Error("Missing the required parameter 'targetId' when calling deleteObjectTarget");
      }


      var pathParams = {
        'tcId': tcId,
        'targetId': targetId
      };
      var queryParams = {
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target/{targetId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Object Target
     * Delete a particular Object Target from your Object Target Collection.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteObjectTarget = function(xVersion, xToken, tcId, targetId) {
      return this.deleteObjectTargetWithHttpInfo(xVersion, xToken, tcId, targetId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Extend Object Target
     * Add source images to an existing target.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @param {module:model/ExtendObjectTargetBody} extendObjectTargetBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectTargetJobResponse} and HTTP response
     */
    this.extendObjectTargetWithHttpInfo = function(xVersion, xToken, contentType, tcId, targetId, extendObjectTargetBody) {
      var postBody = extendObjectTargetBody;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling extendObjectTarget");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling extendObjectTarget");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling extendObjectTarget");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling extendObjectTarget");
      }

      // verify the required parameter 'targetId' is set
      if (targetId === undefined || targetId === null) {
        throw new Error("Missing the required parameter 'targetId' when calling extendObjectTarget");
      }

      // verify the required parameter 'extendObjectTargetBody' is set
      if (extendObjectTargetBody === undefined || extendObjectTargetBody === null) {
        throw new Error("Missing the required parameter 'extendObjectTargetBody' when calling extendObjectTarget");
      }


      var pathParams = {
        'tcId': tcId,
        'targetId': targetId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Version': xVersion,
        'X-Token': xToken,
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectTargetJobResponse;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target/{targetId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Extend Object Target
     * Add source images to an existing target.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @param {module:model/ExtendObjectTargetBody} extendObjectTargetBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectTargetJobResponse}
     */
    this.extendObjectTarget = function(xVersion, xToken, contentType, tcId, targetId, extendObjectTargetBody) {
      return this.extendObjectTargetWithHttpInfo(xVersion, xToken, contentType, tcId, targetId, extendObjectTargetBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Object Target
     * Request a specific Object Targets from your account.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectTargetResponse} and HTTP response
     */
    this.getObjectTargetWithHttpInfo = function(xVersion, xToken, tcId, targetId) {
      var postBody = null;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling getObjectTarget");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling getObjectTarget");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling getObjectTarget");
      }

      // verify the required parameter 'targetId' is set
      if (targetId === undefined || targetId === null) {
        throw new Error("Missing the required parameter 'targetId' when calling getObjectTarget");
      }


      var pathParams = {
        'tcId': tcId,
        'targetId': targetId
      };
      var queryParams = {
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
      var returnType = ObjectTargetResponse;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target/{targetId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Object Target
     * Request a specific Object Targets from your account.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectTargetResponse}
     */
    this.getObjectTarget = function(xVersion, xToken, tcId, targetId) {
      return this.getObjectTargetWithHttpInfo(xVersion, xToken, tcId, targetId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Status - Object Target Generation Information
     * Retrieves information status about a particular scheduled Object Target creation.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} generationId Unique identifier of the asynchronous job created by a generation endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectTargetJobResponse} and HTTP response
     */
    this.getObjectTargetStatusWithHttpInfo = function(xVersion, xToken, tcId, generationId) {
      var postBody = null;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling getObjectTargetStatus");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling getObjectTargetStatus");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling getObjectTargetStatus");
      }

      // verify the required parameter 'generationId' is set
      if (generationId === undefined || generationId === null) {
        throw new Error("Missing the required parameter 'generationId' when calling getObjectTargetStatus");
      }


      var pathParams = {
        'tcId': tcId,
        'generationId': generationId
      };
      var queryParams = {
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
      var returnType = ObjectTargetJobResponse;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/generation/targets/{generationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Status - Object Target Generation Information
     * Retrieves information status about a particular scheduled Object Target creation.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} generationId Unique identifier of the asynchronous job created by a generation endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectTargetJobResponse}
     */
    this.getObjectTargetStatus = function(xVersion, xToken, tcId, generationId) {
      return this.getObjectTargetStatusWithHttpInfo(xVersion, xToken, tcId, generationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Object Targets
     * Request all Object Targets in a Target Collection.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ObjectTargetResponse>} and HTTP response
     */
    this.getObjectTargetsWithHttpInfo = function(xVersion, xToken, tcId) {
      var postBody = null;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling getObjectTargets");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling getObjectTargets");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling getObjectTargets");
      }


      var pathParams = {
        'tcId': tcId
      };
      var queryParams = {
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
      var returnType = [ObjectTargetResponse];

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Object Targets
     * Request all Object Targets in a Target Collection.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ObjectTargetResponse>}
     */
    this.getObjectTargets = function(xVersion, xToken, tcId) {
      return this.getObjectTargetsWithHttpInfo(xVersion, xToken, tcId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rename Object Target
     * Rename an existing target.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @param {module:model/RenameObjectTargetBody} renameObjectTargetBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectTargetJobResponse} and HTTP response
     */
    this.renameObjectTargetWithHttpInfo = function(xVersion, xToken, contentType, tcId, targetId, renameObjectTargetBody) {
      var postBody = renameObjectTargetBody;

      // verify the required parameter 'xVersion' is set
      if (xVersion === undefined || xVersion === null) {
        throw new Error("Missing the required parameter 'xVersion' when calling renameObjectTarget");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling renameObjectTarget");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling renameObjectTarget");
      }

      // verify the required parameter 'tcId' is set
      if (tcId === undefined || tcId === null) {
        throw new Error("Missing the required parameter 'tcId' when calling renameObjectTarget");
      }

      // verify the required parameter 'targetId' is set
      if (targetId === undefined || targetId === null) {
        throw new Error("Missing the required parameter 'targetId' when calling renameObjectTarget");
      }

      // verify the required parameter 'renameObjectTargetBody' is set
      if (renameObjectTargetBody === undefined || renameObjectTargetBody === null) {
        throw new Error("Missing the required parameter 'renameObjectTargetBody' when calling renameObjectTarget");
      }


      var pathParams = {
        'tcId': tcId,
        'targetId': targetId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Version': xVersion,
        'X-Token': xToken,
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectTargetJobResponse;

      return this.apiClient.callApi(
        '/objectTargetCollection/{tcId}/target/{targetId}/name', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Rename Object Target
     * Rename an existing target.
     * @param {String} xVersion The version of the API to be used. Must be set to 3.
     * @param {String} xToken Your Manager Token.
     * @param {String} contentType The Content Type of the body. Must be set to application/json.
     * @param {String} tcId Unique identifier of the Object Target Collection.
     * @param {String} targetId Unique identifier of the Object Target.
     * @param {module:model/RenameObjectTargetBody} renameObjectTargetBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectTargetJobResponse}
     */
    this.renameObjectTarget = function(xVersion, xToken, contentType, tcId, targetId, renameObjectTargetBody) {
      return this.renameObjectTargetWithHttpInfo(xVersion, xToken, contentType, tcId, targetId, renameObjectTargetBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
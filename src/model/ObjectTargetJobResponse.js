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
    root.WikitudeStudioApiClient.ObjectTargetJobResponse = factory(root.WikitudeStudioApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ObjectTargetJobResponse model module.
   * @module model/ObjectTargetJobResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ObjectTargetJobResponse</code>.
   * @alias module:model/ObjectTargetJobResponse
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ObjectTargetJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectTargetJobResponse} obj Optional instance to populate.
   * @return {module:model/ObjectTargetJobResponse} The populated <code>ObjectTargetJobResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('estimatedStart')) {
        obj['estimatedStart'] = ApiClient.convertToType(data['estimatedStart'], 'Number');
      }
      if (data.hasOwnProperty('estimatedEnd')) {
        obj['estimatedEnd'] = ApiClient.convertToType(data['estimatedEnd'], 'Number');
      }
      if (data.hasOwnProperty('estimatedLatency')) {
        obj['estimatedLatency'] = ApiClient.convertToType(data['estimatedLatency'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('generationId')) {
        obj['generationId'] = ApiClient.convertToType(data['generationId'], 'String');
      }
      if (data.hasOwnProperty('inputParams')) {
        obj['inputParams'] = ApiClient.convertToType(data['inputParams'], Object);
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], Object);
      }
    }
    return obj;
  }

  /**
   * Timestamp of the job creation.
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Estimation of when the job will start processing.
   * @member {Number} estimatedStart
   */
  exports.prototype['estimatedStart'] = undefined;
  /**
   * Estimation of when the job will approximately be finished.
   * @member {Number} estimatedEnd
   */
  exports.prototype['estimatedEnd'] = undefined;
  /**
   * Recommendation of when to first poll the corresponding status endpoint in milliseconds.
   * @member {Number} estimatedLatency
   */
  exports.prototype['estimatedLatency'] = undefined;
  /**
   * The status of the asynchronous job.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The asynchronous job id.
   * @member {String} generationId
   */
  exports.prototype['generationId'] = undefined;
  /**
   * Object containing job relevant parameters.
   * @member {Object} inputParams
   */
  exports.prototype['inputParams'] = undefined;
  /**
   * Object containing job relevant results.
   * @member {Object} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));



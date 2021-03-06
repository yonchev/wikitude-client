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
    root.WikitudeStudioApiClient.ImageTargetCollectionResponseCloudArchive = factory(root.WikitudeStudioApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageTargetCollectionResponseCloudArchive model module.
   * @module model/ImageTargetCollectionResponseCloudArchive
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ImageTargetCollectionResponseCloudArchive</code>.
   * @alias module:model/ImageTargetCollectionResponseCloudArchive
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ImageTargetCollectionResponseCloudArchive</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageTargetCollectionResponseCloudArchive} obj Optional instance to populate.
   * @return {module:model/ImageTargetCollectionResponseCloudArchive} The populated <code>ImageTargetCollectionResponseCloudArchive</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('validityKeyDate')) {
        obj['validityKeyDate'] = ApiClient.convertToType(data['validityKeyDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Activates an Image Target Collection for cloud recognition. All containing Image Targets are added to the quota. If the value is \"false\", the cloud archive can not be generated and an error is returned by the cloud archive generation endpoint. Default: true 
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Version of the latest cloud archive.
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * Timestamp of the latest cloud archive generation.
   * @member {String} validityKeyDate
   */
  exports.prototype['validityKeyDate'] = undefined;



  return exports;
}));



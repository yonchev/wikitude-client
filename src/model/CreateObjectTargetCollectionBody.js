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
    root.WikitudeStudioApiClient.CreateObjectTargetCollectionBody = factory(root.WikitudeStudioApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateObjectTargetCollectionBody model module.
   * @module model/CreateObjectTargetCollectionBody
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CreateObjectTargetCollectionBody</code>.
   * @alias module:model/CreateObjectTargetCollectionBody
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateObjectTargetCollectionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateObjectTargetCollectionBody} obj Optional instance to populate.
   * @return {module:model/CreateObjectTargetCollectionBody} The populated <code>CreateObjectTargetCollectionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sdkVersion')) {
        obj['sdkVersion'] = ApiClient.convertToType(data['sdkVersion'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
    }
    return obj;
  }

  /**
   * Required - Name of the Target Collection.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Optional - Version of the Wikitude SDK the WTO resource will be generated for. Must be set to \"8.0\" since versions \"7.0\", \"7.1\", \"7.2\" are not supported anymore. Default: 8.0 
   * @member {String} sdkVersion
   */
  exports.prototype['sdkVersion'] = undefined;
  /**
   * Optional - Arbitrary JSON data that should be stored together with the Target Collection.
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


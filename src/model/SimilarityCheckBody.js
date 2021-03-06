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
    define(['ApiClient', 'model/SimilarityCheckBodyImages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimilarityCheckBodyImages'));
  } else {
    // Browser globals (root is window)
    if (!root.WikitudeStudioApiClient) {
      root.WikitudeStudioApiClient = {};
    }
    root.WikitudeStudioApiClient.SimilarityCheckBody = factory(root.WikitudeStudioApiClient.ApiClient, root.WikitudeStudioApiClient.SimilarityCheckBodyImages);
  }
}(this, function(ApiClient, SimilarityCheckBodyImages) {
  'use strict';




  /**
   * The SimilarityCheckBody model module.
   * @module model/SimilarityCheckBody
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SimilarityCheckBody</code>.
   * @alias module:model/SimilarityCheckBody
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SimilarityCheckBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimilarityCheckBody} obj Optional instance to populate.
   * @return {module:model/SimilarityCheckBody} The populated <code>SimilarityCheckBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [SimilarityCheckBodyImages]);
      }
    }
    return obj;
  }

  /**
   * Up to 10 images hosted via https. Supported file formats are JPEG and non transparent PNG. An item in the array must be a JSON Object and contain an \"imageUrl\" attribute. 
   * @member {Array.<module:model/SimilarityCheckBodyImages>} images
   */
  exports.prototype['images'] = undefined;



  return exports;
}));



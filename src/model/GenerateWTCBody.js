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
    root.WikitudeStudioApiClient.GenerateWTCBody = factory(root.WikitudeStudioApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GenerateWTCBody model module.
   * @module model/GenerateWTCBody
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GenerateWTCBody</code>.
   * @alias module:model/GenerateWTCBody
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GenerateWTCBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenerateWTCBody} obj Optional instance to populate.
   * @return {module:model/GenerateWTCBody} The populated <code>GenerateWTCBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sdkVersion')) {
        obj['sdkVersion'] = ApiClient.convertToType(data['sdkVersion'], 'String');
      }
      if (data.hasOwnProperty('eMail')) {
        obj['eMail'] = ApiClient.convertToType(data['eMail'], 'String');
      }
    }
    return obj;
  }

  /**
   * Optional - Version of the Wikitude SDK the generated WTC file will be used for. Valid values \"4.1\", \"5.0\", \"5.1\", \"5.2\", \"5.3\", \"6.0\", \"6.1\", \"6.2\", \"7.0\", \"7.1\", \"7.2\", \"8.0\", \"8.5\". Default: 6.2 
   * @member {String} sdkVersion
   */
  exports.prototype['sdkVersion'] = undefined;
  /**
   * Optional - The e-mail address, the notification is sent after the generation of the resource is finished. If non is specified, retrieve the generated resource from the corresponding generation status endpoint. 
   * @member {String} eMail
   */
  exports.prototype['eMail'] = undefined;



  return exports;
}));



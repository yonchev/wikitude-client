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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CloudArchiveGenerationResponse', 'model/CloudArchiveGenerationResponseInputParams', 'model/CreateImageTargetCollectionBody', 'model/CreateImageTargetCollectionBodyCloudArchive', 'model/CreateImageTargetsBody', 'model/CreateImageTargetsResponse', 'model/CreateImageTargetsResponseInputParams', 'model/CreateImageTargetsResponseInputParamsTargets', 'model/CreateObjectTargetCollectionBody', 'model/CreateObjectTargetImagesBody', 'model/CreateObjectTargetImagesBodyResource', 'model/CreateObjectTargetWTOBody', 'model/CreateObjectTargetWTOBodyResource', 'model/ExtendObjectTargetBody', 'model/GenerateHeatmapBody', 'model/GenerateHeatmapResponse', 'model/GenerateHeatmapResponseInputParams', 'model/GenerateHeatmapStatusResponse', 'model/GenerateHeatmapStatusResponsePayload', 'model/GenerateWTCBody', 'model/GenerateWTCStatusResponse', 'model/GenerateWTOBody', 'model/GetAccountInfoResponse', 'model/GetAccountInfoResponseStorage', 'model/ImageTargetCollectionResponse', 'model/ImageTargetCollectionResponseCloudArchive', 'model/ImageTargetCollectionResponseWtc', 'model/ImageTargetResponse', 'model/ObjectTargetCollectionJobResponse', 'model/ObjectTargetCollectionResponse', 'model/ObjectTargetCollectionResponseWto', 'model/ObjectTargetJobResponse', 'model/ObjectTargetResponse', 'model/ObjectTargetResponseResource', 'model/ObjectTargetResponseWtoFile', 'model/RenameObjectTargetBody', 'model/SimilarityCheckBody', 'model/SimilarityCheckBodyImages', 'model/SimilarityCheckResponse', 'model/SimilarityCheckResponseInputParams', 'model/SimilarityCheckStatusResponse', 'model/SimilarityCheckStatusResponseCandidates', 'model/SimilarityCheckStatusResponseInputParams', 'model/SimilarityCheckStatusResponseInputParamsImages', 'model/SimilarityCheckStatusResponsePayload', 'model/UpdateImageTargetBody', 'model/UpdateImageTargetCollectionBody', 'model/UpdateObjectTargetCollectionBody', 'api/AccountApi', 'api/HeatmapApi', 'api/ImageTargetApi', 'api/ImageTargetCollectionApi', 'api/ObjectTargetApi', 'api/ObjectTargetCollectionApi', 'api/ProjectApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CloudArchiveGenerationResponse'), require('./model/CloudArchiveGenerationResponseInputParams'), require('./model/CreateImageTargetCollectionBody'), require('./model/CreateImageTargetCollectionBodyCloudArchive'), require('./model/CreateImageTargetsBody'), require('./model/CreateImageTargetsResponse'), require('./model/CreateImageTargetsResponseInputParams'), require('./model/CreateImageTargetsResponseInputParamsTargets'), require('./model/CreateObjectTargetCollectionBody'), require('./model/CreateObjectTargetImagesBody'), require('./model/CreateObjectTargetImagesBodyResource'), require('./model/CreateObjectTargetWTOBody'), require('./model/CreateObjectTargetWTOBodyResource'), require('./model/ExtendObjectTargetBody'), require('./model/GenerateHeatmapBody'), require('./model/GenerateHeatmapResponse'), require('./model/GenerateHeatmapResponseInputParams'), require('./model/GenerateHeatmapStatusResponse'), require('./model/GenerateHeatmapStatusResponsePayload'), require('./model/GenerateWTCBody'), require('./model/GenerateWTCStatusResponse'), require('./model/GenerateWTOBody'), require('./model/GetAccountInfoResponse'), require('./model/GetAccountInfoResponseStorage'), require('./model/ImageTargetCollectionResponse'), require('./model/ImageTargetCollectionResponseCloudArchive'), require('./model/ImageTargetCollectionResponseWtc'), require('./model/ImageTargetResponse'), require('./model/ObjectTargetCollectionJobResponse'), require('./model/ObjectTargetCollectionResponse'), require('./model/ObjectTargetCollectionResponseWto'), require('./model/ObjectTargetJobResponse'), require('./model/ObjectTargetResponse'), require('./model/ObjectTargetResponseResource'), require('./model/ObjectTargetResponseWtoFile'), require('./model/RenameObjectTargetBody'), require('./model/SimilarityCheckBody'), require('./model/SimilarityCheckBodyImages'), require('./model/SimilarityCheckResponse'), require('./model/SimilarityCheckResponseInputParams'), require('./model/SimilarityCheckStatusResponse'), require('./model/SimilarityCheckStatusResponseCandidates'), require('./model/SimilarityCheckStatusResponseInputParams'), require('./model/SimilarityCheckStatusResponseInputParamsImages'), require('./model/SimilarityCheckStatusResponsePayload'), require('./model/UpdateImageTargetBody'), require('./model/UpdateImageTargetCollectionBody'), require('./model/UpdateObjectTargetCollectionBody'), require('./api/AccountApi'), require('./api/HeatmapApi'), require('./api/ImageTargetApi'), require('./api/ImageTargetCollectionApi'), require('./api/ObjectTargetApi'), require('./api/ObjectTargetCollectionApi'), require('./api/ProjectApi'));
  }
}(function(ApiClient, CloudArchiveGenerationResponse, CloudArchiveGenerationResponseInputParams, CreateImageTargetCollectionBody, CreateImageTargetCollectionBodyCloudArchive, CreateImageTargetsBody, CreateImageTargetsResponse, CreateImageTargetsResponseInputParams, CreateImageTargetsResponseInputParamsTargets, CreateObjectTargetCollectionBody, CreateObjectTargetImagesBody, CreateObjectTargetImagesBodyResource, CreateObjectTargetWTOBody, CreateObjectTargetWTOBodyResource, ExtendObjectTargetBody, GenerateHeatmapBody, GenerateHeatmapResponse, GenerateHeatmapResponseInputParams, GenerateHeatmapStatusResponse, GenerateHeatmapStatusResponsePayload, GenerateWTCBody, GenerateWTCStatusResponse, GenerateWTOBody, GetAccountInfoResponse, GetAccountInfoResponseStorage, ImageTargetCollectionResponse, ImageTargetCollectionResponseCloudArchive, ImageTargetCollectionResponseWtc, ImageTargetResponse, ObjectTargetCollectionJobResponse, ObjectTargetCollectionResponse, ObjectTargetCollectionResponseWto, ObjectTargetJobResponse, ObjectTargetResponse, ObjectTargetResponseResource, ObjectTargetResponseWtoFile, RenameObjectTargetBody, SimilarityCheckBody, SimilarityCheckBodyImages, SimilarityCheckResponse, SimilarityCheckResponseInputParams, SimilarityCheckStatusResponse, SimilarityCheckStatusResponseCandidates, SimilarityCheckStatusResponseInputParams, SimilarityCheckStatusResponseInputParamsImages, SimilarityCheckStatusResponsePayload, UpdateImageTargetBody, UpdateImageTargetCollectionBody, UpdateObjectTargetCollectionBody, AccountApi, HeatmapApi, ImageTargetApi, ImageTargetCollectionApi, ObjectTargetApi, ObjectTargetCollectionApi, ProjectApi) {
  'use strict';

  /**
   * The_Wikitude_Studio_API_is_a_RESTful_API_which_is_used_to_organize_and_manipulate_projects_and_its_targets_create_wtcwto_files_which_can_be_used_to_create_trackers_in_the_Wikitude_SDK_with_the_JavaScript_API_generatepublish_a_cloud_archive_to_the_cloud_recognition_service__image_targets_onlyDownload_API_clients__OpenAPI_3_0_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_openapi_zip__JavaScript_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_javascript_zip__Python_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_python_zip__PHP_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_php_zip__TypeScript__NodeJS_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_typescript_node_zip__Java_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_java_zip__Ruby_httpswww_wikitude_comexternaldocdocumentationstudio_apiclientswikitude_studio_api_client_ruby_zipThis_technical_reference_formally_explains_various_API_endpoints_Visit_the__Studio_API_documentation_httpswww_wikitude_comexternaldocdocumentationstudio_for_a_more_general_description_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WikitudeStudioApiClient = require('index'); // See note below*.
   * var xxxSvc = new WikitudeStudioApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WikitudeStudioApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WikitudeStudioApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WikitudeStudioApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CloudArchiveGenerationResponse model constructor.
     * @property {module:model/CloudArchiveGenerationResponse}
     */
    CloudArchiveGenerationResponse: CloudArchiveGenerationResponse,
    /**
     * The CloudArchiveGenerationResponseInputParams model constructor.
     * @property {module:model/CloudArchiveGenerationResponseInputParams}
     */
    CloudArchiveGenerationResponseInputParams: CloudArchiveGenerationResponseInputParams,
    /**
     * The CreateImageTargetCollectionBody model constructor.
     * @property {module:model/CreateImageTargetCollectionBody}
     */
    CreateImageTargetCollectionBody: CreateImageTargetCollectionBody,
    /**
     * The CreateImageTargetCollectionBodyCloudArchive model constructor.
     * @property {module:model/CreateImageTargetCollectionBodyCloudArchive}
     */
    CreateImageTargetCollectionBodyCloudArchive: CreateImageTargetCollectionBodyCloudArchive,
    /**
     * The CreateImageTargetsBody model constructor.
     * @property {module:model/CreateImageTargetsBody}
     */
    CreateImageTargetsBody: CreateImageTargetsBody,
    /**
     * The CreateImageTargetsResponse model constructor.
     * @property {module:model/CreateImageTargetsResponse}
     */
    CreateImageTargetsResponse: CreateImageTargetsResponse,
    /**
     * The CreateImageTargetsResponseInputParams model constructor.
     * @property {module:model/CreateImageTargetsResponseInputParams}
     */
    CreateImageTargetsResponseInputParams: CreateImageTargetsResponseInputParams,
    /**
     * The CreateImageTargetsResponseInputParamsTargets model constructor.
     * @property {module:model/CreateImageTargetsResponseInputParamsTargets}
     */
    CreateImageTargetsResponseInputParamsTargets: CreateImageTargetsResponseInputParamsTargets,
    /**
     * The CreateObjectTargetCollectionBody model constructor.
     * @property {module:model/CreateObjectTargetCollectionBody}
     */
    CreateObjectTargetCollectionBody: CreateObjectTargetCollectionBody,
    /**
     * The CreateObjectTargetImagesBody model constructor.
     * @property {module:model/CreateObjectTargetImagesBody}
     */
    CreateObjectTargetImagesBody: CreateObjectTargetImagesBody,
    /**
     * The CreateObjectTargetImagesBodyResource model constructor.
     * @property {module:model/CreateObjectTargetImagesBodyResource}
     */
    CreateObjectTargetImagesBodyResource: CreateObjectTargetImagesBodyResource,
    /**
     * The CreateObjectTargetWTOBody model constructor.
     * @property {module:model/CreateObjectTargetWTOBody}
     */
    CreateObjectTargetWTOBody: CreateObjectTargetWTOBody,
    /**
     * The CreateObjectTargetWTOBodyResource model constructor.
     * @property {module:model/CreateObjectTargetWTOBodyResource}
     */
    CreateObjectTargetWTOBodyResource: CreateObjectTargetWTOBodyResource,
    /**
     * The ExtendObjectTargetBody model constructor.
     * @property {module:model/ExtendObjectTargetBody}
     */
    ExtendObjectTargetBody: ExtendObjectTargetBody,
    /**
     * The GenerateHeatmapBody model constructor.
     * @property {module:model/GenerateHeatmapBody}
     */
    GenerateHeatmapBody: GenerateHeatmapBody,
    /**
     * The GenerateHeatmapResponse model constructor.
     * @property {module:model/GenerateHeatmapResponse}
     */
    GenerateHeatmapResponse: GenerateHeatmapResponse,
    /**
     * The GenerateHeatmapResponseInputParams model constructor.
     * @property {module:model/GenerateHeatmapResponseInputParams}
     */
    GenerateHeatmapResponseInputParams: GenerateHeatmapResponseInputParams,
    /**
     * The GenerateHeatmapStatusResponse model constructor.
     * @property {module:model/GenerateHeatmapStatusResponse}
     */
    GenerateHeatmapStatusResponse: GenerateHeatmapStatusResponse,
    /**
     * The GenerateHeatmapStatusResponsePayload model constructor.
     * @property {module:model/GenerateHeatmapStatusResponsePayload}
     */
    GenerateHeatmapStatusResponsePayload: GenerateHeatmapStatusResponsePayload,
    /**
     * The GenerateWTCBody model constructor.
     * @property {module:model/GenerateWTCBody}
     */
    GenerateWTCBody: GenerateWTCBody,
    /**
     * The GenerateWTCStatusResponse model constructor.
     * @property {module:model/GenerateWTCStatusResponse}
     */
    GenerateWTCStatusResponse: GenerateWTCStatusResponse,
    /**
     * The GenerateWTOBody model constructor.
     * @property {module:model/GenerateWTOBody}
     */
    GenerateWTOBody: GenerateWTOBody,
    /**
     * The GetAccountInfoResponse model constructor.
     * @property {module:model/GetAccountInfoResponse}
     */
    GetAccountInfoResponse: GetAccountInfoResponse,
    /**
     * The GetAccountInfoResponseStorage model constructor.
     * @property {module:model/GetAccountInfoResponseStorage}
     */
    GetAccountInfoResponseStorage: GetAccountInfoResponseStorage,
    /**
     * The ImageTargetCollectionResponse model constructor.
     * @property {module:model/ImageTargetCollectionResponse}
     */
    ImageTargetCollectionResponse: ImageTargetCollectionResponse,
    /**
     * The ImageTargetCollectionResponseCloudArchive model constructor.
     * @property {module:model/ImageTargetCollectionResponseCloudArchive}
     */
    ImageTargetCollectionResponseCloudArchive: ImageTargetCollectionResponseCloudArchive,
    /**
     * The ImageTargetCollectionResponseWtc model constructor.
     * @property {module:model/ImageTargetCollectionResponseWtc}
     */
    ImageTargetCollectionResponseWtc: ImageTargetCollectionResponseWtc,
    /**
     * The ImageTargetResponse model constructor.
     * @property {module:model/ImageTargetResponse}
     */
    ImageTargetResponse: ImageTargetResponse,
    /**
     * The ObjectTargetCollectionJobResponse model constructor.
     * @property {module:model/ObjectTargetCollectionJobResponse}
     */
    ObjectTargetCollectionJobResponse: ObjectTargetCollectionJobResponse,
    /**
     * The ObjectTargetCollectionResponse model constructor.
     * @property {module:model/ObjectTargetCollectionResponse}
     */
    ObjectTargetCollectionResponse: ObjectTargetCollectionResponse,
    /**
     * The ObjectTargetCollectionResponseWto model constructor.
     * @property {module:model/ObjectTargetCollectionResponseWto}
     */
    ObjectTargetCollectionResponseWto: ObjectTargetCollectionResponseWto,
    /**
     * The ObjectTargetJobResponse model constructor.
     * @property {module:model/ObjectTargetJobResponse}
     */
    ObjectTargetJobResponse: ObjectTargetJobResponse,
    /**
     * The ObjectTargetResponse model constructor.
     * @property {module:model/ObjectTargetResponse}
     */
    ObjectTargetResponse: ObjectTargetResponse,
    /**
     * The ObjectTargetResponseResource model constructor.
     * @property {module:model/ObjectTargetResponseResource}
     */
    ObjectTargetResponseResource: ObjectTargetResponseResource,
    /**
     * The ObjectTargetResponseWtoFile model constructor.
     * @property {module:model/ObjectTargetResponseWtoFile}
     */
    ObjectTargetResponseWtoFile: ObjectTargetResponseWtoFile,
    /**
     * The RenameObjectTargetBody model constructor.
     * @property {module:model/RenameObjectTargetBody}
     */
    RenameObjectTargetBody: RenameObjectTargetBody,
    /**
     * The SimilarityCheckBody model constructor.
     * @property {module:model/SimilarityCheckBody}
     */
    SimilarityCheckBody: SimilarityCheckBody,
    /**
     * The SimilarityCheckBodyImages model constructor.
     * @property {module:model/SimilarityCheckBodyImages}
     */
    SimilarityCheckBodyImages: SimilarityCheckBodyImages,
    /**
     * The SimilarityCheckResponse model constructor.
     * @property {module:model/SimilarityCheckResponse}
     */
    SimilarityCheckResponse: SimilarityCheckResponse,
    /**
     * The SimilarityCheckResponseInputParams model constructor.
     * @property {module:model/SimilarityCheckResponseInputParams}
     */
    SimilarityCheckResponseInputParams: SimilarityCheckResponseInputParams,
    /**
     * The SimilarityCheckStatusResponse model constructor.
     * @property {module:model/SimilarityCheckStatusResponse}
     */
    SimilarityCheckStatusResponse: SimilarityCheckStatusResponse,
    /**
     * The SimilarityCheckStatusResponseCandidates model constructor.
     * @property {module:model/SimilarityCheckStatusResponseCandidates}
     */
    SimilarityCheckStatusResponseCandidates: SimilarityCheckStatusResponseCandidates,
    /**
     * The SimilarityCheckStatusResponseInputParams model constructor.
     * @property {module:model/SimilarityCheckStatusResponseInputParams}
     */
    SimilarityCheckStatusResponseInputParams: SimilarityCheckStatusResponseInputParams,
    /**
     * The SimilarityCheckStatusResponseInputParamsImages model constructor.
     * @property {module:model/SimilarityCheckStatusResponseInputParamsImages}
     */
    SimilarityCheckStatusResponseInputParamsImages: SimilarityCheckStatusResponseInputParamsImages,
    /**
     * The SimilarityCheckStatusResponsePayload model constructor.
     * @property {module:model/SimilarityCheckStatusResponsePayload}
     */
    SimilarityCheckStatusResponsePayload: SimilarityCheckStatusResponsePayload,
    /**
     * The UpdateImageTargetBody model constructor.
     * @property {module:model/UpdateImageTargetBody}
     */
    UpdateImageTargetBody: UpdateImageTargetBody,
    /**
     * The UpdateImageTargetCollectionBody model constructor.
     * @property {module:model/UpdateImageTargetCollectionBody}
     */
    UpdateImageTargetCollectionBody: UpdateImageTargetCollectionBody,
    /**
     * The UpdateObjectTargetCollectionBody model constructor.
     * @property {module:model/UpdateObjectTargetCollectionBody}
     */
    UpdateObjectTargetCollectionBody: UpdateObjectTargetCollectionBody,
    /**
     * The AccountApi service constructor.
     * @property {module:api/AccountApi}
     */
    AccountApi: AccountApi,
    /**
     * The HeatmapApi service constructor.
     * @property {module:api/HeatmapApi}
     */
    HeatmapApi: HeatmapApi,
    /**
     * The ImageTargetApi service constructor.
     * @property {module:api/ImageTargetApi}
     */
    ImageTargetApi: ImageTargetApi,
    /**
     * The ImageTargetCollectionApi service constructor.
     * @property {module:api/ImageTargetCollectionApi}
     */
    ImageTargetCollectionApi: ImageTargetCollectionApi,
    /**
     * The ObjectTargetApi service constructor.
     * @property {module:api/ObjectTargetApi}
     */
    ObjectTargetApi: ObjectTargetApi,
    /**
     * The ObjectTargetCollectionApi service constructor.
     * @property {module:api/ObjectTargetCollectionApi}
     */
    ObjectTargetCollectionApi: ObjectTargetCollectionApi,
    /**
     * The ProjectApi service constructor.
     * @property {module:api/ProjectApi}
     */
    ProjectApi: ProjectApi
  };

  return exports;
}));

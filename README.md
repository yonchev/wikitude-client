# wikitude_studio_api_client

WikitudeStudioApiClient - JavaScript client for wikitude_studio_api_client
The Wikitude Studio API is a RESTful API which is used to * organize and manipulate projects and its targets * create wtc/wto files which can be used to create trackers in the Wikitude SDK with the JavaScript API * generate/publish a cloud archive to the cloud recognition service (image targets only)  Download API clients: * [`OpenAPI 3.0`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-openapi.zip) * [`JavaScript`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-javascript.zip) * [`Python`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-python.zip) * [`PHP`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-php.zip) * [`TypeScript (NodeJS)`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-typescript-node.zip) * [`Java`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-java.zip) * [`Ruby`](https://www.wikitude.com/external/doc/documentation/studio-api/clients/wikitude_studio_api_client-ruby.zip)  This technical reference formally explains various API endpoints. Visit the [`Studio API documentation`](https://www.wikitude.com/external/doc/documentation/studio/) for a more general description. 
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.0.0
- Package version: 3.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install wikitude_studio_api_client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your wikitude_studio_api_client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('wikitude_studio_api_client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var api = new WikitudeStudioApiClient.AccountApi()
var xVersion = "xVersion_example"; // {String} The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // {String} Your Manager Token.
api.getAccount(xVersion, xToken).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WikitudeStudioApiClient.AccountApi* | [**getAccount**](docs/AccountApi.md#getAccount) | **GET** /account | Get account information
*WikitudeStudioApiClient.HeatmapApi* | [**generateHeatmap**](docs/HeatmapApi.md#generateHeatmap) | **POST** /heatmap | Generate Heatmap
*WikitudeStudioApiClient.HeatmapApi* | [**getHeatmapStatus**](docs/HeatmapApi.md#getHeatmapStatus) | **GET** /heatmap/{generationId} | Status - Generate Heatmap
*WikitudeStudioApiClient.ImageTargetApi* | [**createImageTargets**](docs/ImageTargetApi.md#createImageTargets) | **POST** /targetCollection/{tcId}/targets | Create Image Targets
*WikitudeStudioApiClient.ImageTargetApi* | [**deleteImageTarget**](docs/ImageTargetApi.md#deleteImageTarget) | **DELETE** /targetCollection/{tcId}/target/{targetId} | Delete Image Target
*WikitudeStudioApiClient.ImageTargetApi* | [**getImageTarget**](docs/ImageTargetApi.md#getImageTarget) | **GET** /targetCollection/{tcId}/target/{targetId} | Get Image Target
*WikitudeStudioApiClient.ImageTargetApi* | [**getImageTargetStatus**](docs/ImageTargetApi.md#getImageTargetStatus) | **GET** /targetCollection/{tcId}/generation/targets/{generationId} | Status - Image Targets Creation
*WikitudeStudioApiClient.ImageTargetApi* | [**getImageTargets**](docs/ImageTargetApi.md#getImageTargets) | **GET** /targetCollection/{tcId}/target | Get Image Targets
*WikitudeStudioApiClient.ImageTargetApi* | [**updateImageTarget**](docs/ImageTargetApi.md#updateImageTarget) | **POST** /targetCollection/{tcId}/target/{targetId} | Update Image Target
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**createImageTargetCollection**](docs/ImageTargetCollectionApi.md#createImageTargetCollection) | **POST** /targetCollection | Create Image Target Collection
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**deleteImageTargetCollection**](docs/ImageTargetCollectionApi.md#deleteImageTargetCollection) | **DELETE** /targetCollection/{tcId} | Delete Image Target Collection
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**generateCloudArchive**](docs/ImageTargetCollectionApi.md#generateCloudArchive) | **POST** /targetCollection/{tcId}/generation/cloudarchive | Generate Cloud Archive
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**generateWTC**](docs/ImageTargetCollectionApi.md#generateWTC) | **POST** /targetCollection/{tcId}/generation/wtc | Generate WTC
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**getCloudArchiveStatus**](docs/ImageTargetCollectionApi.md#getCloudArchiveStatus) | **GET** /targetCollection/{tcId}/generation/cloudarchive/{generationId} | Status - Generate Cloud Archive
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**getImageTargetCollection**](docs/ImageTargetCollectionApi.md#getImageTargetCollection) | **GET** /targetCollection/{tcId} | Get Image Target Collection
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**getImageTargetCollections**](docs/ImageTargetCollectionApi.md#getImageTargetCollections) | **GET** /targetCollection | Get all Image Target Collections
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**getSimilarityCheckStatus**](docs/ImageTargetCollectionApi.md#getSimilarityCheckStatus) | **GET** /targetCollection/{tcId}/similarity/{generationId} | Status - Similarity Check
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**getWTCStatus**](docs/ImageTargetCollectionApi.md#getWTCStatus) | **GET** /targetCollection/{tcId}/generation/wtc/{generationId} | Status - Generate WTC
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**similarityCheck**](docs/ImageTargetCollectionApi.md#similarityCheck) | **POST** /targetCollection/{tcId}/similarity | Similarity Check
*WikitudeStudioApiClient.ImageTargetCollectionApi* | [**updateImageTargetCollection**](docs/ImageTargetCollectionApi.md#updateImageTargetCollection) | **POST** /targetCollection/{tcId} | Update Image Target Collection
*WikitudeStudioApiClient.ObjectTargetApi* | [**createObjectTargetFromImages**](docs/ObjectTargetApi.md#createObjectTargetFromImages) | **POST** /objectTargetCollection/{tcId}/target/images | Create Object Target from Images
*WikitudeStudioApiClient.ObjectTargetApi* | [**createObjectTargetFromWTO**](docs/ObjectTargetApi.md#createObjectTargetFromWTO) | **POST** /objectTargetCollection/{tcId}/target/wto | Create Object Target from WTO
*WikitudeStudioApiClient.ObjectTargetApi* | [**deleteObjectTarget**](docs/ObjectTargetApi.md#deleteObjectTarget) | **DELETE** /objectTargetCollection/{tcId}/target/{targetId} | Delete Object Target
*WikitudeStudioApiClient.ObjectTargetApi* | [**extendObjectTarget**](docs/ObjectTargetApi.md#extendObjectTarget) | **PUT** /objectTargetCollection/{tcId}/target/{targetId} | Extend Object Target
*WikitudeStudioApiClient.ObjectTargetApi* | [**getObjectTarget**](docs/ObjectTargetApi.md#getObjectTarget) | **GET** /objectTargetCollection/{tcId}/target/{targetId} | Get Object Target
*WikitudeStudioApiClient.ObjectTargetApi* | [**getObjectTargetStatus**](docs/ObjectTargetApi.md#getObjectTargetStatus) | **GET** /objectTargetCollection/{tcId}/generation/targets/{generationId} | Status - Object Target Generation Information
*WikitudeStudioApiClient.ObjectTargetApi* | [**getObjectTargets**](docs/ObjectTargetApi.md#getObjectTargets) | **GET** /objectTargetCollection/{tcId}/target | Get Object Targets
*WikitudeStudioApiClient.ObjectTargetApi* | [**renameObjectTarget**](docs/ObjectTargetApi.md#renameObjectTarget) | **PUT** /objectTargetCollection/{tcId}/target/{targetId}/name | Rename Object Target
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**createObjectTargetCollection**](docs/ObjectTargetCollectionApi.md#createObjectTargetCollection) | **POST** /objectTargetCollection | Create Object Target Collection
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**deleteObjectTargetCollection**](docs/ObjectTargetCollectionApi.md#deleteObjectTargetCollection) | **DELETE** /objectTargetCollection/{tcId} | Delete Object Target Collection
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**generateWTO**](docs/ObjectTargetCollectionApi.md#generateWTO) | **POST** /objectTargetCollection/{tcId}/generation/wto | Generate WTO
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**getObjectTargetCollection**](docs/ObjectTargetCollectionApi.md#getObjectTargetCollection) | **GET** /objectTargetCollection/{tcId} | Get Object Target Collection
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**getObjectTargetCollectionStatus**](docs/ObjectTargetCollectionApi.md#getObjectTargetCollectionStatus) | **GET** /objectTargetCollection/{tcId}/jobs | Status - Get Object Target Collection jobs
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**getObjectTargetCollections**](docs/ObjectTargetCollectionApi.md#getObjectTargetCollections) | **GET** /objectTargetCollection | Get all Object Target Collections
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**getWTOStatus**](docs/ObjectTargetCollectionApi.md#getWTOStatus) | **GET** /objectTargetCollection/{tcId}/generation/wto/{generationId} | Status - Generate WTO
*WikitudeStudioApiClient.ObjectTargetCollectionApi* | [**updateObjectTargetCollection**](docs/ObjectTargetCollectionApi.md#updateObjectTargetCollection) | **PUT** /objectTargetCollection/{tcId} | Update Object Target Collection
*WikitudeStudioApiClient.ProjectApi* | [**getProjects**](docs/ProjectApi.md#getProjects) | **GET** /projects | Get all projects


## Documentation for Models

 - [WikitudeStudioApiClient.CloudArchiveGenerationResponse](docs/CloudArchiveGenerationResponse.md)
 - [WikitudeStudioApiClient.CloudArchiveGenerationResponseInputParams](docs/CloudArchiveGenerationResponseInputParams.md)
 - [WikitudeStudioApiClient.CreateImageTargetCollectionBody](docs/CreateImageTargetCollectionBody.md)
 - [WikitudeStudioApiClient.CreateImageTargetCollectionBodyCloudArchive](docs/CreateImageTargetCollectionBodyCloudArchive.md)
 - [WikitudeStudioApiClient.CreateImageTargetsBody](docs/CreateImageTargetsBody.md)
 - [WikitudeStudioApiClient.CreateImageTargetsResponse](docs/CreateImageTargetsResponse.md)
 - [WikitudeStudioApiClient.CreateImageTargetsResponseInputParams](docs/CreateImageTargetsResponseInputParams.md)
 - [WikitudeStudioApiClient.CreateImageTargetsResponseInputParamsTargets](docs/CreateImageTargetsResponseInputParamsTargets.md)
 - [WikitudeStudioApiClient.CreateObjectTargetCollectionBody](docs/CreateObjectTargetCollectionBody.md)
 - [WikitudeStudioApiClient.CreateObjectTargetImagesBody](docs/CreateObjectTargetImagesBody.md)
 - [WikitudeStudioApiClient.CreateObjectTargetImagesBodyResource](docs/CreateObjectTargetImagesBodyResource.md)
 - [WikitudeStudioApiClient.CreateObjectTargetWTOBody](docs/CreateObjectTargetWTOBody.md)
 - [WikitudeStudioApiClient.CreateObjectTargetWTOBodyResource](docs/CreateObjectTargetWTOBodyResource.md)
 - [WikitudeStudioApiClient.ExtendObjectTargetBody](docs/ExtendObjectTargetBody.md)
 - [WikitudeStudioApiClient.GenerateHeatmapBody](docs/GenerateHeatmapBody.md)
 - [WikitudeStudioApiClient.GenerateHeatmapResponse](docs/GenerateHeatmapResponse.md)
 - [WikitudeStudioApiClient.GenerateHeatmapResponseInputParams](docs/GenerateHeatmapResponseInputParams.md)
 - [WikitudeStudioApiClient.GenerateHeatmapStatusResponse](docs/GenerateHeatmapStatusResponse.md)
 - [WikitudeStudioApiClient.GenerateHeatmapStatusResponsePayload](docs/GenerateHeatmapStatusResponsePayload.md)
 - [WikitudeStudioApiClient.GenerateWTCBody](docs/GenerateWTCBody.md)
 - [WikitudeStudioApiClient.GenerateWTCStatusResponse](docs/GenerateWTCStatusResponse.md)
 - [WikitudeStudioApiClient.GenerateWTOBody](docs/GenerateWTOBody.md)
 - [WikitudeStudioApiClient.GetAccountInfoResponse](docs/GetAccountInfoResponse.md)
 - [WikitudeStudioApiClient.GetAccountInfoResponseStorage](docs/GetAccountInfoResponseStorage.md)
 - [WikitudeStudioApiClient.ImageTargetCollectionResponse](docs/ImageTargetCollectionResponse.md)
 - [WikitudeStudioApiClient.ImageTargetCollectionResponseCloudArchive](docs/ImageTargetCollectionResponseCloudArchive.md)
 - [WikitudeStudioApiClient.ImageTargetCollectionResponseWtc](docs/ImageTargetCollectionResponseWtc.md)
 - [WikitudeStudioApiClient.ImageTargetResponse](docs/ImageTargetResponse.md)
 - [WikitudeStudioApiClient.ObjectTargetCollectionJobResponse](docs/ObjectTargetCollectionJobResponse.md)
 - [WikitudeStudioApiClient.ObjectTargetCollectionResponse](docs/ObjectTargetCollectionResponse.md)
 - [WikitudeStudioApiClient.ObjectTargetCollectionResponseWto](docs/ObjectTargetCollectionResponseWto.md)
 - [WikitudeStudioApiClient.ObjectTargetJobResponse](docs/ObjectTargetJobResponse.md)
 - [WikitudeStudioApiClient.ObjectTargetResponse](docs/ObjectTargetResponse.md)
 - [WikitudeStudioApiClient.ObjectTargetResponseResource](docs/ObjectTargetResponseResource.md)
 - [WikitudeStudioApiClient.ObjectTargetResponseWtoFile](docs/ObjectTargetResponseWtoFile.md)
 - [WikitudeStudioApiClient.RenameObjectTargetBody](docs/RenameObjectTargetBody.md)
 - [WikitudeStudioApiClient.SimilarityCheckBody](docs/SimilarityCheckBody.md)
 - [WikitudeStudioApiClient.SimilarityCheckBodyImages](docs/SimilarityCheckBodyImages.md)
 - [WikitudeStudioApiClient.SimilarityCheckResponse](docs/SimilarityCheckResponse.md)
 - [WikitudeStudioApiClient.SimilarityCheckResponseInputParams](docs/SimilarityCheckResponseInputParams.md)
 - [WikitudeStudioApiClient.SimilarityCheckStatusResponse](docs/SimilarityCheckStatusResponse.md)
 - [WikitudeStudioApiClient.SimilarityCheckStatusResponseCandidates](docs/SimilarityCheckStatusResponseCandidates.md)
 - [WikitudeStudioApiClient.SimilarityCheckStatusResponseInputParams](docs/SimilarityCheckStatusResponseInputParams.md)
 - [WikitudeStudioApiClient.SimilarityCheckStatusResponseInputParamsImages](docs/SimilarityCheckStatusResponseInputParamsImages.md)
 - [WikitudeStudioApiClient.SimilarityCheckStatusResponsePayload](docs/SimilarityCheckStatusResponsePayload.md)
 - [WikitudeStudioApiClient.UpdateImageTargetBody](docs/UpdateImageTargetBody.md)
 - [WikitudeStudioApiClient.UpdateImageTargetCollectionBody](docs/UpdateImageTargetCollectionBody.md)
 - [WikitudeStudioApiClient.UpdateObjectTargetCollectionBody](docs/UpdateObjectTargetCollectionBody.md)


## Documentation for Authorization

 All endpoints do not require authorization.


# WikitudeStudioApiClient.ImageTargetCollectionApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImageTargetCollection**](ImageTargetCollectionApi.md#createImageTargetCollection) | **POST** /targetCollection | Create Image Target Collection
[**deleteImageTargetCollection**](ImageTargetCollectionApi.md#deleteImageTargetCollection) | **DELETE** /targetCollection/{tcId} | Delete Image Target Collection
[**generateCloudArchive**](ImageTargetCollectionApi.md#generateCloudArchive) | **POST** /targetCollection/{tcId}/generation/cloudarchive | Generate Cloud Archive
[**generateWTC**](ImageTargetCollectionApi.md#generateWTC) | **POST** /targetCollection/{tcId}/generation/wtc | Generate WTC
[**getCloudArchiveStatus**](ImageTargetCollectionApi.md#getCloudArchiveStatus) | **GET** /targetCollection/{tcId}/generation/cloudarchive/{generationId} | Status - Generate Cloud Archive
[**getImageTargetCollection**](ImageTargetCollectionApi.md#getImageTargetCollection) | **GET** /targetCollection/{tcId} | Get Image Target Collection
[**getImageTargetCollections**](ImageTargetCollectionApi.md#getImageTargetCollections) | **GET** /targetCollection | Get all Image Target Collections
[**getSimilarityCheckStatus**](ImageTargetCollectionApi.md#getSimilarityCheckStatus) | **GET** /targetCollection/{tcId}/similarity/{generationId} | Status - Similarity Check
[**getWTCStatus**](ImageTargetCollectionApi.md#getWTCStatus) | **GET** /targetCollection/{tcId}/generation/wtc/{generationId} | Status - Generate WTC
[**similarityCheck**](ImageTargetCollectionApi.md#similarityCheck) | **POST** /targetCollection/{tcId}/similarity | Similarity Check
[**updateImageTargetCollection**](ImageTargetCollectionApi.md#updateImageTargetCollection) | **POST** /targetCollection/{tcId} | Update Image Target Collection


<a name="createImageTargetCollection"></a>
# **createImageTargetCollection**
> ImageTargetCollectionResponse createImageTargetCollection(xVersion, xToken, contentType, createImageTargetCollectionBody)

Create Image Target Collection

Create a new target collection in your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var createImageTargetCollectionBody = new WikitudeStudioApiClient.CreateImageTargetCollectionBody(); // CreateImageTargetCollectionBody | 
apiInstance.createImageTargetCollection(xVersion, xToken, contentType, createImageTargetCollectionBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **contentType** | **String**| The Content Type of the body. Must be set to application/json. | 
 **createImageTargetCollectionBody** | [**CreateImageTargetCollectionBody**](CreateImageTargetCollectionBody.md)|  | 

### Return type

[**ImageTargetCollectionResponse**](ImageTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImageTargetCollection"></a>
# **deleteImageTargetCollection**
> deleteImageTargetCollection(xVersion, xToken, tcId)

Delete Image Target Collection

Delete a particular target collection from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
apiInstance.deleteImageTargetCollection(xVersion, xToken, tcId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="generateCloudArchive"></a>
# **generateCloudArchive**
> CloudArchiveGenerationResponse generateCloudArchive(xVersion, xToken, tcId)

Generate Cloud Archive

DEPRECATED - Generate a Cloud Archive from an existing Target Collection. The call is asynchronous and contains a path in the response header (Location) from which the status of the generation can be requested (see Status - Generate Cloud Archive). As of release 4.0.0 this endpoint will return error TARGET_COLLECTION_IS_UP_TO_DATE with status code 412, since the archive will be generated automatically in the background in the future. This endpoint is marked as \&quot;deprecated\&quot; since the behaviour will slightly change. However, this endpoint will still exist in version 3. 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
apiInstance.generateCloudArchive(xVersion, xToken, tcId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 

### Return type

[**CloudArchiveGenerationResponse**](CloudArchiveGenerationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generateWTC"></a>
# **generateWTC**
> GenerateWTCStatusResponse generateWTC(xVersion, xToken, contentType, tcId, generateWTCBody)

Generate WTC

Generates a WTC file out of an existing Target Collection with up to 1000 targets. The call is asynchronous and contains a path in the response header (Location) from which the status of the generation can be requested (see Status - Generate WTC). 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var generateWTCBody = new WikitudeStudioApiClient.GenerateWTCBody(); // GenerateWTCBody | 
apiInstance.generateWTC(xVersion, xToken, contentType, tcId, generateWTCBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **contentType** | **String**| The Content Type of the body. Must be set to application/json. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 
 **generateWTCBody** | [**GenerateWTCBody**](GenerateWTCBody.md)|  | 

### Return type

[**GenerateWTCStatusResponse**](GenerateWTCStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCloudArchiveStatus"></a>
# **getCloudArchiveStatus**
> CloudArchiveGenerationResponse getCloudArchiveStatus(xVersion, xToken, tcId, generationId)

Status - Generate Cloud Archive

Retrieves information status about a particular scheduled cloud archive generation.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getCloudArchiveStatus(xVersion, xToken, tcId, generationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 
 **generationId** | **String**| Unique identifier of the asynchronous job created by a generation endpoint. | 

### Return type

[**CloudArchiveGenerationResponse**](CloudArchiveGenerationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getImageTargetCollection"></a>
# **getImageTargetCollection**
> ImageTargetCollectionResponse getImageTargetCollection(xVersion, xToken, tcId)

Get Image Target Collection

Request a particular target collection from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
apiInstance.getImageTargetCollection(xVersion, xToken, tcId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 

### Return type

[**ImageTargetCollectionResponse**](ImageTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getImageTargetCollections"></a>
# **getImageTargetCollections**
> [ImageTargetCollectionResponse] getImageTargetCollections(xVersion, xToken, opts)

Get all Image Target Collections

Request all target collections from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var opts = {
  'skip': 56, // Number | Set 0 to start with first entry, set e.g. to 2 to skip first 2 entries. Default value: 0
  'limit': 56 // Number | Use positive value to define the amount of entries to return [1, 1000] per page. Default value: 1000
};
apiInstance.getImageTargetCollections(xVersion, xToken, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **skip** | **Number**| Set 0 to start with first entry, set e.g. to 2 to skip first 2 entries. Default value: 0 | [optional] 
 **limit** | **Number**| Use positive value to define the amount of entries to return [1, 1000] per page. Default value: 1000 | [optional] 

### Return type

[**[ImageTargetCollectionResponse]**](ImageTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSimilarityCheckStatus"></a>
# **getSimilarityCheckStatus**
> SimilarityCheckStatusResponse getSimilarityCheckStatus(xVersion, xToken, tcId, generationId)

Status - Similarity Check

Retrieves information status of a particular scheduled \&quot;Similarity Check\&quot;.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getSimilarityCheckStatus(xVersion, xToken, tcId, generationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 
 **generationId** | **String**| Unique identifier of the asynchronous job created by a generation endpoint. | 

### Return type

[**SimilarityCheckStatusResponse**](SimilarityCheckStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWTCStatus"></a>
# **getWTCStatus**
> GenerateWTCStatusResponse getWTCStatus(xVersion, xToken, tcId, generationId)

Status - Generate WTC

Retrieves information status about a particular scheduled WTC file generation. Once the status is completed, the WTC information can be retrieved from the Target Collection (see Get Target Collection). 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getWTCStatus(xVersion, xToken, tcId, generationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 
 **generationId** | **String**| Unique identifier of the asynchronous job created by a generation endpoint. | 

### Return type

[**GenerateWTCStatusResponse**](GenerateWTCStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="similarityCheck"></a>
# **similarityCheck**
> SimilarityCheckResponse similarityCheck(xVersion, xToken, contentType, tcId, similarityCheckBody)

Similarity Check

Pass up to 10 items pointing to PNG or JPEG images hosted via https in the body. In order to find out whether an image is similar to an existing Target in terms of recognition and tracking behaviour a check is performed per passed image item. The Target Collection must be published and have an active Cloud Archive in place. Up to 5 (default: 1) so called \&quot;candidates\&quot; with a similarity \&quot;score\&quot; are returned per image. Image must be hosted via https and be of type PNG or JPEG. Use \&quot;maxCandidates\&quot; to define the maximum amount of candidates to return for an image. Response header value \&quot;Location\&quot; directly points to the right \&quot;Status - Similarity Check\&quot; endpoint. Best practice is to trigger \&quot;Similarity Check\&quot;, wait for \&quot;estimatedLatency\&quot; milliseconds and poll \&quot;Status - Similarity Check\&quot; endpoint every 5 seconds until its \&quot;status\&quot; is \&quot;COMPLETED\&quot;. 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var similarityCheckBody = new WikitudeStudioApiClient.SimilarityCheckBody(); // SimilarityCheckBody | 
apiInstance.similarityCheck(xVersion, xToken, contentType, tcId, similarityCheckBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **contentType** | **String**| The Content Type of the body. Must be set to application/json. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 
 **similarityCheckBody** | [**SimilarityCheckBody**](SimilarityCheckBody.md)|  | 

### Return type

[**SimilarityCheckResponse**](SimilarityCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateImageTargetCollection"></a>
# **updateImageTargetCollection**
> ImageTargetCollectionResponse updateImageTargetCollection(xVersion, xToken, contentType, tcId, updateImageTargetCollectionBody)

Update Image Target Collection

Update a target collection from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var updateImageTargetCollectionBody = new WikitudeStudioApiClient.UpdateImageTargetCollectionBody(); // UpdateImageTargetCollectionBody | 
apiInstance.updateImageTargetCollection(xVersion, xToken, contentType, tcId, updateImageTargetCollectionBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVersion** | **String**| The version of the API to be used. Must be set to 3. | 
 **xToken** | **String**| Your Manager Token. | 
 **contentType** | **String**| The Content Type of the body. Must be set to application/json. | 
 **tcId** | **String**| Unique identifier of the Image Target Collection. | 
 **updateImageTargetCollectionBody** | [**UpdateImageTargetCollectionBody**](UpdateImageTargetCollectionBody.md)|  | 

### Return type

[**ImageTargetCollectionResponse**](ImageTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


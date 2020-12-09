# WikitudeStudioApiClient.ObjectTargetCollectionApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObjectTargetCollection**](ObjectTargetCollectionApi.md#createObjectTargetCollection) | **POST** /objectTargetCollection | Create Object Target Collection
[**deleteObjectTargetCollection**](ObjectTargetCollectionApi.md#deleteObjectTargetCollection) | **DELETE** /objectTargetCollection/{tcId} | Delete Object Target Collection
[**generateWTO**](ObjectTargetCollectionApi.md#generateWTO) | **POST** /objectTargetCollection/{tcId}/generation/wto | Generate WTO
[**getObjectTargetCollection**](ObjectTargetCollectionApi.md#getObjectTargetCollection) | **GET** /objectTargetCollection/{tcId} | Get Object Target Collection
[**getObjectTargetCollectionStatus**](ObjectTargetCollectionApi.md#getObjectTargetCollectionStatus) | **GET** /objectTargetCollection/{tcId}/jobs | Status - Get Object Target Collection jobs
[**getObjectTargetCollections**](ObjectTargetCollectionApi.md#getObjectTargetCollections) | **GET** /objectTargetCollection | Get all Object Target Collections
[**getWTOStatus**](ObjectTargetCollectionApi.md#getWTOStatus) | **GET** /objectTargetCollection/{tcId}/generation/wto/{generationId} | Status - Generate WTO
[**updateObjectTargetCollection**](ObjectTargetCollectionApi.md#updateObjectTargetCollection) | **PUT** /objectTargetCollection/{tcId} | Update Object Target Collection


<a name="createObjectTargetCollection"></a>
# **createObjectTargetCollection**
> ObjectTargetCollectionResponse createObjectTargetCollection(xVersion, xToken, contentType, createObjectTargetCollectionBody)

Create Object Target Collection

Create a new Object Target Collection in your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var createObjectTargetCollectionBody = new WikitudeStudioApiClient.CreateObjectTargetCollectionBody(); // CreateObjectTargetCollectionBody | 
apiInstance.createObjectTargetCollection(xVersion, xToken, contentType, createObjectTargetCollectionBody).then(function(data) {
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
 **createObjectTargetCollectionBody** | [**CreateObjectTargetCollectionBody**](CreateObjectTargetCollectionBody.md)|  | 

### Return type

[**ObjectTargetCollectionResponse**](ObjectTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteObjectTargetCollection"></a>
# **deleteObjectTargetCollection**
> deleteObjectTargetCollection(xVersion, xToken, tcId)

Delete Object Target Collection

Delete a Object Target Collection and all its Object Targets.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
apiInstance.deleteObjectTargetCollection(xVersion, xToken, tcId).then(function() {
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
 **tcId** | **String**| Unique identifier of the Object Target Collection. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="generateWTO"></a>
# **generateWTO**
> ObjectTargetCollectionJobResponse generateWTO(xVersion, xToken, contentType, tcId, generateWTOBody)

Generate WTO

Generate a WTO file containing the Object Target Collection and all its Object Targets.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var generateWTOBody = new WikitudeStudioApiClient.GenerateWTOBody(); // GenerateWTOBody | 
apiInstance.generateWTO(xVersion, xToken, contentType, tcId, generateWTOBody).then(function(data) {
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
 **tcId** | **String**| Unique identifier of the Object Target Collection. | 
 **generateWTOBody** | [**GenerateWTOBody**](GenerateWTOBody.md)|  | 

### Return type

[**ObjectTargetCollectionJobResponse**](ObjectTargetCollectionJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getObjectTargetCollection"></a>
# **getObjectTargetCollection**
> ObjectTargetCollectionResponse getObjectTargetCollection(xVersion, xToken, tcId)

Get Object Target Collection

Request a particular Object Target Collection from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
apiInstance.getObjectTargetCollection(xVersion, xToken, tcId).then(function(data) {
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
 **tcId** | **String**| Unique identifier of the Object Target Collection. | 

### Return type

[**ObjectTargetCollectionResponse**](ObjectTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getObjectTargetCollectionStatus"></a>
# **getObjectTargetCollectionStatus**
> [ObjectTargetJobResponse] getObjectTargetCollectionStatus(xVersion, xToken, tcId, opts)

Status - Get Object Target Collection jobs

Retrieves a list of asynchronous jobs sorted by creation date.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var opts = {
  'skip': 56, // Number | Set 0 to start with first collection, set e.g. to 2 to skip first 2 collections. Default value: 0
  'limit': 56, // Number | Use positive value to define the amount of entries to return [1, 20] per page. Default value: 10
  'source': "source_example", // String | filter the jobs by source. Available values (api, studio). Default value: api
  'type': "type_example" // String | filter the jobs by type.
};
apiInstance.getObjectTargetCollectionStatus(xVersion, xToken, tcId, opts).then(function(data) {
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
 **tcId** | **String**| Unique identifier of the Object Target Collection. | 
 **skip** | **Number**| Set 0 to start with first collection, set e.g. to 2 to skip first 2 collections. Default value: 0 | [optional] 
 **limit** | **Number**| Use positive value to define the amount of entries to return [1, 20] per page. Default value: 10 | [optional] 
 **source** | **String**| filter the jobs by source. Available values (api, studio). Default value: api | [optional] 
 **type** | **String**| filter the jobs by type. | [optional] 

### Return type

[**[ObjectTargetJobResponse]**](ObjectTargetJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getObjectTargetCollections"></a>
# **getObjectTargetCollections**
> [ObjectTargetCollectionResponse] getObjectTargetCollections(xVersion, xToken, opts)

Get all Object Target Collections

Request all Object Target Collections from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var opts = {
  'skip': 56, // Number | Set 0 to start with first entry, set e.g. to 2 to skip first 2 entries. Default value: 0
  'limit': 56 // Number | Use positive value to define the amount of entries to return [1, 1000] per page. Default value: 1000
};
apiInstance.getObjectTargetCollections(xVersion, xToken, opts).then(function(data) {
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

[**[ObjectTargetCollectionResponse]**](ObjectTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWTOStatus"></a>
# **getWTOStatus**
> ObjectTargetCollectionJobResponse getWTOStatus(xVersion, xToken, tcId, generationId)

Status - Generate WTO

Retrieves information status about a particular scheduled wto generation.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getWTOStatus(xVersion, xToken, tcId, generationId).then(function(data) {
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
 **tcId** | **String**| Unique identifier of the Object Target Collection. | 
 **generationId** | **String**| Unique identifier of the asynchronous job created by a generation endpoint. | 

### Return type

[**ObjectTargetCollectionJobResponse**](ObjectTargetCollectionJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateObjectTargetCollection"></a>
# **updateObjectTargetCollection**
> ObjectTargetCollectionResponse updateObjectTargetCollection(xVersion, xToken, contentType, tcId, updateObjectTargetCollectionBody)

Update Object Target Collection

Updates an existing Object Target Collection in your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetCollectionApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var updateObjectTargetCollectionBody = new WikitudeStudioApiClient.UpdateObjectTargetCollectionBody(); // UpdateObjectTargetCollectionBody | 
apiInstance.updateObjectTargetCollection(xVersion, xToken, contentType, tcId, updateObjectTargetCollectionBody).then(function(data) {
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
 **tcId** | **String**| Unique identifier of the Object Target Collection. | 
 **updateObjectTargetCollectionBody** | [**UpdateObjectTargetCollectionBody**](UpdateObjectTargetCollectionBody.md)|  | 

### Return type

[**ObjectTargetCollectionResponse**](ObjectTargetCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


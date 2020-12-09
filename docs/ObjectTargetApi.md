# WikitudeStudioApiClient.ObjectTargetApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObjectTargetFromImages**](ObjectTargetApi.md#createObjectTargetFromImages) | **POST** /objectTargetCollection/{tcId}/target/images | Create Object Target from Images
[**createObjectTargetFromWTO**](ObjectTargetApi.md#createObjectTargetFromWTO) | **POST** /objectTargetCollection/{tcId}/target/wto | Create Object Target from WTO
[**deleteObjectTarget**](ObjectTargetApi.md#deleteObjectTarget) | **DELETE** /objectTargetCollection/{tcId}/target/{targetId} | Delete Object Target
[**extendObjectTarget**](ObjectTargetApi.md#extendObjectTarget) | **PUT** /objectTargetCollection/{tcId}/target/{targetId} | Extend Object Target
[**getObjectTarget**](ObjectTargetApi.md#getObjectTarget) | **GET** /objectTargetCollection/{tcId}/target/{targetId} | Get Object Target
[**getObjectTargetStatus**](ObjectTargetApi.md#getObjectTargetStatus) | **GET** /objectTargetCollection/{tcId}/generation/targets/{generationId} | Status - Object Target Generation Information
[**getObjectTargets**](ObjectTargetApi.md#getObjectTargets) | **GET** /objectTargetCollection/{tcId}/target | Get Object Targets
[**renameObjectTarget**](ObjectTargetApi.md#renameObjectTarget) | **PUT** /objectTargetCollection/{tcId}/target/{targetId}/name | Rename Object Target


<a name="createObjectTargetFromImages"></a>
# **createObjectTargetFromImages**
> ObjectTargetJobResponse createObjectTargetFromImages(xVersion, xToken, contentType, tcId, createObjectTargetImagesBody)

Create Object Target from Images

Create a new Object Target in an Object Target Collection from at least two Image files.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var createObjectTargetImagesBody = new WikitudeStudioApiClient.CreateObjectTargetImagesBody(); // CreateObjectTargetImagesBody | 
apiInstance.createObjectTargetFromImages(xVersion, xToken, contentType, tcId, createObjectTargetImagesBody).then(function(data) {
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
 **createObjectTargetImagesBody** | [**CreateObjectTargetImagesBody**](CreateObjectTargetImagesBody.md)|  | 

### Return type

[**ObjectTargetJobResponse**](ObjectTargetJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createObjectTargetFromWTO"></a>
# **createObjectTargetFromWTO**
> ObjectTargetJobResponse createObjectTargetFromWTO(xVersion, xToken, contentType, tcId, createObjectTargetWTOBody)

Create Object Target from WTO

Create a new Object Target in an Object Target Collection from a WTO file.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var createObjectTargetWTOBody = new WikitudeStudioApiClient.CreateObjectTargetWTOBody(); // CreateObjectTargetWTOBody | 
apiInstance.createObjectTargetFromWTO(xVersion, xToken, contentType, tcId, createObjectTargetWTOBody).then(function(data) {
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
 **createObjectTargetWTOBody** | [**CreateObjectTargetWTOBody**](CreateObjectTargetWTOBody.md)|  | 

### Return type

[**ObjectTargetJobResponse**](ObjectTargetJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteObjectTarget"></a>
# **deleteObjectTarget**
> deleteObjectTarget(xVersion, xToken, tcId, targetId)

Delete Object Target

Delete a particular Object Target from your Object Target Collection.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Object Target.
apiInstance.deleteObjectTarget(xVersion, xToken, tcId, targetId).then(function() {
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
 **targetId** | **String**| Unique identifier of the Object Target. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="extendObjectTarget"></a>
# **extendObjectTarget**
> ObjectTargetJobResponse extendObjectTarget(xVersion, xToken, contentType, tcId, targetId, extendObjectTargetBody)

Extend Object Target

Add source images to an existing target.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Object Target.
var extendObjectTargetBody = new WikitudeStudioApiClient.ExtendObjectTargetBody(); // ExtendObjectTargetBody | 
apiInstance.extendObjectTarget(xVersion, xToken, contentType, tcId, targetId, extendObjectTargetBody).then(function(data) {
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
 **targetId** | **String**| Unique identifier of the Object Target. | 
 **extendObjectTargetBody** | [**ExtendObjectTargetBody**](ExtendObjectTargetBody.md)|  | 

### Return type

[**ObjectTargetJobResponse**](ObjectTargetJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getObjectTarget"></a>
# **getObjectTarget**
> ObjectTargetResponse getObjectTarget(xVersion, xToken, tcId, targetId)

Get Object Target

Request a specific Object Targets from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Object Target.
apiInstance.getObjectTarget(xVersion, xToken, tcId, targetId).then(function(data) {
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
 **targetId** | **String**| Unique identifier of the Object Target. | 

### Return type

[**ObjectTargetResponse**](ObjectTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getObjectTargetStatus"></a>
# **getObjectTargetStatus**
> ObjectTargetJobResponse getObjectTargetStatus(xVersion, xToken, tcId, generationId)

Status - Object Target Generation Information

Retrieves information status about a particular scheduled Object Target creation.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getObjectTargetStatus(xVersion, xToken, tcId, generationId).then(function(data) {
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

[**ObjectTargetJobResponse**](ObjectTargetJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getObjectTargets"></a>
# **getObjectTargets**
> [ObjectTargetResponse] getObjectTargets(xVersion, xToken, tcId)

Get Object Targets

Request all Object Targets in a Target Collection.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
apiInstance.getObjectTargets(xVersion, xToken, tcId).then(function(data) {
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

[**[ObjectTargetResponse]**](ObjectTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="renameObjectTarget"></a>
# **renameObjectTarget**
> ObjectTargetJobResponse renameObjectTarget(xVersion, xToken, contentType, tcId, targetId, renameObjectTargetBody)

Rename Object Target

Rename an existing target.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ObjectTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Object Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Object Target.
var renameObjectTargetBody = new WikitudeStudioApiClient.RenameObjectTargetBody(); // RenameObjectTargetBody | 
apiInstance.renameObjectTarget(xVersion, xToken, contentType, tcId, targetId, renameObjectTargetBody).then(function(data) {
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
 **targetId** | **String**| Unique identifier of the Object Target. | 
 **renameObjectTargetBody** | [**RenameObjectTargetBody**](RenameObjectTargetBody.md)|  | 

### Return type

[**ObjectTargetJobResponse**](ObjectTargetJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


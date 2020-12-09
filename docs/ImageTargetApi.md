# WikitudeStudioApiClient.ImageTargetApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImageTargets**](ImageTargetApi.md#createImageTargets) | **POST** /targetCollection/{tcId}/targets | Create Image Targets
[**deleteImageTarget**](ImageTargetApi.md#deleteImageTarget) | **DELETE** /targetCollection/{tcId}/target/{targetId} | Delete Image Target
[**getImageTarget**](ImageTargetApi.md#getImageTarget) | **GET** /targetCollection/{tcId}/target/{targetId} | Get Image Target
[**getImageTargetStatus**](ImageTargetApi.md#getImageTargetStatus) | **GET** /targetCollection/{tcId}/generation/targets/{generationId} | Status - Image Targets Creation
[**getImageTargets**](ImageTargetApi.md#getImageTargets) | **GET** /targetCollection/{tcId}/target | Get Image Targets
[**updateImageTarget**](ImageTargetApi.md#updateImageTarget) | **POST** /targetCollection/{tcId}/target/{targetId} | Update Image Target


<a name="createImageTargets"></a>
# **createImageTargets**
> CreateImageTargetsResponse createImageTargets(xVersion, xToken, contentType, tcId, opts)

Create Image Targets

Create a set of up to 10 new Targets in a Target Collection in your account. The task to create the listed Targets is scheduled. The response body contains the initial job status. \&quot;Location\&quot;-header is the url to the GET endpoint that returns current job status information. It is recommended to query this endpoint after \&quot;estimatedLatency\&quot; milliseconds, and poll it afterwards every 10 seconds in case job status is still not \&quot;COMPLETED\&quot;. Once job status is \&quot;COMPLETED\&quot; each item holds a \&quot;target\&quot; attribute of the created target or an \&quot;error\&quot; attribute. 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var opts = {
  'createImageTargetsBody': [new WikitudeStudioApiClient.CreateImageTargetsBody()] // [CreateImageTargetsBody] | 
};
apiInstance.createImageTargets(xVersion, xToken, contentType, tcId, opts).then(function(data) {
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
 **createImageTargetsBody** | [**[CreateImageTargetsBody]**](Array.md)|  | [optional] 

### Return type

[**CreateImageTargetsResponse**](CreateImageTargetsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImageTarget"></a>
# **deleteImageTarget**
> deleteImageTarget(xVersion, xToken, tcId, targetId)

Delete Image Target

Delete a particular Target from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Image Target.
apiInstance.deleteImageTarget(xVersion, xToken, tcId, targetId).then(function() {
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
 **targetId** | **String**| Unique identifier of the Image Target. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getImageTarget"></a>
# **getImageTarget**
> ImageTargetResponse getImageTarget(xVersion, xToken, tcId, targetId)

Get Image Target

Request a particular Image Target in a particular Target Collection.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Image Target.
apiInstance.getImageTarget(xVersion, xToken, tcId, targetId).then(function(data) {
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
 **targetId** | **String**| Unique identifier of the Image Target. | 

### Return type

[**ImageTargetResponse**](ImageTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getImageTargetStatus"></a>
# **getImageTargetStatus**
> CreateImageTargetsResponse getImageTargetStatus(xVersion, xToken, tcId, generationId)

Status - Image Targets Creation

Retrieves information status about a particular scheduled targets creation.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getImageTargetStatus(xVersion, xToken, tcId, generationId).then(function(data) {
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

[**CreateImageTargetsResponse**](CreateImageTargetsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getImageTargets"></a>
# **getImageTargets**
> [ImageTargetResponse] getImageTargets(xVersion, xToken, tcId, opts)

Get Image Targets

Request all Image Targets in a Target Collection.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var opts = {
  'sortby': "sortby_example", // String | Targets may be sorted by 'name', 'creDat', 'modDat', 'rating'. Default value: 'creDat'
  'sortorder': "sortorder_example", // String | Targets may be sorted ascending ('asc') or descending ('desc'). Default value: 'desc'
  'skip': 3.4, // Number | Set 0 to start with first target, set e.g. to 2 to skip first 2 targets. Default value: 0
  'limit': 3.4, // Number | Set to 0 for 'all targets' or use positive value to define max. amount of targets to return. Default value: 0
  's': "s_example", // String | The search string to look for in target names.
  'addHasAugmentations': true // Boolean | Add the hasAugmentations property.
};
apiInstance.getImageTargets(xVersion, xToken, tcId, opts).then(function(data) {
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
 **sortby** | **String**| Targets may be sorted by &#39;name&#39;, &#39;creDat&#39;, &#39;modDat&#39;, &#39;rating&#39;. Default value: &#39;creDat&#39; | [optional] 
 **sortorder** | **String**| Targets may be sorted ascending (&#39;asc&#39;) or descending (&#39;desc&#39;). Default value: &#39;desc&#39; | [optional] 
 **skip** | **Number**| Set 0 to start with first target, set e.g. to 2 to skip first 2 targets. Default value: 0 | [optional] 
 **limit** | **Number**| Set to 0 for &#39;all targets&#39; or use positive value to define max. amount of targets to return. Default value: 0 | [optional] 
 **s** | **String**| The search string to look for in target names. | [optional] 
 **addHasAugmentations** | **Boolean**| Add the hasAugmentations property. | [optional] 

### Return type

[**[ImageTargetResponse]**](ImageTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateImageTarget"></a>
# **updateImageTarget**
> ImageTargetResponse updateImageTarget(xVersion, xToken, contentType, tcId, targetId, updateImageTargetBody)

Update Image Target

Updates properties of a particular Target in your account. Currently following properties are supported: physicalHeight, metadata. 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ImageTargetApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var tcId = "tcId_example"; // String | Unique identifier of the Image Target Collection.
var targetId = "targetId_example"; // String | Unique identifier of the Image Target.
var updateImageTargetBody = new WikitudeStudioApiClient.UpdateImageTargetBody(); // UpdateImageTargetBody | 
apiInstance.updateImageTarget(xVersion, xToken, contentType, tcId, targetId, updateImageTargetBody).then(function(data) {
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
 **targetId** | **String**| Unique identifier of the Image Target. | 
 **updateImageTargetBody** | [**UpdateImageTargetBody**](UpdateImageTargetBody.md)|  | 

### Return type

[**ImageTargetResponse**](ImageTargetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


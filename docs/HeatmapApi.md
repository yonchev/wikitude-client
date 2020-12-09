# WikitudeStudioApiClient.HeatmapApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateHeatmap**](HeatmapApi.md#generateHeatmap) | **POST** /heatmap | Generate Heatmap
[**getHeatmapStatus**](HeatmapApi.md#getHeatmapStatus) | **GET** /heatmap/{generationId} | Status - Generate Heatmap


<a name="generateHeatmap"></a>
# **generateHeatmap**
> GenerateHeatmapResponse generateHeatmap(xVersion, xToken, contentType, generateHeatmapBody)

Generate Heatmap

Generates a greyscale image out of the input image, where areas with recognition and tracking relevance are highlighted in color. This way one can better understand the rating of an image and see which areas have the highest importance for 2D recognition and tracking. Note that only JPG and non-transparent PNG files are accepted and the generated heatmap image is stored on a temporary folder which is deleted after 24 hours. Store the image on your own server in case you plan to use it in your user interface. 

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.HeatmapApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var contentType = "contentType_example"; // String | The Content Type of the body. Must be set to application/json.
var generateHeatmapBody = new WikitudeStudioApiClient.GenerateHeatmapBody(); // GenerateHeatmapBody | 
apiInstance.generateHeatmap(xVersion, xToken, contentType, generateHeatmapBody).then(function(data) {
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
 **generateHeatmapBody** | [**GenerateHeatmapBody**](GenerateHeatmapBody.md)|  | 

### Return type

[**GenerateHeatmapResponse**](GenerateHeatmapResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHeatmapStatus"></a>
# **getHeatmapStatus**
> GenerateHeatmapStatusResponse getHeatmapStatus(xVersion, xToken, generationId)

Status - Generate Heatmap

Retrieves information status about a particular scheduled heatmap creation.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.HeatmapApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var generationId = "generationId_example"; // String | Unique identifier of the asynchronous job created by a generation endpoint.
apiInstance.getHeatmapStatus(xVersion, xToken, generationId).then(function(data) {
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
 **generationId** | **String**| Unique identifier of the asynchronous job created by a generation endpoint. | 

### Return type

[**GenerateHeatmapStatusResponse**](GenerateHeatmapStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


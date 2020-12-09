# WikitudeStudioApiClient.ProjectApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProjects**](ProjectApi.md#getProjects) | **GET** /projects | Get all projects


<a name="getProjects"></a>
# **getProjects**
> [Object] getProjects(xVersion, xToken, opts)

Get all projects

Request all projects from your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.ProjectApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
var opts = {
  'skip': 56, // Number | Set 0 to start with first entry, set e.g. to 2 to skip first 2 entries. Default value: 0
  'limit': 56 // Number | Use positive value to define the amount of entries to return [1, 1000] per page. Default value: 1000
};
apiInstance.getProjects(xVersion, xToken, opts).then(function(data) {
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

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


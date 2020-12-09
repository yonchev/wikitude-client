# WikitudeStudioApiClient.AccountApi

All URIs are relative to *https://api-eu.wikitude.com/cloudrecognition*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountApi.md#getAccount) | **GET** /account | Get account information


<a name="getAccount"></a>
# **getAccount**
> GetAccountInfoResponse getAccount(xVersion, xToken)

Get account information

Request information regarding your account.

### Example
```javascript
var WikitudeStudioApiClient = require('wikitude_studio_api_client');

var apiInstance = new WikitudeStudioApiClient.AccountApi();
var xVersion = "xVersion_example"; // String | The version of the API to be used. Must be set to 3.
var xToken = "xToken_example"; // String | Your Manager Token.
apiInstance.getAccount(xVersion, xToken).then(function(data) {
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

### Return type

[**GetAccountInfoResponse**](GetAccountInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


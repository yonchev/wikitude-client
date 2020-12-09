# WikitudeStudioApiClient.CloudArchiveGenerationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputParams** | [**CloudArchiveGenerationResponseInputParams**](CloudArchiveGenerationResponseInputParams.md) |  | [optional] 
**created** | **Number** | Timestamp of the job creation. | [optional] 
**estimatedStart** | **Number** | Estimation of when the job will start processing. | [optional] 
**estimatedEnd** | **Number** | Estimation of when the job will approximately be finished. | [optional] 
**estimatedLatency** | **Number** | Recommendation of when to first poll the corresponding status endpoint in milliseconds. | [optional] 
**status** | **String** | The status of the asynchronous job. | [optional] 
**tcId** | **String** | Unique identifier of the Target Collection. | [optional] 
**generationId** | **String** | The asynchronous job id. | [optional] 



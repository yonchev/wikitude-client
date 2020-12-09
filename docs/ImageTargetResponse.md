# WikitudeStudioApiClient.ImageTargetResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thumbnailUrl** | **String** | URL to the Target resource thumbnail. | [optional] 
**rating** | **Number** | The star rating indicates the quality of the target, i.e. how well the target is recognized on the device. The more stars a target has, the better it can be recognized and tracked.  | [optional] 
**distribution** | **Number** | The distribution rating indicates how well feature-points scatter over the target image. The higher the rating, the more reliable it can be recognized and tracked, even if partly covered.  | [optional] 
**fileSize** | **Number** | File size of the stored resource. | [optional] 
**name** | **String** | Name of the Target. | [optional] 
**imageUrl** | **String** | URL to the Target Image resource. | [optional] 
**type** | **String** | Type of the Target (\&quot;Image\&quot; for Image Targets or \&quot;Object\&quot; for Object Targets). | [optional] 
**modDat** | **Number** | Modification timestamp. | [optional] 
**creDat** | **Number** | Creation timestamp. | [optional] 
**id** | **String** | Unique identifier of the Target. | [optional] 
**metadata** | **String** | Arbitrary JSON data that should be stored together with the Target. | [optional] 
**physicalHeight** | **Number** | The physical (real world) height of the target, in millimeters. | [optional] 



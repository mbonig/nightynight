# API Reference

**Classes**

Name|Description
----|-----------
[NightyNight](#matthewbonig-nightynight-nightynight)|This class is deprecated, please use NightyNightForEc2.
[NightyNightForEc2](#matthewbonig-nightynight-nightynightforec2)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.
[NightyNightForRds](#matthewbonig-nightynight-nightynightforrds)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given rds instance at the specified time.


**Structs**

Name|Description
----|-----------
[NightyNightForEc2Props](#matthewbonig-nightynight-nightynightforec2props)|Props for the NightNight construct.
[NightyNightForRdsProps](#matthewbonig-nightynight-nightynightforrdsprops)|Props for the NightNight construct.
[NightyNightProps](#matthewbonig-nightynight-nightynightprops)|*No description*



## class NightyNight ⚠️ <a id="matthewbonig-nightynight-nightynight"></a>

This class is deprecated, please use NightyNightForEc2.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [NightyNightForEc2](#matthewbonig-nightynight-nightynightforec2)

### Initializer




```ts
new NightyNight(scope: Construct, id: string, props: NightyNightProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightProps](#matthewbonig-nightynight-nightynightprops)</code>)  *No description*
  * **instanceId** (<code>string</code>)  the instanceId of the EC2 instance you'd like stopped. 
  * **schedule** (<code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class NightyNightForEc2  <a id="matthewbonig-nightynight-nightynightforec2"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.

Typically used when you've got ec2 instances that you only need during business hours
and want to reduce the costs of.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new NightyNightForEc2(scope: Construct, id: string, props: NightyNightForEc2Props)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightForEc2Props](#matthewbonig-nightynight-nightynightforec2props)</code>)  *No description*
  * **instanceId** (<code>string</code>)  the instanceId of the EC2 instance you'd like stopped. 
  * **schedule** (<code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class NightyNightForRds  <a id="matthewbonig-nightynight-nightynightforrds"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given rds instance at the specified time.

Typically used when you've got rds instances that you only need during business hours
and want to reduce the costs of.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new NightyNightForRds(scope: Construct, id: string, props: NightyNightForRdsProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightForRdsProps](#matthewbonig-nightynight-nightynightforrdsprops)</code>)  *No description*
  * **dbInstanceIdentifier** (<code>string</code>)  the DBInstanceIdentifier of the RDS instance you'd like stopped. 
  * **schedule** (<code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## struct NightyNightForEc2Props  <a id="matthewbonig-nightynight-nightynightforec2props"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**instanceId** | <code>string</code> | the instanceId of the EC2 instance you'd like stopped.
**schedule**? | <code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct NightyNightForRdsProps  <a id="matthewbonig-nightynight-nightynightforrdsprops"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**dbInstanceIdentifier** | <code>string</code> | the DBInstanceIdentifier of the RDS instance you'd like stopped.
**schedule**? | <code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct NightyNightProps  <a id="matthewbonig-nightynight-nightynightprops"></a>






Name | Type | Description 
-----|------|-------------
**instanceId** | <code>string</code> | the instanceId of the EC2 instance you'd like stopped.
**schedule**? | <code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }




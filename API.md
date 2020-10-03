# API Reference

**Classes**

Name|Description
----|-----------
[NightyNight](#matthewbonig-nightynight-nightynight)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.


**Structs**

Name|Description
----|-----------
[NightyNightProps](#matthewbonig-nightynight-nightynightprops)|Props for the NightNight construct.



## class NightyNight  <a id="matthewbonig-nightynight-nightynight"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.

Typically used when you've got ec2 instances that you only need during business hours
and want to reduce the costs of.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new NightyNight(scope: Construct, id: string, props: NightyNightProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightProps](#matthewbonig-nightynight-nightynightprops)</code>)  *No description*
  * **instanceId** (<code>string</code>)  the instanceId of the EC2 instance you'd like stopped. 
  * **schedule** (<code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## struct NightyNightProps  <a id="matthewbonig-nightynight-nightynightprops"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**instanceId** | <code>string</code> | the instanceId of the EC2 instance you'd like stopped.
**schedule**? | <code>[CronOptions](#aws-cdk-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }




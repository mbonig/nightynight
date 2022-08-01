# API Reference

**Classes**

Name|Description
----|-----------
[NightyNight](#matthewbonig-nightynight-nightynight)|This class is deprecated, please use NightyNightForEc2.
[NightyNightForAsg](#matthewbonig-nightynight-nightynightforasg)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will set the given ASG's desired capacity.
[NightyNightForEc2](#matthewbonig-nightynight-nightynightforec2)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.
[NightyNightForEcs](#matthewbonig-nightynight-nightynightforecs)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will set the given ECS Service's desired capacity.
[NightyNightForRds](#matthewbonig-nightynight-nightynightforrds)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given rds instance at the specified time.
[WakeyWakeyForEc2](#matthewbonig-nightynight-wakeywakeyforec2)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will start the given ec2 instance at the specified time.
[WakeyWakeyForRds](#matthewbonig-nightynight-wakeywakeyforrds)|A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will start the given rds instance at the specified time.


**Structs**

Name|Description
----|-----------
[NightyNightForAsgProps](#matthewbonig-nightynight-nightynightforasgprops)|Props for the NightNight construct.
[NightyNightForEc2Props](#matthewbonig-nightynight-nightynightforec2props)|Props for the NightNight construct.
[NightyNightForEcsProps](#matthewbonig-nightynight-nightynightforecsprops)|Props for the NightNight construct.
[NightyNightForRdsProps](#matthewbonig-nightynight-nightynightforrdsprops)|Props for the NightNight construct.
[NightyNightProps](#matthewbonig-nightynight-nightynightprops)|*No description*
[WakeyWakeyForEc2Props](#matthewbonig-nightynight-wakeywakeyforec2props)|*No description*
[WakeyWakeyForRdsProps](#matthewbonig-nightynight-wakeywakeyforrdsprops)|Props for the WakeyWakeyForRds construct.



## class NightyNight ⚠️ <a id="matthewbonig-nightynight-nightynight"></a>

This class is deprecated, please use NightyNightForEc2.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [NightyNightForEc2](#matthewbonig-nightynight-nightynightforec2)

### Initializer




```ts
new NightyNight(scope: Construct, id: string, props: NightyNightProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightProps](#matthewbonig-nightynight-nightynightprops)</code>)  *No description*
  * **filters** (<code>Array<any></code>)  Filters to match to find an EC2 instance. __*Optional*__
  * **instanceId** (<code>string</code>)  the instanceId of the EC2 instance you'd like stopped. __*Optional*__
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class NightyNightForAsg  <a id="matthewbonig-nightynight-nightynightforasg"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will set the given ASG's desired capacity.

Typically used when you've got and ASG that you can scale during set hours.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new NightyNightForAsg(scope: Construct, id: string, props: NightyNightForAsgProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightForAsgProps](#matthewbonig-nightynight-nightynightforasgprops)</code>)  *No description*
  * **autoScalingGroup** (<code>[aws_autoscaling.IAutoScalingGroup](#aws-cdk-lib-aws-autoscaling-iautoscalinggroup)</code>)  the AutoScalingGroup you'd like to change the instance count on. 
  * **desiredCapacity** (<code>number</code>)  Desired capacity. 
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to scale. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class NightyNightForEc2  <a id="matthewbonig-nightynight-nightynightforec2"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given ec2 instance at the specified time.

Typically used when you've got ec2 instances that you only need during business hours
and want to reduce the costs of.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new NightyNightForEc2(scope: Construct, id: string, props: NightyNightForEc2Props)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightForEc2Props](#matthewbonig-nightynight-nightynightforec2props)</code>)  *No description*
  * **filters** (<code>Array<any></code>)  Filters to match to find an EC2 instance. __*Optional*__
  * **instanceId** (<code>string</code>)  the instanceId of the EC2 instance you'd like stopped. __*Optional*__
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class NightyNightForEcs  <a id="matthewbonig-nightynight-nightynightforecs"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will set the given ECS Service's desired capacity.

Typically, used when you've got an ECS Service that you can scale during set hours.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new NightyNightForEcs(scope: Construct, id: string, props: NightyNightForEcsProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightForEcsProps](#matthewbonig-nightynight-nightynightforecsprops)</code>)  *No description*
  * **desiredCapacity** (<code>number</code>)  Desired capacity. 
  * **serviceName** (<code>string</code>)  The service name to update. 
  * **cluster** (<code>[aws_ecs.ICluster](#aws-cdk-lib-aws-ecs-icluster)</code>)  The ECS Cluster where the service resides. __*Default*__: 'default'
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to scale. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class NightyNightForRds  <a id="matthewbonig-nightynight-nightynightforrds"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will stop the given rds instance at the specified time.

Typically used when you've got rds instances that you only need during business hours
and want to reduce the costs of.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new NightyNightForRds(scope: Construct, id: string, props: NightyNightForRdsProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NightyNightForRdsProps](#matthewbonig-nightynight-nightynightforrdsprops)</code>)  *No description*
  * **dbInstanceIdentifier** (<code>string</code>)  the DBInstanceIdentifier of the RDS instance you'd like stopped. 
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to stop the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## class WakeyWakeyForEc2  <a id="matthewbonig-nightynight-wakeywakeyforec2"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will start the given ec2 instance at the specified time.

Typically used when you've got ec2 instances that you only need during business hours
and want to reduce the costs of. Use in conjunction with the Nightynight construct at

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new WakeyWakeyForEc2(scope: Construct, id: string, props: WakeyWakeyForEc2Props)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[WakeyWakeyForEc2Props](#matthewbonig-nightynight-wakeywakeyforec2props)</code>)  *No description*
  * **filters** (<code>Array<any></code>)  Filters to match to find an EC2 instance. __*Optional*__
  * **instanceId** (<code>string</code>)  the instanceId of the EC2 instance you'd like started. __*Optional*__
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to start the instance. __*Default*__: { day: '*', hour: '12', minute: '0' }




## class WakeyWakeyForRds  <a id="matthewbonig-nightynight-wakeywakeyforrds"></a>

A construct that will build a Lambda and a CloudWatch Rule (cron schedule) that will start the given rds instance at the specified time.

Typically used when you've got rds instances that you only need during business hours
and want to reduce the costs of.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new WakeyWakeyForRds(scope: Construct, id: string, props: WakeyWakeyForRdsProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[WakeyWakeyForRdsProps](#matthewbonig-nightynight-wakeywakeyforrdsprops)</code>)  *No description*
  * **dbInstanceIdentifier** (<code>string</code>)  the DBInstanceIdentifier of the RDS instance you'd like started. 
  * **schedule** (<code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code>)  An option CronOptions to specify the time of day to start the instance. __*Default*__: { day: '*', hour: '4', minute: '0' }




## struct NightyNightForAsgProps  <a id="matthewbonig-nightynight-nightynightforasgprops"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**autoScalingGroup** | <code>[aws_autoscaling.IAutoScalingGroup](#aws-cdk-lib-aws-autoscaling-iautoscalinggroup)</code> | the AutoScalingGroup you'd like to change the instance count on.
**desiredCapacity** | <code>number</code> | Desired capacity.
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to scale.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct NightyNightForEc2Props  <a id="matthewbonig-nightynight-nightynightforec2props"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**filters**? | <code>Array<any></code> | Filters to match to find an EC2 instance.<br/>__*Optional*__
**instanceId**? | <code>string</code> | the instanceId of the EC2 instance you'd like stopped.<br/>__*Optional*__
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct NightyNightForEcsProps  <a id="matthewbonig-nightynight-nightynightforecsprops"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**desiredCapacity** | <code>number</code> | Desired capacity.
**serviceName** | <code>string</code> | The service name to update.
**cluster**? | <code>[aws_ecs.ICluster](#aws-cdk-lib-aws-ecs-icluster)</code> | The ECS Cluster where the service resides.<br/>__*Default*__: 'default'
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to scale.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct NightyNightForRdsProps  <a id="matthewbonig-nightynight-nightynightforrdsprops"></a>


Props for the NightNight construct.



Name | Type | Description 
-----|------|-------------
**dbInstanceIdentifier** | <code>string</code> | the DBInstanceIdentifier of the RDS instance you'd like stopped.
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct NightyNightProps  <a id="matthewbonig-nightynight-nightynightprops"></a>






Name | Type | Description 
-----|------|-------------
**filters**? | <code>Array<any></code> | Filters to match to find an EC2 instance.<br/>__*Optional*__
**instanceId**? | <code>string</code> | the instanceId of the EC2 instance you'd like stopped.<br/>__*Optional*__
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to stop the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }



## struct WakeyWakeyForEc2Props  <a id="matthewbonig-nightynight-wakeywakeyforec2props"></a>






Name | Type | Description 
-----|------|-------------
**filters**? | <code>Array<any></code> | Filters to match to find an EC2 instance.<br/>__*Optional*__
**instanceId**? | <code>string</code> | the instanceId of the EC2 instance you'd like started.<br/>__*Optional*__
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to start the instance.<br/>__*Default*__: { day: '*', hour: '12', minute: '0' }



## struct WakeyWakeyForRdsProps  <a id="matthewbonig-nightynight-wakeywakeyforrdsprops"></a>


Props for the WakeyWakeyForRds construct.



Name | Type | Description 
-----|------|-------------
**dbInstanceIdentifier** | <code>string</code> | the DBInstanceIdentifier of the RDS instance you'd like started.
**schedule**? | <code>[aws_events.CronOptions](#aws-cdk-lib-aws-events-cronoptions)</code> | An option CronOptions to specify the time of day to start the instance.<br/>__*Default*__: { day: '*', hour: '4', minute: '0' }




# NightyNight and WakeyWakey!

Do you have a EC2 instance or an RDS instance that you only need during certain hours of the day? Do you want to reduce it's cost? How about just stopping it every night?

That's the NightyNight construct. It's very simple. Give it an `instanceId` and it will create a Lambda and a CloudWatch Event Rule to fire the lambda at a specific time of day. If the instance is running, it's stopped.

There are currently two variations of the construct:

* [NightyNightForEc2](./API.md#matthewbonig-nightynight-nightynightforec2) - stops an EC2 instance at a given time.
* [NightyNightForRds](./API.md#matthewbonig-nightynight-nightynightforrds) - stops an RDS instance at a given time.
* [NightyNightForAsg](./API.md#matthewbonig-nightynight-nightynightforasg) - sets the desired capacity for an ASG at a given time.

# WakeyWakey

The WakeyWakey construct (from [this](https://github.com/mbonig/wakeywakey) repository) has been integrated into this library. You don't need to install
a separate dependency anymore. 

* [WakeyWakeyForEc2](./API.md#matthewbonig-nightynight-wakeywakeyforec2) - start an EC2 instance at a given time.
* [WakeyWakeyForRds](./API.md#matthewbonig-nightynight-wakeywakeyforrds) - start an RDS instance at a given time.

There isn't a specific construct for starting ASGs, since you can just set the count to whatever you want.

# This is a pre-release!

This is a quick first-draft. All the options that will likely need to be added to accommodate a large
number of use-cases are still needed. If you'd like to make requests or help update this construct, please
open an [Issue](https://github.com/mbonig/nightynight/issues) or a [PR](https://github.com/mbonig/cicd-spa-website/pulls).

# What it creates

![arch.png](./arch.png)

* A Rule that will, on a given schedule, fire a lambda. 
* A Lambda with permissions to describe ec2 instances. It will read the instance by the given `instanceId` and then stop the instance if it's in a running state.

# Example:

```typescript
import {NightyNightForEc2, WakeyWakeyForEc2} from "./ec2";

export class NightyNightStack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new NightyNightForEc2(this, 'nighty-night', {instanceId: 'i-123123123123'});
    new WakeyWakeyForEc2(this, 'wakey-wakey', {instanceId: 'i-123123123123'})
  }
}

```

This will stop the instance with id `i-123123123123` at (the default) 4am UTC. It will then start the instance at 12am UTC.

# API Doc

See the [API Docs](./API.md) for more info.

## Contributing

Please open Pull Requests and Issues on the [Github Repo](https://github.com/mbonig/nightynight).

## License

MIT

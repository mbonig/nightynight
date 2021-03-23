const AWS = require('aws-sdk'); // eslint-disable-line
const ec2 = new AWS.EC2();

const instanceId = process.env.INSTANCE_ID;
export const handler = async (event: any) => {
  console.log({ event });
  console.log({ instanceId });

  console.log('Getting instance details');

  let params = {
    InstanceIds: [
      instanceId,
    ],
  };
  const {
    Reservations: [{ Instances: [instanceDetails] }],
  } = await ec2.describeInstances(params).promise();
  console.log({ instanceDetails });
  if (!instanceDetails) {
    throw new Error('Couldn\'t find instance details. Weird... if the instance was terminated, this app should be removed.');
  }
  if (instanceDetails.State.Name === 'stopped') {
    console.log('starting the instance');
    await ec2.startInstances(params).promise();
    let now = new Date().toISOString();
    console.log(`Started instance ${instanceId} at ${now}`);
  }
};

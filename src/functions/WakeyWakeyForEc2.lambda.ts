const AWS = require('aws-sdk'); // eslint-disable-line
const ec2 = new AWS.EC2();

const instanceId = process.env.INSTANCE_ID;
const filters = process.env.INSTANCE_FILTERS;

export const handler = async (event: any) => {
  console.log({ event });
  console.log({ instanceId });

  console.log('Getting instance details');

  if (!instanceId && !filters) {
    console.error('You must have either an INSTANCE_ID or INSTANCE_TAGS in your environment variables.');
  }

  console.log('Getting instance details');

  let params: any = {
    InstanceIds: [],
  };

  if (instanceId) {
    params.InstanceIds.push(instanceId);
  } else if (filters) {
    params.Filters = JSON.parse(filters);
  }

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

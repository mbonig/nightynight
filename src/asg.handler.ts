const AWS = require('aws-sdk'); // eslint-disable-line
const asg = new AWS.AutoScaling();

const { AUTO_SCALING_GROUP_NAME: autoScalingGroupName, DESIRED_CAPACITY: desiredCapacity } = process.env;
export const handler = async (event: any) => {
  console.log({ event });
  console.log({ autoScalingGroupName, desiredCapacity });

  console.log('Getting instance details');

  let params = {
    AutoScalingGroupName: autoScalingGroupName,
    DesiredCapacity: parseInt(desiredCapacity!),
    HonorCooldown: true,
  };

  await asg.setDesiredCapacity(params).promise();
  let now = new Date().toISOString();
  console.log(`Scaled ASG ${autoScalingGroupName} to ${desiredCapacity} at ${now}`);

};

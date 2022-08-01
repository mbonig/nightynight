const AWS = require('aws-sdk'); // eslint-disable-line
const rds = new AWS.RDS();

const dbInstanceIdentifier = process.env.DB_INSTANCE_IDENTIFIER;
export const handler = async (event: any) => {
  console.log({ event });
  console.log({ dbInstanceIdentifier });
  console.log('Getting instance details');
  let params = {
    DBInstanceIdentifier: dbInstanceIdentifier,
  };
  const {
    DBInstances: [instanceDetails],
  } = await rds.describeDBInstances(params).promise();
  console.log({ instanceDetails });
  if (!instanceDetails) {
    throw new Error("Couldn't find instance details. Weird... if the instance was terminated, this app should be too");
  }
  if (instanceDetails.DBInstanceStatus === 'stopped') {
    console.log('starting the instance');
    await rds.startDBInstance({ DBInstanceIdentifier: dbInstanceIdentifier }).promise();
    let now = new Date().toISOString();
    console.log(`Started instance ${dbInstanceIdentifier} at ${now}`);
  } else {
    console.warn(`Not starting instance because the status is: ${instanceDetails.DBInstanceStatus}`);
  }
};

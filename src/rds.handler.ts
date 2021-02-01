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
  if (instanceDetails.DBInstanceStatus === 'available') {
    console.log('stopping the instance');
    await rds.stopDBInstance({ DBInstanceIdentifier: dbInstanceIdentifier }).promise();
    let now = new Date().toISOString();
    console.log(`Stopped instance ${dbInstanceIdentifier} at ${now}`);
  } else {
    console.warn(`Not stopping instance because the status is: ${instanceDetails.DBInstanceStatus}`);
  }
};

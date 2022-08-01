import { ECSClient, UpdateServiceCommand, UpdateServiceCommandInput } from '@aws-sdk/client-ecs';

// https://github.com/aws/aws-sdk-js-v3/issues/3063
declare global {
  interface ReadableStream {}
}

export const CLUSTER_NAME_KEY = 'CLUSTER_NAME';
export const SERVICE_NAME_KEY = 'SERVICE_NAME';
export const DESIRED_CAPACITY_KEY = 'DESIRED_CAPACITY';
const {
  [CLUSTER_NAME_KEY]: clusterName,
  [SERVICE_NAME_KEY]: serviceName,
  [DESIRED_CAPACITY_KEY]: desiredCapacity,
} = process.env;
export const handler = async (event: any) => {
  console.log({ event });
  console.log({ clusterName, serviceName, desiredCapacity });

  if (!clusterName) {
    throw new Error(`Please provide a ${CLUSTER_NAME_KEY}`);
  }
  if (!serviceName) {
    throw new Error(`Please provide a ${SERVICE_NAME_KEY}`);
  }
  if (!desiredCapacity) {
    throw new Error(`Please provide a ${DESIRED_CAPACITY_KEY}`);
  }

  console.log('Getting instance details');
  const ecsClient = new ECSClient({});
  let params: UpdateServiceCommandInput = {
    cluster: clusterName,
    service: serviceName,
    desiredCount: parseInt(desiredCapacity),
  };

  await ecsClient.send(new UpdateServiceCommand(params));
  let now = new Date().toISOString();
  console.log(`Scaled ECS ${serviceName} to ${desiredCapacity} at ${now}`);
};

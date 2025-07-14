const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@matthewbonig/nightynight',
  repositoryUrl: 'https://github.com/mbonig/nightynight',
  author: 'matthew.bonig@gmail.com',
  description: 'A CDK construct that will automatically stop a running EC2 instance at a given time.',
  authorAddress: 'matthew.bonig@gmail.com',
  authorName: 'Matthew Bonig',
  cdkVersion: '2.202.0',
  jsiiVersion: '^5.8',
  projenrcTs: true,
  majorVersion: 2,
  repository: 'https://github.com/mbonig/nightynight',
  defaultReleaseBranch: 'main',

  deps: [
    '@aws-sdk/client-ecs',
    'cdk-iam-floyd',
  ],
  peerDeps: [],
  bundledDeps: [
    'aws-sdk',
    '@aws-sdk/client-ecs',
    'cdk-iam-floyd',
  ],
  devDeps: [
    'yarn',
    'esbuild',
    'eslint',
  ],
  keywords: [
    'cdk',
    'ec2',
    'rds',
    'cron',
  ],
  publishToPypi: {
    module: 'mbonig.nightynight',
    distName: 'mbonig.nightynight',
  },
  buildWorkflow: true,
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_22_X,

  },
});

project.addFields({
  main: 'lib/index.js',
  types: 'lib/index.d.ts',
  public: true,
});

project.gitignore.exclude('cdk.context.json', '.cdk.staging/', '.idea/', '.parcel-cache/', 'cdk.out/');
project.npmignore.exclude('cdk.context.json', '.cdk.staging/', '.idea/', '.parcel-cache/', 'cdk.out/');

project.synth();

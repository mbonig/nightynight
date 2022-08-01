const { awscdk } = require('projen');

const dependencies = [
  'cdk-iam-floyd',
];
const project = new awscdk.AwsCdkConstructLibrary({
  name: '@matthewbonig/nightynight',
  repositoryUrl: 'https://github.com/mbonig/nightynight',
  author: 'matthew.bonig@gmail.com',
  description: 'A CDK construct that will automatically stop a running EC2 instance at a given time.',
  authorAddress: 'matthew.bonig@gmail.com',
  authorName: 'Matthew Bonig',
  cdkVersion: '2.30.0',
  projenrcTs: true,
  majorVersion: 2,
  repository: 'https://github.com/mbonig/nightynight',
  defaultReleaseBranch: 'main',
  deps: dependencies,
  peerDeps: dependencies,
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
  python: {
    module: 'mbonig.nightynight',
    distName: 'mbonig.nightynight',
  },
  dependabot: true,
  buildWorkflow: true,
});

project.addFields({
  main: 'lib/index.js',
  types: 'lib/index.d.ts',
  awscdkio: {
    twitter: 'mattbonig',
  },
  public: true,
});

project.gitignore.exclude('cdk.context.json', '.cdk.staging/', '.idea/', '.parcel-cache/', 'cdk.out/');
project.npmignore.exclude('cdk.context.json', '.cdk.staging/', '.idea/', '.parcel-cache/', 'cdk.out/');
project.npmignore.include('lib/*.handler.ts');
project.synth();

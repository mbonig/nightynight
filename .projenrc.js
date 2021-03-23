const { AwsCdkConstructLibrary } = require('projen');

let dependencies = [
  'cdk-iam-floyd',
];
const project = new AwsCdkConstructLibrary({
  name: '@matthewbonig/nightynight',
  description: 'A CDK construct that will automatically stop a running EC2 instance at a given time.',
  authorAddress: 'matthew.bonig@gmail.com',
  authorName: 'Matthew Bonig',
  cdkVersion: '1.89.0',
  repository: 'https://github.com/mbonig/nightynight',
  defaultReleaseBranch: 'master',
  deps: dependencies,
  peerDeps: dependencies,
  devDeps: [
    'yarn',
    'esbuild',
  ],
  cdkDependencies: [
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/aws-rds',
    '@aws-cdk/core',
  ],
  keywords: [
    'cdk',
    'ec2',
  ],
  python: {
    module: 'mbonig.nightynight',
    distName: 'mbonig.nightynight',
  },
  dependabot: true,
  buildWorkflow: true,
  releaseWorkflow: false,
  antitamper: false,
  cdkVersionPinning: true,
});

project.addTask('compile', {
  exec: 'jsii --silence-warnings=reserved-word --no-fix-peer-dependencies && jsii-docgen && cp src/*.handler.ts lib/',
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

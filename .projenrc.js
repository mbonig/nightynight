const {AwsCdkConstructLibrary} = require('projen');

let dependencies = {
    "cdk-iam-floyd": "0.54.1",
    "yarn": "1.22.10",
    "parcel": "v2.0.0-beta.1"
};
const project = new AwsCdkConstructLibrary({
    name: "@matthewbonig/nightynight",
    description: "A CDK construct that will automatically stop a running EC2 instance at a given time.",
    authorAddress: "matthew.bonig@gmail.com",
    authorName: "Matthew Bonig",
    cdkVersion: "1.65.0",
    repository: "git@github.com:mbonig/nightynight.git",
    bin: {
        "nightynight": "bin/nightynight.js"
    },
    dependencies: dependencies,
    peerDependencies: dependencies,
    cdkDependencies: [
        "@aws-cdk/aws-ec2",
        "@aws-cdk/aws-events",
        "@aws-cdk/aws-events-targets",
        "@aws-cdk/aws-iam",
        "@aws-cdk/aws-lambda",
        "@aws-cdk/aws-lambda-nodejs",
        "@aws-cdk/core"
    ],
    keywords: [
        "cdk",
        "ec2"
    ],
    python: {
        module: "mbonig.nightynight",
        distName: "mbonig.nightynight"
    },
    dependabot: false,
    buildWorkflow: false,
    releaseWorkflow: false
});


project.addFields({
    main: "lib/nightynight.js",
    types: "lib/nightynight.d.ts",
    awscdkio: {
        twitter: "mattbonig"
    },
    public: true
});

project.gitignore.exclude("cdk.context.json", ".cdk.staging/", ".idea/", ".parcel-cache/", "cdk.out/");
project.npmignore.exclude("cdk.out", ".cdk.staging");

project.synth();

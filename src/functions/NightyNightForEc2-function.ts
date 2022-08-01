// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for NightyNightForEc2Function
 */
export interface NightyNightForEc2FunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/functions/NightyNightForEc2.
 */
export class NightyNightForEc2Function extends lambda.Function {
  constructor(scope: Construct, id: string, props?: NightyNightForEc2FunctionProps) {
    super(scope, id, {
      description: 'src/functions/NightyNightForEc2.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs14.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/functions/NightyNightForEc2.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}
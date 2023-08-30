// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for NightyNightForAsgFunction
 */
export interface NightyNightForAsgFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/functions/NightyNightForAsg.
 */
export class NightyNightForAsgFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: NightyNightForAsgFunctionProps) {
    super(scope, id, {
      description: 'src/functions/NightyNightForAsg.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs16.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/functions/NightyNightForAsg.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}
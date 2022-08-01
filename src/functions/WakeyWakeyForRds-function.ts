// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for WakeyWakeyForRdsFunction
 */
export interface WakeyWakeyForRdsFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/functions/WakeyWakeyForRds.
 */
export class WakeyWakeyForRdsFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: WakeyWakeyForRdsFunctionProps) {
    super(scope, id, {
      description: 'src/functions/WakeyWakeyForRds.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs14.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/functions/WakeyWakeyForRds.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}
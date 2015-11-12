# cloudformation-message-parser
Parses AWS CloudFormation notifications into JSON objects

[![Build Status](https://travis-ci.org/joshuakarjala/cloudformation-message-parser.svg)](https://travis-ci.org/joshuakarjala/cloudformation-message-parser)[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Takes the CloudFormation notification format
```
StackId='arn:aws:cloudformation:eu-west-1:635320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'
Timestamp='2015-11-12T13:53:59.739Z'
EventId='d323fa40-8944-11e5-b848-500c3d47ea36'
LogicalResourceId='parser'
Namespace='660320775304'
PhysicalResourceId='arn:aws:cloudformation:eu-west-1:660320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'
PrincipalId='AIDAJNV7N77LEVFYQOSNI'
ResourceProperties='null'
ResourceStatus='CREATE_COMPLETE'
ResourceStatusReason=''
ResourceType='AWS::CloudFormation::Stack'
StackName='parser'
```
and turns it into
```javascript
{ 
  StackId: 'arn:aws:cloudformation:eu-west-1:635320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36',
  Timestamp: '2015-11-12T13:53:59.739Z',
  EventId: 'd323fa40-8944-11e5-b848-500c3d47ea36',
  LogicalResourceId: 'parser',
  Namespace: '660320775304',
  PhysicalResourceId: 'arn:aws:cloudformation:eu-west-1:660320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36',
  PrincipalId: 'AIDAJNV7N77LEVFYQOSNI',
  ResourceProperties: 'null',
  ResourceStatus: 'CREATE_COMPLETE',
  ResourceStatusReason: '',
  ResourceType: 'AWS::CloudFormation::Stack',
  StackName: 'parser' 
}
```

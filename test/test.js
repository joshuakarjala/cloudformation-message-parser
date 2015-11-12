var test = require('tape');
var parser = require('../');

var testMessage = "StackId='arn:aws:cloudformation:eu-west-1:635320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'\nTimestamp='2015-11-12T13:53:59.739Z'\nEventId='d323fa40-8944-11e5-b848-500c3d47ea36'\nLogicalResourceId='parser'\nNamespace='660320775304'\nPhysicalResourceId='arn:aws:cloudformation:eu-west-1:660320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'\nPrincipalId='AIDAJNV7N77LEVFYQOSNI'\nResourceProperties='null'\nResourceStatus='CREATE_COMPLETE'\nResourceStatusReason=''\nResourceType='AWS::CloudFormation::Stack'\nStackName='parser'";

var compareObject = [
  {
    key: 'StackId',
    value: 'arn:aws:cloudformation:eu-west-1:635320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'
  },
  {
    key: 'Timestamp',
    value: '2015-11-12T13:53:59.739Z'
  },
  {
    key: 'EventId',
    value: 'd323fa40-8944-11e5-b848-500c3d47ea36'
  },
  {
    key: 'LogicalResourceId', value: 'parser'
  },
  {
    key: 'Namespace', value: '660320775304'
  },
  {
    key: 'PhysicalResourceId',
    value: 'arn:aws:cloudformation:eu-west-1:660320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'
  },
  {
    key: 'PrincipalId', value: 'AIDAJNV7N77LEVFYQOSNI'
  },
  {
    key: 'ResourceProperties', value: 'null'
  },
  {
    key: 'ResourceStatus', value: 'CREATE_COMPLETE'
  },
  {
    key: 'ResourceStatusReason', value: ''
  },
  {
    key: 'ResourceType', value: 'AWS::CloudFormation::Stack'
  },
  {
    key: 'StackName', value: 'parser'
  }
];

test('parse', function (t) {
  var message = parser(testMessage);
  t.deepEqual(message, compareObject);
  t.end();
});

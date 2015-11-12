var test = require('tape');
var parser = require('../');

var testMessage = "StackId='arn:aws:cloudformation:eu-west-1:635320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'\nTimestamp='2015-11-12T13:53:59.739Z'\nEventId='d323fa40-8944-11e5-b848-500c3d47ea36'\nLogicalResourceId='parser'\nNamespace='660320775304'\nPhysicalResourceId='arn:aws:cloudformation:eu-west-1:660320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36'\nPrincipalId='AIDAJNV7N77LEVFYQOSNI'\nResourceProperties='null'\nResourceStatus='CREATE_COMPLETE'\nResourceStatusReason=''\nResourceType='AWS::CloudFormation::Stack'\nStackName='parser'";

var compareObject = {
  'StackId': 'arn:aws:cloudformation:eu-west-1:635320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36',
  'Timestamp': '2015-11-12T13:53:59.739Z',
  'EventId': 'd323fa40-8944-11e5-b848-500c3d47ea36',
  'LogicalResourceId': 'parser',
  'Namespace': '660320775304',
  'PhysicalResourceId': 'arn:aws:cloudformation:eu-west-1:660320775304:stack/parser/12a9fda0-8944-11e5-b848-500c3d47ea36',
  'PrincipalId': 'AIDAJNV7N77LEVFYQOSNI',
  'ResourceProperties': 'null',
  'ResourceStatus': 'CREATE_COMPLETE',
  'ResourceStatusReason': '',
  'ResourceType': 'AWS::CloudFormation::Stack',
  'StackName': 'parser'
};

test('parse', function (t) {
  var message = parser(testMessage);
  t.deepEqual(message, compareObject);
  t.end();
});

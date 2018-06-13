/*
 * Copyright © 2017 Contguard
 */
export default angular.module('thingsboard.ruleChain.config.types', [])
    .constant('ruleNodeTypes',
        {
            messageType: {
                'POST_ATTRIBUTES_REQUEST': {
                    name: 'Post attributes',
                    value: 'POST_ATTRIBUTES_REQUEST'
                },
                'POST_TELEMETRY_REQUEST': {
                    name: 'Post telemetry',
                    value: 'POST_TELEMETRY_REQUEST'
                },
                'TO_SERVER_RPC_REQUEST': {
                    name: 'RPC Request from Device',
                    value: 'TO_SERVER_RPC_REQUEST'
                },
                'RPC_CALL_FROM_SERVER_TO_DEVICE': {
                    name: 'RPC Request to Device',
                    value: 'RPC_CALL_FROM_SERVER_TO_DEVICE'
                },
                'ACTIVITY_EVENT': {
                    name: 'Activity Event',
                    value: 'ACTIVITY_EVENT'
                },
                'INACTIVITY_EVENT': {
                    name: 'Inactivity Event',
                    value: 'INACTIVITY_EVENT'
                },
                'CONNECT_EVENT': {
                    name: 'Connect Event',
                    value: 'CONNECT_EVENT'
                },
                'DISCONNECT_EVENT': {
                    name: 'Disconnect Event',
                    value: 'DISCONNECT_EVENT'
                },
                'ENTITY_CREATED': {
                    name: 'Entity Created',
                    value: 'ENTITY_CREATED'
                },
                'ENTITY_UPDATED': {
                    name: 'Entity Updated',
                    value: 'ENTITY_UPDATED'
                },
                'ENTITY_DELETED': {
                    name: 'Entity Deleted',
                    value: 'ENTITY_DELETED'
                },
                'ENTITY_ASSIGNED': {
                    name: 'Entity Assigned',
                    value: 'ENTITY_ASSIGNED'
                },
                'ENTITY_UNASSIGNED': {
                    name: 'Entity Unassigned',
                    value: 'ENTITY_UNASSIGNED'
                },
                'ATTRIBUTES_UPDATED': {
                    name: 'Attributes Updated',
                    value: 'ATTRIBUTES_UPDATED'
                },
                'ATTRIBUTES_DELETED': {
                    name: 'Attributes Deleted',
                    value: 'ATTRIBUTES_DELETED'
                },
                'ADDED_TO_ENTITY_GROUP': {
                    name: 'Added to Group',
                    value: 'ADDED_TO_ENTITY_GROUP'
                },
                'REMOVED_FROM_ENTITY_GROUP': {
                    name: 'Removed from Group',
                    value: 'REMOVED_FROM_ENTITY_GROUP'
                }
            },
            originatorSource: {
                'CUSTOMER': {
                    name: 'tb.rulenode.originator-customer',
                    value: 'CUSTOMER'
                },
                'TENANT': {
                    name: 'tb.rulenode.originator-tenant',
                    value: 'TENANT'
                },
                'RELATED': {
                    name: 'tb.rulenode.originator-related',
                    value: 'RELATED'
                }
            },
            httpRequestType: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ],
            sqsQueueType: {
                'STANDARD': {
                    name: 'tb.rulenode.sqs-queue-standard',
                    value: 'STANDARD'
                },
                'FIFO': {
                    name: 'tb.rulenode.sqs-queue-fifo',
                    value: 'FIFO'
                }
            },
            mqttCredentialTypes: {
                anonymous:  {
                    value: "anonymous",
                    name: "tb.rulenode.credentials-anonymous"
                },
                basic: {
                    value: "basic",
                    name: "tb.rulenode.credentials-basic"
                },
                'cert.PEM': {
                    value: "cert.PEM",
                    name: "tb.rulenode.credentials-pem"
                }
            }
        }
    ).name;

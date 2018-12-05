/*
 * Copyright © 2017 Contguard
 */
export default angular.module('thingsboard.ruleChain.config.types', [])
    .constant('ruleNodeTypes',
        {
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
            fetchModeType: [
                'FIRST',
                'LAST',
                'ALL'
            ],
            httpRequestType: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ],
            transactionEntityType: [
                'Originator',
                'Tenant'
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
            timeUnit: {
                "MILLISECONDS": {
                    value: "MILLISECONDS",
                    name: "tb.rulenode.time-unit-milliseconds"
                },
                "SECONDS": {
                    value: "SECONDS",
                    name: "tb.rulenode.time-unit-seconds"
                },
                "MINUTES": {
                    value: "MINUTES",
                    name: "tb.rulenode.time-unit-minutes"
                },
                "HOURS": {
                    value: "HOURS",
                    name: "tb.rulenode.time-unit-hours"
                },
                "DAYS": {
                    value: "DAYS",
                    name: "tb.rulenode.time-unit-days"
                }
            },
            mqttCredentialTypes: {
                anonymous: {
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

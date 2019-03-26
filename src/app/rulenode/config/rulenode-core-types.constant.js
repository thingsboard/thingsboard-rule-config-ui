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
            fetchModeType:[
                'FIRST',
                'LAST',
                'ALL'
            ],
            samplingOrder: [
                'ASC',
                'DESC'
            ],
            httpRequestType: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ],
            entityDetails: {
                'COUNTRY': {
                    name: 'tb.rulenode.entity-details-country',
                    value: 'COUNTRY'
                },
                'STATE': {
                    name: 'tb.rulenode.entity-details-state',
                    value: 'STATE'
                },
                'ZIP': {
                    name: 'tb.rulenode.entity-details-zip',
                    value: 'ZIP'
                },
                'ADDRESS': {
                    name: 'tb.rulenode.entity-details-address',
                    value: 'ADDRESS'
                },
                'ADDRESS2': {
                    name: 'tb.rulenode.entity-details-address2',
                    value: 'ADDRESS2'
                },
                'PHONE': {
                    name: 'tb.rulenode.entity-details-phone',
                    value: 'PHONE'
                },
                'EMAIL': {
                    name: 'tb.rulenode.entity-details-email',
                    value: 'EMAIL'
                },
                'ADDITIONAL_INFO': {
                    name: 'tb.rulenode.entity-details-additional_info',
                    value: 'ADDITIONAL_INFO'
                },
            },
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

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
                },
                'ALARM_ORIGINATOR': {
                    name: 'tb.rulenode.originator-alarm-originator',
                    value: 'ALARM_ORIGINATOR'
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
                'TITLE': {
                    name: 'tb.rulenode.entity-details-title',
                    value: 'TITLE'
                },
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
            perimeterType: {
                'CIRCLE': {
                    name: 'tb.rulenode.perimeter-circle',
                    value: 'CIRCLE'
                },
                'POLYGON': {
                    name: 'tb.rulenode.perimeter-polygon',
                    value: 'POLYGON'
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
            rangeUnit: {
                "METER": {
                    value: "METER",
                    name: "tb.rulenode.range-unit-meter"
                },
                "KILOMETER": {
                    value: "KILOMETER",
                    name: "tb.rulenode.range-unit-kilometer"
                },
                "FOOT": {
                    value: "FOOT",
                    name: "tb.rulenode.range-unit-foot"
                },
                "MILE": {
                    value: "MILE",
                    name: "tb.rulenode.range-unit-mile"
                },
                "NAUTICAL_MILE": {
                    value: "NAUTICAL_MILE",
                    name: "tb.rulenode.range-unit-nautical-mile"
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
            },
            toBytesStandartCharsetTypes: {
                "US-ASCII":  {
                    value: "US-ASCII",
                    name: "tb.rulenode.charset-us-ascii"
                },
                "ISO-8859-1": {
                    value: "ISO-8859-1",
                    name: "tb.rulenode.charset-iso-8859-1"
                },
                'UTF-8': {
                    value: "UTF-8",
                    name: "tb.rulenode.charset-utf-8"
                },
                'UTF-16BE': {
                    value: "UTF-16BE",
                    name: "tb.rulenode.charset-utf-16be"
                },
                'UTF-16LE': {
                    value: "UTF-16LE",
                    name: "tb.rulenode.charset-utf-16le"
                },
                'UTF-16': {
                    value: "UTF-16",
                    name: "tb.rulenode.charset-utf-16"
                }
            }
        }
    ).name;

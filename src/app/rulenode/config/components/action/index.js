/*
 * Copyright © 2016-2018 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import TimeseriesConfigDirective from './timeseries-config.directive';
import AttributesConfigDirective from './attributes-config.directive';
import GeneratorConfigDirective from './generator-config.directive';
import CreateAlarmConfigDirective from './create-alarm-config.directive';
import ClearAlarmConfigDirective from './clear-alarm-config.directive';
import LogConfigDirective from './log-config.directive';
import RpcReplyConfigDirective from './rpc-reply-config.directive';
import RpcRequestConfigDirective from './rpc-request-config.directive';
import RestApiCallConfigDirective from './rest-api-call-config.directive';
import KafkaConfigDirective from './kafka-config.directive';
import SnsConfigDirective from './sns-config.directive';
import SqsConfigDirective from './sqs-config.directive';
import RabbitMqConfigDirective from './rabbit-mq-config.directive';
import MqttConfigDirective from './mqtt-config.directive';
import SendEmailConfigDirective from './send-email-config.directive';
import MsgDelayConfigDirective from './msg-delay-config.directive';
import MsgCountConfigDirective from './msg-count-config.directive';
import AssignToCustomerConfigDirective from './assign-customer-config.directive';
import UnAssignToCustomerConfigDirective from './unassign-customer-config.directive';
import DeleteRelationConfigDirective from './delete-relation-config.directive';
import CreateRelationConfigDirective from './create-relation-config.directive';
import saveToCustomTableConfigDirective from './save-to-custom-table-config.directive';
import gpsGeoActionConfigDirective from './gps-geo-action-config.directive';
import gpsGeoFilterConfigDirective from './gps-geo-filter-config.directive';

export default angular.module('thingsboard.ruleChain.config.action', [])
    .directive('tbActionNodeTimeseriesConfig', TimeseriesConfigDirective)
    .directive('tbActionNodeAttributesConfig', AttributesConfigDirective)
    .directive('tbActionNodeGeneratorConfig', GeneratorConfigDirective)
    .directive('tbActionNodeCreateAlarmConfig', CreateAlarmConfigDirective)
    .directive('tbActionNodeClearAlarmConfig', ClearAlarmConfigDirective)
    .directive('tbActionNodeLogConfig', LogConfigDirective)
    .directive('tbActionNodeRpcReplyConfig', RpcReplyConfigDirective)
    .directive('tbActionNodeRpcRequestConfig', RpcRequestConfigDirective)
    .directive('tbActionNodeRestApiCallConfig', RestApiCallConfigDirective)
    .directive('tbActionNodeKafkaConfig', KafkaConfigDirective)
    .directive('tbActionNodeSnsConfig', SnsConfigDirective)
    .directive('tbActionNodeSqsConfig', SqsConfigDirective)
    .directive('tbActionNodeRabbitMqConfig', RabbitMqConfigDirective)
    .directive('tbActionNodeMqttConfig', MqttConfigDirective)
    .directive('tbActionNodeSendEmailConfig', SendEmailConfigDirective)
    .directive('tbActionNodeMsgDelayConfig', MsgDelayConfigDirective)
    .directive('tbActionNodeMsgCountConfig', MsgCountConfigDirective)
    .directive('tbActionNodeAssignToCustomerConfig', AssignToCustomerConfigDirective)
    .directive('tbActionNodeUnAssignToCustomerConfig', UnAssignToCustomerConfigDirective)
    .directive('tbActionNodeDeleteRelationConfig', DeleteRelationConfigDirective)
    .directive('tbActionNodeCreateRelationConfig', CreateRelationConfigDirective)
    .directive('tbActionNodeCustomTableConfig', saveToCustomTableConfigDirective)
    .directive('tbActionNodeGpsGeofencingConfig', gpsGeoActionConfigDirective)
    .directive('tbFilterNodeGpsGeofencingConfig', gpsGeoFilterConfigDirective)
    .name;

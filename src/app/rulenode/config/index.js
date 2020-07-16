/*
 * Copyright © 2016-2020 The Thingsboard Authors
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

import ruleNodeTypes from './rulenode-core-types.constant';

import filterComponents from './components/filter';
import enrichmentComponents from './components/enrichment';
import transformComponents from './components/transform';
import actionComponents from './components/action';

import EmptyConfigDirective from './components/empty-config.directive';

import RelationsQueryConfigDirective from './components/relations-query-config.directive';
import DeviceRelationsQueryConfigDirective from './components/device-relations-query-config.directive';
import KvMapConfigDirective from './components/kv-map-config.directive';

import RuleNodeCoreConfig from './rulenode-core-config';

export default angular.module('thingsboard.ruleChain.config',
    [ruleNodeTypes, filterComponents, enrichmentComponents, transformComponents, actionComponents])
    .directive('tbNodeEmptyConfig', EmptyConfigDirective)
    .directive('tbRelationsQueryConfig', RelationsQueryConfigDirective)
    .directive('tbDeviceRelationsQueryConfig', DeviceRelationsQueryConfigDirective)
    .directive('tbKvMapConfig', KvMapConfigDirective)
    .config(RuleNodeCoreConfig)
    .name;

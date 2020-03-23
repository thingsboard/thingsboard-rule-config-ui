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

import OriginatorAttributesConfigDirective from './originator-attributes-config.directive';
import OriginatorFieldsConfigDirective from './originator-fields-config.directive';
import DeviceAttributesConfigDirective from './device-attributes-config.directive';
import RelatedAttributesConfigDirective from './related-attributes-config.directive';
import CustomerAttributesConfigDirective from './customer-attributes-config.directive';
import TenantAttributesConfigDirective from './tenant-attributes-config.directive';
import GetTelemetryConfigDirective from './get-telemtry-from-database-config.directive';
import EntityDetailsConfigDirective from './entity-details-config.directive';


export default angular.module('thingsboard.ruleChain.config.enrichment', [])
    .directive('tbEnrichmentNodeOriginatorAttributesConfig', OriginatorAttributesConfigDirective)
    .directive('tbEnrichmentNodeOriginatorFieldsConfig', OriginatorFieldsConfigDirective)
    .directive('tbEnrichmentNodeDeviceAttributesConfig', DeviceAttributesConfigDirective)
    .directive('tbEnrichmentNodeRelatedAttributesConfig', RelatedAttributesConfigDirective)
    .directive('tbEnrichmentNodeCustomerAttributesConfig', CustomerAttributesConfigDirective)
    .directive('tbEnrichmentNodeTenantAttributesConfig', TenantAttributesConfigDirective)
    .directive('tbEnrichmentNodeGetTelemetryFromDatabase',GetTelemetryConfigDirective)
    .directive('tbEnrichmentNodeEntityDetailsConfig',EntityDetailsConfigDirective)
    .name;

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

import './generator-config.scss';

/* eslint-disable import/no-unresolved, import/default */

import generatorConfigTemplate from './generator-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function GeneratorConfigDirective($compile, $translate, types, ruleNodeScriptTest) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = generatorConfigTemplate;
        element.html(template);

        scope.types = types;

        scope.originator = null;

        scope.$watch('configuration', function (newConfiguration, oldConfiguration) {
            if (!angular.equals(newConfiguration, oldConfiguration)) {
                ngModelCtrl.$setViewValue(scope.configuration);
            }
        });

        ngModelCtrl.$render = function () {
            scope.configuration = ngModelCtrl.$viewValue;
            if (scope.configuration.originatorId && scope.configuration.originatorType) {
                scope.originator = {
                    id: scope.configuration.originatorId,
                    entityType: scope.configuration.originatorType
                };
            } else {
                scope.originator = null;
            }
            scope.$watch('originator', function (newVal, prevVal) {
                if (!angular.equals(newVal, prevVal)) {
                    if (!scope.originator) {
                        ngModelCtrl.$viewValue.originatorId = null;
                        ngModelCtrl.$viewValue.originatorType = null;
                    } else {
                        ngModelCtrl.$viewValue.originatorId = scope.originator.id;
                        ngModelCtrl.$viewValue.originatorType = scope.originator.entityType;
                    }
                }
            }, true);
        };

        scope.testScript = function($event) {
            var script = angular.copy(scope.configuration.jsScript);

            ruleNodeScriptTest.testNodeScript($event,
                script,
                "generate",
                $translate.instant('tb.rulenode.generator')+'',
                "Generate",
                ['prevMsg', 'prevMetadata', 'prevMsgType'],
                scope.ruleNodeId
            ).then(
                (script) => {
                    scope.configuration.jsScript = script;
                    ngModelCtrl.$setDirty();
                }
            );
        };

        $compile(element.contents())(scope);
    };

    return {
        restrict: "E",
        require: "^ngModel",
        scope: {
            ruleNodeId:'='
        },
        link: linker
    };
}

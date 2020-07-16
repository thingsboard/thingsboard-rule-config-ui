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

/* eslint-disable import/no-unresolved, import/default */

import createAlarmConfigTemplate from './create-alarm-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function CreateAlarmConfigDirective($compile, $translate, types, ruleNodeScriptTest) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = createAlarmConfigTemplate;
        element.html(template);

        scope.types = types;

        scope.$watch('configuration', function (newConfiguration, oldConfiguration) {
            if (!angular.equals(newConfiguration, oldConfiguration)) {
                ngModelCtrl.$setViewValue(scope.configuration);
            }
        });

        ngModelCtrl.$render = function () {
            scope.configuration = ngModelCtrl.$viewValue;
            if(!scope.configuration.hasOwnProperty("relationTypes")) {
                scope.configuration.relationTypes = [];
            }
        };

        scope.testDetailsBuildJs = function($event) {
            var script = angular.copy(scope.configuration.alarmDetailsBuildJs);

            ruleNodeScriptTest.testNodeScript($event,
                script,
                "json",
                $translate.instant('tb.rulenode.details')+'',
                'Details',
                ['msg', 'metadata', 'msgType'],
                scope.ruleNodeId
            ).then(
                (script) => {
                    scope.configuration.alarmDetailsBuildJs = script;
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

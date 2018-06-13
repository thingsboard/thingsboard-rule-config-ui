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

/* eslint-disable import/no-unresolved, import/default */

import switchConfigTemplate from './switch-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function SwitchConfigDirective($compile, $translate, ruleNodeScriptTest) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = switchConfigTemplate;
        element.html(template);

        scope.$watch('configuration', function (newConfiguration, oldConfiguration) {
            if (!angular.equals(newConfiguration, oldConfiguration)) {
                ngModelCtrl.$setViewValue(scope.configuration);
            }
        });

        ngModelCtrl.$render = function () {
            scope.configuration = ngModelCtrl.$viewValue;
        };

        scope.testScript = function($event) {
            var script = angular.copy(scope.configuration.jsScript);
            ruleNodeScriptTest.testNodeScript($event,
                script,
                "switch",
                $translate.instant('tb.rulenode.switch')+'',
                "Switch",
                ['msg', 'metadata', 'msgType'],
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

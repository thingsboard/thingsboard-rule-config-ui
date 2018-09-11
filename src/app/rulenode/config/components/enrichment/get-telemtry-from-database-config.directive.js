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
import getTelemetryFromDataBaseConfigTemplate from "./get-telemetry-from-database-config.tpl.html";
import "./get-telemetry-from-database-config.scss";

/*@ngInject*/
export default function GetTelemetryConfigDirective($compile, $mdConstant, ruleNodeTypes) {


    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = getTelemetryFromDataBaseConfigTemplate;
        element.html(template);

        const semicolon = 186;
        scope.separatorKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, semicolon];

        scope.ruleNodeTypes = ruleNodeTypes;

        scope.aggPeriodTimeUnits = {};
        scope.aggPeriodTimeUnits["MINUTES"] = ruleNodeTypes.timeUnit["MINUTES"];
        scope.aggPeriodTimeUnits["HOURS"] = ruleNodeTypes.timeUnit["HOURS"];
        scope.aggPeriodTimeUnits["DAYS"] = ruleNodeTypes.timeUnit["DAYS"];
        scope.aggPeriodTimeUnits["MILLISECONDS"] = ruleNodeTypes.timeUnit["MILLISECONDS"];
        scope.aggPeriodTimeUnits["SECONDS"] = ruleNodeTypes.timeUnit["SECONDS"];


        scope.$watch('configuration', function (newConfiguration, oldConfiguration) {
            if (!angular.equals(newConfiguration, oldConfiguration)) {
                ngModelCtrl.$setViewValue(scope.configuration);
            }
        });

        ngModelCtrl.$render = function () {
            scope.configuration = ngModelCtrl.$viewValue;
        };

        $compile(element.contents())(scope);
    };

    return {
        restrict: "E",
        require: "^ngModel",
        scope: {},
        link: linker
    };
}


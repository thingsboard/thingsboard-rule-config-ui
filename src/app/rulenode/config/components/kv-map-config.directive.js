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

import kvMapConfigTemplate from './kv-map-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

import './kv-map-config.scss';

/*@ngInject*/
export default function KvMapConfigDirective($compile) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = kvMapConfigTemplate;
        element.html(template);

        scope.ngModelCtrl = ngModelCtrl;

        scope.removeKeyVal = removeKeyVal;
        scope.addKeyVal = addKeyVal;

        scope.kvList = [];

        scope.$watch('query', function (newConfiguration, oldConfiguration) {
            if (!angular.equals(newConfiguration, oldConfiguration)) {
                ngModelCtrl.$setViewValue(scope.query);
            }
        });

        ngModelCtrl.$render = function () {
            if (ngModelCtrl.$viewValue) {
                var value = ngModelCtrl.$viewValue;
                scope.kvList.length = 0;
                for (var key in value) {
                    scope.kvList.push({
                        key: key,
                        value: value[key]
                    });
                }
            }
            scope.$watch('kvList', function (newVal, prevVal) {
                if (!angular.equals(newVal, prevVal)) {
                    updateValue();
                }
            }, true);
            updateValidity();
        };

        function removeKeyVal(index) {
            if (index > -1) {
                scope.kvList.splice(index, 1);
            }
        }

        function addKeyVal() {
            if (!scope.kvList) {
                scope.kvList = [];
            }
            scope.kvList.push(
                {
                    key: '',
                    value: ''
                }
            );
        }

        function updateValue() {
            var value = {};
            scope.kvList.forEach(function (kvEntry) {
                if (kvEntry.key) {
                    value[kvEntry.key] = kvEntry.value;
                }
            });
            ngModelCtrl.$setViewValue(value);
            updateValidity();
        }

        function updateValidity() {
            var kvMapValid = true;
            if (scope.required && !scope.kvList.length) {
                kvMapValid = false;
            }
            ngModelCtrl.$setValidity('kvMap', kvMapValid);
        }

        $compile(element.contents())(scope);
    };

    return {
        restrict: "E",
        require: "^ngModel",
        scope: {
            required:'=ngRequired',
            disabled:'=ngDisabled',
            requiredText: '=',
            keyText: '=',
            keyRequiredText: '=',
            valText: '=',
            valRequiredText: '='

        },
        link: linker
    };
}

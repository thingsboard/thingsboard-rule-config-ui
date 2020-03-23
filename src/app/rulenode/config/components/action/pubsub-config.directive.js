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

import pubsubConfigTemplate from './pubsub-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function PubsubConfigDirective($compile, ruleNodeTypes) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = pubsubConfigTemplate;
        element.html(template);

        scope.ruleNodeTypes = ruleNodeTypes;

        scope.serviceAccountFileAdded = ($file) => {
            var reader = new FileReader();
            reader.onload = function (event) {
                scope.$apply(function () {
                    if (event.target.result) {
                        ngModelCtrl.$setDirty();
                        var addedFile = event.target.result;
                        if (addedFile && addedFile.length > 0) {
                            scope.configuration.serviceAccountKeyFileName = $file.name;
                            scope.configuration.serviceAccountKey = addedFile;
                        }
                        scope.updateValidity();
                    }
                });
            };
            reader.readAsText($file.file);
        };

        scope.clearServiceAccountFile = () => {
            ngModelCtrl.$setDirty();
            scope.configuration.serviceAccountKeyFileName = null;
            scope.configuration.serviceAccountKey = null;
            scope.updateValidity();
        };

        scope.updateValidity = () => {
            var keysValid = true;
            var config = scope.configuration;
            if (!config.serviceAccountKeyFileName || !config.serviceAccountKey) {
                keysValid = false;
            }
            ngModelCtrl.$setValidity('SAKey', keysValid);
        };

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
        scope: {
            readonly:'=ngReadonly'
        },
        link: linker
    };
}

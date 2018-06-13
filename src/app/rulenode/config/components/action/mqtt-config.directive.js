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

import './mqtt-config.scss';

/* eslint-disable import/no-unresolved, import/default */

import mqttConfigTemplate from './mqtt-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function MqttConfigDirective($compile, $mdExpansionPanel, ruleNodeTypes) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = mqttConfigTemplate;
        element.html(template);

        scope.$mdExpansionPanel = $mdExpansionPanel;
        scope.ruleNodeTypes = ruleNodeTypes;

        scope.credentialsTypeChanged = () => {
            var type = scope.configuration.credentials.type;
            scope.configuration.credentials = {};
            scope.configuration.credentials.type = type;
            scope.updateValidity();
        };

        scope.certFileAdded = ($file, fileType) => {
            var reader = new FileReader();
            reader.onload = function(event) {
                scope.$apply(function() {
                    if(event.target.result) {
                        ngModelCtrl.$setDirty();
                        var addedFile = event.target.result;
                        if (addedFile && addedFile.length > 0) {
                            if(fileType == "caCert") {
                                scope.configuration.credentials.caCertFileName = $file.name;
                                scope.configuration.credentials.caCert = addedFile;
                            }
                            if(fileType == "privateKey") {
                                scope.configuration.credentials.privateKeyFileName = $file.name;
                                scope.configuration.credentials.privateKey = addedFile;
                            }
                            if(fileType == "Cert") {
                                scope.configuration.credentials.certFileName = $file.name;
                                scope.configuration.credentials.cert = addedFile;
                            }
                        }
                        scope.updateValidity();
                    }
                });
            };
            reader.readAsText($file.file);
        };

        scope.clearCertFile = (fileType) => {
            ngModelCtrl.$setDirty();
            if(fileType == "caCert") {
                scope.configuration.credentials.caCertFileName = null;
                scope.configuration.credentials.caCert = null;
            }
            if(fileType == "privateKey") {
                scope.configuration.credentials.privateKeyFileName = null;
                scope.configuration.credentials.privateKey = null;
            }
            if(fileType == "Cert") {
                scope.configuration.credentials.certFileName = null;
                scope.configuration.credentials.cert = null;
            }
            scope.updateValidity();
        };

        scope.updateValidity = () => {
            var certsValid = true;
            var credentials = scope.configuration.credentials;
            if (credentials.type == ruleNodeTypes.mqttCredentialTypes['cert.PEM'].value) {
                if (!credentials.caCert || !credentials.cert || !credentials.privateKey) {
                    certsValid = false;
                }
            }
            ngModelCtrl.$setValidity('Certs', certsValid);
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

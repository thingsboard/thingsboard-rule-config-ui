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

import './message-type-config.scss';

/* eslint-disable import/no-unresolved, import/default */

import messageTypeConfigTemplate from './message-type-config.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function MessageTypeConfigDirective($compile, $filter, types) {

    var linker = function (scope, element, attrs, ngModelCtrl) {
        var template = messageTypeConfigTemplate;
        element.html(template);

        scope.selectedMessageType = null;
        scope.messageTypeSearchText = null;

        scope.ngModelCtrl = ngModelCtrl;

        var messageTypesList = [];
        for (var type in types.messageType) {
            var messageType = {
                name: types.messageType[type].name,
                value: types.messageType[type].value
            };
            messageTypesList.push(messageType);
        }

        scope.transformMessageTypeChip = function (chip) {
            var res = $filter('filter')(messageTypesList, {name: chip}, true);
            var result;
            if (res && res.length) {
                result = angular.copy(res[0]);
            } else {
                result = {
                    name: chip,
                    value: chip
                };
            }
            return result;
        };

        scope.messageTypesSearch = function (searchText) {
            var messageTypes = searchText ? $filter('filter')(messageTypesList, {name: searchText}) : messageTypesList;
            return messageTypes.map((messageType) => messageType.name);
        };

        scope.createMessageType = function (event, chipsId) {
            var chipsChild = angular.element(chipsId, element)[0].firstElementChild;
            var el = angular.element(chipsChild);
            var chipBuffer = el.scope().$mdChipsCtrl.getChipBuffer();
            event.preventDefault();
            event.stopPropagation();
            el.scope().$mdChipsCtrl.appendChip(chipBuffer.trim());
            el.scope().$mdChipsCtrl.resetChipBuffer();
        };

        ngModelCtrl.$render = function () {
            if (scope.messageTypesWatch) {
                scope.messageTypesWatch();
                scope.messageTypesWatch = null;
            }
            var configuration = ngModelCtrl.$viewValue;
            var messageTypes = [];
            if (configuration && configuration.messageTypes) {
                for (var i = 0; i < configuration.messageTypes.length; i++) {
                    var messageType = configuration.messageTypes[i];
                    if (types.messageType[messageType]) {
                        messageTypes.push(angular.copy(types.messageType[messageType]));
                    } else {
                        messageTypes.push({
                            name: messageType,
                            value: messageType
                        });
                    }
                }
            }
            scope.messageTypes = messageTypes;
            scope.messageTypesWatch = scope.$watch('messageTypes', function (newVal, prevVal) {
                if (!angular.equals(newVal, prevVal)) {
                    updateMessageTypes();
                }
            }, true);
        };

        function updateMessageTypes() {
            if (ngModelCtrl.$viewValue) {
                var messageTypes = [];
                for (var i = 0; i < scope.messageTypes.length; i++) {
                    messageTypes.push(scope.messageTypes[i].value);
                }
                ngModelCtrl.$viewValue.messageTypes = messageTypes;
                updateValidity();
            }
        }

        function updateValidity() {
             if (scope.required) {
                 var valid = ngModelCtrl.$viewValue.messageTypes &&
                     ngModelCtrl.$viewValue.messageTypes.length ? true : false;
                 ngModelCtrl.$setValidity('messageTypes', valid);
             } else {
                 ngModelCtrl.$setValidity('messageTypes', true);
             }
        }

        $compile(element.contents())(scope);
    };

    return {
        restrict: "E",
        require: "^ngModel",
        scope: {
            required:'=ngRequired',
            readonly:'=ngReadonly'
        },
        link: linker
    };
}

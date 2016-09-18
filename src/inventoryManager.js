/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var AlexaSkill = require('./AlexaSkill'),
    eventHandlers = require('./eventHandlers'),
    intentHandlers = require('./intentHandlers');

var APP_ID = "amzn1.ask.skill.9696f5d2-31d0-4193-8d87-f86787ef61b7";//replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var skillContext = {};

var InventoryManager = function () {
    AlexaSkill.call(this, APP_ID);
    skillContext.needMoreHelp = true;
};

InventoryManager.prototype = Object.create(AlexaSkill.prototype);
InventoryManager.prototype.constructor = InventoryManager;

eventHandlers.register(InventoryManager.prototype.eventHandlers, skillContext);
intentHandlers.register(InventoryManager.prototype.intentHandlers, skillContext);

module.exports = InventoryManager;

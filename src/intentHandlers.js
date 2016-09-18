/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';

var registerIntentHandlers = function (intentHandlers, skillContext) {
    intentHandlers.HelloWorldIntent = function (intent, session, response) {
        response.tellWithCard("Hello World! Sean!", "Hello World", "Hello World!");
    };

    intentHandlers['AMAZON.HelpIntent'] = function (intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    };

    intentHandlers['AMAZON.CancelIntent'] = function (intent, session, response) {
        response.tell("Okay. Canceled.");
    };

    intentHandlers['AMAZON.StopIntent'] = function (intent, session, response) {
        response.tell("Okay. Stopped.");
    };
};
exports.register = registerIntentHandlers;

/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';

var registerEventHandlers = function (eventHandlers, skillContext) {
    eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
        //if user said a one shot command that triggered an intent event,
        //it will start a new session, and then we should avoid speaking too many words.
    };

    eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
        console.log("HelloWorld onSessionStarted requestId: " + sessionStartedRequest.requestId
            + ", sessionId: " + session.sessionId);
        // any initialization logic goes here
    };

    eventHandlers.onLaunch = function (launchRequest, session, response) {
        console.log("HelloWorld onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
        var speechOutput = "Welcome to the Alexa Skills Kit, you can say hello";
        var repromptText = "You can say hello";
        response.ask(speechOutput, repromptText);
    };

    eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
        console.log("HelloWorld onSessionEnded requestId: " + sessionEndedRequest.requestId
            + ", sessionId: " + session.sessionId);
        // any cleanup logic goes here
    };
};
exports.register = registerEventHandlers;

/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var AWS = require("aws-sdk");

var registerIntentHandlers = function (intentHandlers, skillContext) {
    intentHandlers.CheckInventoryIntent = function (intent, session, response) {
        var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

        var item = intent.slots.Item.value.toLowerCase();

        dynamodb.getItem({
                TableName: 'StoreInventory',
                Key: {
                    "FoodName": {
                        S: item
                    }
                }
            }, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                    response.tell('');
                } else if (data.Item === undefined) {
                    response.tell("I'm sorry, I can't find any " + item + " in stock.");
                } else {
                    response.tell("There are " + data.Item.QTY.N + " " + item + " in stock.");
                }
            });
    };

    intentHandlers.ChangeInventoryIntent = function (intent, session, response) {
        var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

        var item = intent.slots.Item.value.toLowerCase();

        var number = intent.slots.Number.value;

        var currentNumber = "0";

        currentNumber = number.toString();

        dynamodb.putItem({
                TableName: 'StoreInventory',
                Item: {
                    "FoodName": {
                        S: item
                    },
                    QTY: {
                        N: currentNumber
                    }
                }
            }, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                    response.tell('');
                } else {
                    response.tell(item + " now has " + currentNumber + " in inventory.");
                }
            });
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


'use strict';

var ServiceRegistry = require('dw/svc/LocalServiceRegistry');

exports.RepositoriesService = ServiceRegistry.createService('friends_omalyshev', {
    createRequest: function (svc, params) {
        svc.setRequestMethod('GET');
        svc.setURL(svc.getURL());
    },
    parseResponse: function (svc, response) {
        return JSON.parse(response.getText()).data.map(function (element) {
            return {
                avatar: element.avatar,
                firstName: element.first_name,
            };
        });
    }
});
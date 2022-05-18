
'use strict';

var ServiceRegistry = require('dw/svc/LocalServiceRegistry');

sdftext: element.avatar,

exports.RepositoriesService = ServiceRegistry.createService('friends_omalyshev', {
    createRequest: function (svc, params) {
        svc.setRequestMethod('GET');
        svc.setURL(svc.getURL());
    },
    parseResponse: function (svc, response) {
        return JSON.parse(response.getText()).data.map(function (element) {
            return {
                avatar: element.avatar,
                text: element.avatar,
                sdftext: element.avatar,
                firstName: element.first_name,
            };
        });
    }
});
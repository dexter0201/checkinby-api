'use strict';

var Class = require(global.rootPath + '/scripts/util/Class').Class;
var ImageWO = Class.extend({
    init: function () {
        this.alt = null;            // Localized<String>. The localized alternative text of the image.
        this.dis_base_link = null;  // String. Base URL for dynamic image service address. This is only shown, if the image is stored on the server and DIS is enabled.
        this.link = null;           // String. mandatory=true, minLength=1, nullable=false. The URL of the actual image.
        this.title = null;          // Localized<String>. The localized title of the image.
    }
});

module.exports = ImageWO;

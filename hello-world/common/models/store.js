'use strict';

module.exports = function (Store) {
    /**
    * @documentation: Returns the address1 of the store.
    *
    * @return {String}  address1 of the store
    */
    Store.prototype.getAddress1 = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the address2 of the store.
    *
    * @return {String}  address2 of the store
    */
    Store.prototype.getAddress2 = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the city of the store.
    *
    * @return {String}  city of the store
    */
    Store.prototype.getCity = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the countryCode of the store
    *
    * @return {object}  countryCode of the store
    */
    Store.prototype.getCountryCode = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the email of the store.
    *
    * @return {String}  email of the store
    */
    Store.prototype.getEmail = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the fax of the store.
    *
    * @return {String}  fax of the store
    */
    Store.prototype.getFax = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the ID of the store
    *
    * @return {String}  ID of the store
    */
    Store.prototype.getID = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the store image.
    *
    * @return {object}  the store image.
    */
    Store.prototype.getImage = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the inventory list the store is associated with. If the store is not associated with a inventory list, or the inventory list does not exist, the method returns null.
    *
    * @return {object}  ProductInventoryList or null
    */
    Store.prototype.getInventoryList = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the inventory list id the store is associated with. If the store is not associated with a inventory list, or the inventory list does not exist, the method returns null.
    *
    * @return {String}  the inventory list id
    */
    Store.prototype.getInventoryListID = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the latitude of the store.
    *
    * @return {Number}  latitude of the store
    */
    Store.prototype.getLatitude = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the longitude of the store.
    *
    * @return {Number}  the longitude of the store.
    */
    Store.prototype.getLongitude = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the name of the store.
    *
    * @return {String}  the name of the store.
    */
    Store.prototype.getName = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the phone of the store.
    *
    * @return {String}  the phone of the store.
    */
    Store.prototype.getPhone = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the postalCode of the store.
    *
    * @return {String}  the postalCode of the store.
    */
    Store.prototype.getPostalCode = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the stateCode of the store.
    *
    * @return {String}   the stateCode of the store.
    */
    Store.prototype.getStateCode = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the storeEvents of the store.
    *
    * @return {object}  storeEvents of the store.
    */
    Store.prototype.getStoreEvents = function () {
        //TODO: Implement Me

    };


    /**
    * @return {object}
    */
    Store.prototype.getStoreGroups = function () {
        //TODO: Implement Me

    };


    /**
    * @return {object}
    */
    Store.prototype.getStoreHours = function () {
        //TODO: Implement Me

    };


    /**
    * @return {Boolean}
    */
    Store.prototype.isPosEnabled = function () {
        //TODO: Implement Me

    };


    /**
    * @return {Boolean}
    */
    Store.prototype.isStoreLocatorEnabled = function () {
        //TODO: Implement Me

    };

    // CUSTOMIZATION
    Store.beforeRemote('findById', function (ctx, modelInstance, next) {
        console.log('Store beforeRemote findById');

        next();
    });
};

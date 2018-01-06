'use strict';

module.exports = function (Storegroup) {
    /**
    * @documentation: Returns the ID of the store group.
    *
    * @return {String} the ID of the store group.
    */
    StoreGroup.prototype.getID = function () {
        return this.ID;
    };


    /**
    * @documentation: Returns the name of the store group.
    *
    * @return {String} the name of the store group.
    */
    StoreGroup.prototype.getName = function () {
        return this.name;
    };


    /**
    * @documentation: all the stores that are assigned to the store group.
    *
    * @return {object} stores that are assigned to the store group.
    */
    StoreGroup.prototype.getStores = function () {
        return this.stores;
    };
};

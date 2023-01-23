function PlaceEntry() {
    this.locations = {};
    this.currentId = 0;
};

PlaceEntry.prototype.addLocation = function (location) {
    location.id = this.assignId();
    this.locations[location.id] = location;
};

PlaceEntry.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

PlaceEntry.prototype.findLocation = function (id) {
    if (this.location[id] !== undefined) {
        return this.locations[id];
    }
    return false;
};

PlaceEntry.prototype.deleteLocation = function(id) {
    if (this.location[id] === undefined) {
        return false;
    }
    delete this.location[id];
    return true;
};

function PlacesBeen(locations, timeOfYear, landmark, notes) {
    this.locations = locations;
    this.timeOfYear = timeOfYear;
    this.landmark = landmark;
    this.notes = notes;
};

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
    if (this.locations[id] !== undefined) {
        return this.locations[id];
    }
    return false;
};

PlaceEntry.prototype.deleteLocation = function(id) {
    if (this.locations[id] === undefined) {
        return false;
    }
    delete this.locations[id];
    return true;
};

function PlacesBeen(locations, timeofyear, landmark, notes) {
    this.locations = locations;
    this.timeofyear = timeofyear;
    this.landmark = landmark;
    this.notes = notes;
};

PlacesBeen.prototype.fullLocation = function () {
    return this.locations + " ";
};

// User Interface Logic
let placeEntry = new PlaceEntry();

function listsLocations(placesEntryToDisplay) {
    let locationDiv = document.querySelector("div#locations");
    locationDiv.innerText = null;
    const ul = document.createElement("ul");
    Object.keys(placesEntryToDisplay.locations).forEach(function(key) {
        const location = placesEntryToDisplay.findLocation(key);
        const li = document.createElement("li");
        li.append(location.fullLocation());
        li.setAttribute("id", location.id);
        ul.append(li);
    });
    locationDiv.append(ul);
}

function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedlocation = document.querySelector("input#new-location").value;
    const inputtedtimeofyear = document.querySelector("input#new-time-of-year").value;
    const inputtedlandmark = document.querySelector("input#new-landmark").value;
    const inputtednotes = document.querySelector("input#new-notes").value;
    let newlocation = new PlacesBeen(inputtedlocation,inputtedtimeofyear,inputtedlandmark,inputtednotes);
    placeEntry.addLocation(newlocation);
    listsLocations(placeEntry);
}

window.addEventListener("load", function () {
    document.querySelector("form#new-location").addEventListener("submit", handleFormSubmission);
});

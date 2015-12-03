/* Code to handle Plant Selection */

function soiltip(value) {
    "use strict";
    var $soiltip = $("#soiltip"),
        text = "";
    if (value.value == 1) {
        //Loam
        text = 'Loam, your soil is ideal for growing most plants. Please click on continue to see the list of edible plants you can grow';

    } else {
        //Clay or Sand
        text = 'Clay or Sand, your soil needs to be amended ( <a href="http://www.smilinggardener.com/lessons/how-to-improve-clay-soil-and-sandy-soil">instructions</a> ). After you have amended the soil, please click on continue to see the list of edible plants you can grow.';
    }
    $soiltip.empty();
    $soiltip.append(text);
    
}

function filter(this) {
    "use strict";
    //Does nothing for now, needs to filter
    
}
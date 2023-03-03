exports.getDate = function () {
    const today = new Date(); 

const options = {
    weekday: "long",
    day: "numeric", 
    month: "long"
};


return today.toLocaleDateString("en-US", options);
// let day = today.toLocaleDateString("en-US", options);

//     return day;
}

exports.getDay = function () {
    const today = new Date(); 

const options = {
    weekday: "long",
};



return today.toLocaleDateString("en-US", options);
// let day = today.toLocaleDateString("en-US", options);

//     return day;
}

//for creating module



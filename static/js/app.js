// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

// Use d3 to display a table and update each cell's text with UFO report values (City, State, Country, Shape, Duration and Comments)
tableData.forEach((UFOreport) => {
    var row = tbody.append("tr");

    Object.entries(UFOreport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    // Clear the original data table before displaying the filtered data table
    d3.select("tbody").html("");
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(tableData);

    var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

    console.log(filteredData);

    // Use d3 to display the filtered data in a table and update each cell's text with UFO report values (City, State, Country, Shape, Duration and Comments)
    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");

        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
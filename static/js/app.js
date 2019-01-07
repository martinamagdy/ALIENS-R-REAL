// from data.js
var tableData = data;

// YOUR CODE HERE!
filter = d3.select("#filter-btn");

// Function to handle input date
filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //match the input date to the data we have
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    console.log(filteredData[0]["datetime"]);
    
   create_table(filteredData);
  }
  
); 
  function create_table(Data){
      // delete previose data
      d3.select("tbody").text("")
  
      // get table body 
      var body = d3.select("tbody")
  
      // Finally, add information gatjerd in that day in a table
      for (var i=0; i<Data.length; i++){
        var newtr = body.append("tr");
        newtr.append("td").text(Data[i]["datetime"]);
        newtr.append("td").text(Data[i]["city"]);
        newtr.append("td").text(Data[i]["state"]);
        newtr.append("td").text(Data[i]["country"]);
        newtr.append("td").text(Data[i]["shape"]);
        newtr.append("td").text(Data[i]["durationMinutes"]);
        newtr.append("td").text(Data[i]["comments"]);
      } 
  }

filters = d3.select("#filters-btn");

// Function to handle input date
filters.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime2");

  // Get the value property of the input element
  var date = inputElement.property("value");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#city");

  // Get the value property of the input element
  var city = inputElement.property("value");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#state");

  // Get the value property of the input element
  var state = inputElement.property("value");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#country");

  // Get the value property of the input element
  var country = inputElement.property("value");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#shape");

  // Get the value property of the input element
  var shape = inputElement.property("value");

  //match the input date to the data we have
  for (var z=0; z<tableData.length; z++){   
    var newtable = tableData   
      if (date != ""){
        var newtable = tableData.filter(d => d.datetime === date);
        console.log(newtable);
      }
      else{
        newtable
      }
      if(city != ""){
        newtable = newtable.filter(c => c.city === city);
        console.log(newtable);
      }
      else{
        newtable
      }
      if(state != ""){
        newtable = newtable.filter(s => s.state === state);
        console.log(newtable);
      }
      else{
        newtable
      }
      if(country != ""){
        newtable = newtable.filter(c => c.country === country);
        console.log(newtable);
      }
      else{
        newtable
      }
      if(shape != ""){
        newtable = newtable.filter(sh => sh.shape === shape);
        console.log(newtable);
      }
      else{
        newtable
      }
    }
    create_table(newtable);
  }
);
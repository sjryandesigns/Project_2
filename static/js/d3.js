// Sentiment Analysis routes
count_url ="/sentcounts" 
state_url ="/statesent"
time_url = "/timesent"
// Sentiment Count Bar Chart
d3.json(count_url).then(function(data) {
  console.log(data)

  var trace1 = {
    x: data.map(row => row.analysis), 
    y: data.map(row => row.Biden_Count),
    name: 'Biden',
    type: 'bar',
    marker:{color:'blue'}
  };

  var trace2 = {
    x: data.map(row => row.analysis), 
    y: data.map(row => row.Trump_Count),
    name: 'Trump',
    type: 'bar',
    marker:{color:'red'}
  };

  var data = [trace1, trace2];

  var layout = {
    title: "Biden vs Trump Hashtag Tweet Sentiment",
    xaxis: { title: "Sentiment Category" },
    yaxis: { title: "Count of Tweets"}
  };

  Plotly.newPlot("sentcount", data, layout);
});
// Sentiment by State Bar Chart
d3.json(state_url).then(function(data) {
  console.log(data)

  var trace1 = {
    x: data.map(row => row.state_code), 
    y: data.map(row => row.BidenAvg),
    name: 'Biden',
    type: 'bar',
    marker:{color:'blue'}
  };

  var trace2 = {
    x: data.map(row => row.state_code), 
    y: data.map(row => row.TrumpAvg),
    name: 'Trump',
    type: 'bar',
    marker:{color:'red'}
  };

  var data = [trace1, trace2];

  var layout = {
    title: "Biden vs Trump Average Polarity by State",
    xaxis: { title: "State" },
    yaxis: { title: "Average Polarity Rating"}
  };

  Plotly.newPlot("sentstate", data, layout);
});
// Sentiment by Time Line Chart
d3.json(time_url).then(function(data) {
  console.log(data)

  var trace1 = {
    x: data.map(row => row.date), 
    y: data.map(row => row.BidenAvg),
    name: 'Biden',
    type: 'scatter',
    marker:{color:'blue'}
  };

  var trace2 = {
    x: data.map(row => row.date), 
    y: data.map(row => row.TrumpAvg),
    name: 'Trump',
    type: 'scatter',
    marker:{color:'red'}
  };

  var data = [trace1, trace2];

  var layout = {
    title: "Biden vs Trump Average Polarity by Date",
    yaxis: { title: "Average Polarity Rating"}
  };

  Plotly.newPlot("senttime", data, layout);
});
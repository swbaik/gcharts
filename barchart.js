google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ["Effect", "Amount of", {role: "style"}],
    ["Overdrive", 4, "#3dd210"],
    ["Delay", 2, "silver"],
    ["Reverb", 1, "#156ee7"],
    ["Volume", 1, "#262d2f"],
    ["Boost", 1, "#ece31f"],
    ["Tuner", 1,"#fff"],
    ["Compressor", 1,"#9024ce"],
    ["Other Effects", 3,"#f9961b"],
    ]);

  var view = new google.visualization.DataView(data);
    view.setColumns([0,1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"},
      2]);

  var options = {
    'title': "Types of Guitar Effect Pedals I Have",
    height: 400,
    width: 600,
    bar: {groupWidth: "95%"},
    legend: {position: "none"},
  };

  var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
  chart.draw(view, options );


}

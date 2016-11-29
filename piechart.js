google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Type', 'Amount of Storage'],
          ['Documents & Data',     6.33],
          ['Apps',      1.60],
          ['Photos',  1.28],
          ['Audio', 0.85],
          ['Other',    0.22],
          ['Free Space',  2.43],
        ]);

        var options = {
          title: 'Storage Allocations on my iPhone'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

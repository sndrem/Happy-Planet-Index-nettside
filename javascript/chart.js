google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Land');
        data.addColumn('number', 'HPI-Index');
        data.addRows([
          ['Norge', 10],
          ['Sverige', 9],
          ['Danmark', 6],
          ['Russland', 2],
          ['Kina', 1]
        ]);

        // Set chart options
        var options = {'title':'Happy Planet Index',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart'));
        chart.draw(data, options);
      }
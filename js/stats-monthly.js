// fetch block
function updateChart() {
    async function fetchData(){
        const url = 'https://sourceforge.net/projects/eurekaroms/files/stats/json?start_date=2021-02-01&end_date=2023-01-01&period=monthly';
        const response = await fetch(url);
        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints;
    };
    
    fetchData().then(datapoints => {
        const monthly = datapoints.downloads.map(
            function(index) {
                return index[1];
            })
            console.log(monthly);
            myChart.config.data.labels = ['February/21','March/21','May/21','June/21','July/21','August/21','September/21','October/21','November/21','December/21',
            'January/22','February/22','March/22','May/22','June/22','July/22','August/22','September/22','October/22','November/22','December/22'];
            myChart.config.data.datasets[0].data = monthly;
            myChart.update();
    });
    }
    
    const data = {
      labels: ["January",'February','March','May','June','July','August','September','October','November','December'],
      datasets: [{
        label: 'Download Statistics - Eureka ROM - 2021-2022 [Monthly]',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
    };
    
      const config = {
        type: 'bar',
        data: data,
        options: {}
      };
    
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    
      document.onload = updateChart()
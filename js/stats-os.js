// fetch block
function updateChart2() {
    async function fetchData(){
        const url = 'https://sourceforge.net/projects/eurekaroms/files/stats/json?start_date=2021-02-01&end_date=2023-01-01&period=monthly';
        const response = await fetch(url);
        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints;
    };
    
    fetchData().then(datapoints => {
        const oses = datapoints.oses.map(
            function(index) {
                return index[1];
            })
            console.log(oses);
            myChart2.config.data.labels = ["Android",'Windows','Linux','Unkown','Macintosh'];
            myChart2.config.data.datasets[0].data = oses;
            myChart2.update();
    });
    }
    
    const data2 = {
      labels: ["Android",'Windows','Linux','Unkown','Macintosh'],
      datasets: [{
        label: 'Downloads by OS 2021-2022',
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
    
      const config2 = {
        type: 'bar',
        data: data2,
        options: {}
      };
    
      const myChart2 = new Chart(
        document.getElementById('myChart2'),
        config2
      );
    
      document.onload = updateChart2()
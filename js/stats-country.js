// fetch block
function updateChart3() {
    async function fetchData(){
        const url = 'https://sourceforge.net/projects/eurekaroms/files/stats/json?start_date=2021-02-01&end_date=2023-01-01&period=monthly';
        const response = await fetch(url);
        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints;
    };
    
    fetchData().then(datapoints => {
        const countries = datapoints.countries.map(
            function(index) {
                return index[1];
            })
            console.log(countries);
            myChart3.config.data.labels = ["Brazil","United States","Indonesia","India","Russia","Viet Nam","France","Bangladesh","Germany","Mexico","Philippines","Peru","Egypt","Argentina","United Kingdom","Colombia","Ecuador","Turkey","Ukraine","Romania","Italy","Thailand","South Africa","Algeria","Pakistan","Poland","Malaysia","Nepal","Canada","Kazakhstan","Singapore","Singapore","Antigua and Barbuda","Unknown","Venezuela",
            "Iraq","Netherlands","Ireland","Spain","Australia","Chile","Morocco","Guatemala","Kenya","Paraguay","El Salvador","Portugal","Ethiopia","Uzbekistan","Korea","Jordan","Finland","Croatia","Azerbaijan","Kyrgyzstan","Nigeria","Ghana","Nicaragua","Moldova","Belarus","Saudi Arabia","Hong Kong","Tanzania","Sri Lanka","Dominican Republic","Taiwan","Israel","Japan","Mauritius","Bolivia","Sweden"
            ,"Estonia","Turkmenistan","Jamaica","Greece","New Zealand","Czech Republic","Belgium","Honduras","Hungary","Oman","Botswana","Tunisia","Georgia","Costa Rica","Zambia","Angola","Lebanon","Slovakia","Trinidad and Tobago","United Arab Emirates","Austria","Armenia","Afghanistan","Zimbabwe","Serbia","Bulgaria","Uruguay","Ivory Coast","Palestinian Territory"
            ,"Panama","Uganda","Switzerland","Senegal","Denmark","Somalia","Guyana","Norway","Saint Lucia","Lithuania","Montenegro","Albania","Lao People's Democratic Republic","Mongolia","Mozambique","Bosnia and Herzegovina","XK","Latvia","Cyprus","Namibia","Macedonia","Slovenia","Malawi","Brunei Darussalam","Mali","Togo","Myanmar","Benin","Guadeloupe","Kuwait","Luxembourg","China","Cameroon","Gambia","Puerto Rico"
            ,"Cambodia","Barbados","Tajikistan","Malta","Suriname","Swaziland","Mauritania","Burkina Faso","Gabon","Belize","Papua New Guinea","Haiti","Qatar","Bahamas","Cape Verde","Madagascar","Sudan","Congo - Kinshasa","Bouvet Island","Fiji","French Guiana","Rwanda","Guam","Dominica","Iceland","Bahrain","Lesotho","Yemen","Macao","Djibouti","Reunion","Mayotte"
            ,"Niger","Republic of Congo","Equatorial Guinea","Sao Tome and Principe","Martinique","French Polynesia","Sierra Leone","Timor-Leste","CW","Guinea-Bissau","Eritrea","Burundi","Jersey"].slice(0, 20);
            myChart3.config.data.datasets[0].data = countries.slice(0, 20);
            myChart3.update();
    });
    }
    
    const data3 = {
      labels: ["Brazil","United States","Indonesia","India","Russia","Viet Nam","France","Bangladesh","Germany","Mexico","Philippines","Peru","Egypt","Argentina","United Kingdom","Colombia","Ecuador","Turkey","Ukraine","Romania","Italy","Thailand","South Africa","Algeria","Pakistan","Poland","Malaysia","Nepal","Canada","Kazakhstan","Singapore","Singapore","Antigua and Barbuda","Unknown","Venezuela",
      "Iraq","Netherlands","Ireland","Spain","Australia","Chile","Morocco","Guatemala","Kenya","Paraguay","El Salvador","Portugal","Ethiopia","Uzbekistan","Korea","Jordan","Finland","Croatia","Azerbaijan","Kyrgyzstan","Nigeria","Ghana","Nicaragua","Moldova","Belarus","Saudi Arabia","Hong Kong","Tanzania","Sri Lanka","Dominican Republic","Taiwan","Israel","Japan","Mauritius","Bolivia","Sweden"
      ,"Estonia","Turkmenistan","Jamaica","Greece","New Zealand","Czech Republic","Belgium","Honduras","Hungary","Oman","Botswana","Tunisia","Georgia","Costa Rica","Zambia","Angola","Lebanon","Slovakia","Trinidad and Tobago","United Arab Emirates","Austria","Armenia","Afghanistan","Zimbabwe","Serbia","Bulgaria","Uruguay","Ivory Coast","Palestinian Territory"
      ,"Panama","Uganda","Switzerland","Senegal","Denmark","Somalia","Guyana","Norway","Saint Lucia","Lithuania","Montenegro","Albania","Lao People's Democratic Republic","Mongolia","Mozambique","Bosnia and Herzegovina","XK","Latvia","Cyprus","Namibia","Macedonia","Slovenia","Malawi","Brunei Darussalam","Mali","Togo","Myanmar","Benin","Guadeloupe","Kuwait","Luxembourg","China","Cameroon","Gambia","Puerto Rico"
      ,"Cambodia","Barbados","Tajikistan","Malta","Suriname","Swaziland","Mauritania","Burkina Faso","Gabon","Belize","Papua New Guinea","Haiti","Qatar","Bahamas","Cape Verde","Madagascar","Sudan","Congo - Kinshasa","Bouvet Island","Fiji","French Guiana","Rwanda","Guam","Dominica","Iceland","Bahrain","Lesotho","Yemen","Macao","Djibouti","Reunion","Mayotte"
      ,"Niger","Republic of Congo","Equatorial Guinea","Sao Tome and Principe","Martinique","French Polynesia","Sierra Leone","Timor-Leste","CW","Guinea-Bissau","Eritrea","Burundi","Jersey"
      ].slice(0, 20),
      datasets: [{
        label: 'TOP 20 Downloads by Countries 2021-2022',
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
    
      const config3 = {
        type: 'bar',
        data: data3,
        options: {}
      };
    
      const myChart3 = new Chart(
        document.getElementById('myChart3'),
        config3
      );
    
      document.onload = updateChart3()
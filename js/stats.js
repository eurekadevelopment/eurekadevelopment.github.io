$(document).ready(function() {
    var filepath;
    var apiUrl;

    function aicp_r_stats() {
        filepath = 'Samsung/A20/R/aicp/';
        apiUrl = 'https://sourceforge.net/projects/eurekaroms/files/' + filepath + 'stats/json?start_date=2020-01-01&end_date=2023-01-01';
        fetch(apiUrl)
                .then(response => response.json())
                .then(json_a20 => {
                console.log(json_a20);
                document.getElementById("aicp_stats").innerHTML = "Stats: " + json_a20.total;
        }).catch(err => console.error(err));
    }

    function aex_r_stats() {
        filepath = 'Samsung/A20/R/aex/';
        apiUrl = 'https://sourceforge.net/projects/eurekaroms/files/' + filepath + 'stats/json?start_date=2020-01-01&end_date=2023-01-01';
        fetch(apiUrl)
                .then(response => response.json())
                .then(json_a20 => {
                console.log(json_a20);
                document.getElementById("aex_stats").innerHTML = "Stats: " + json_a20.total;
        }).catch(err => console.error(err));
    }

    function aosip_r_stats() {

        filepath = 'Samsung/A20/R/Aosip/';
        apiUrl = 'https://sourceforge.net/projects/eurekaroms/files/' + filepath + 'stats/json?start_date=2020-01-01&end_date=2023-01-01';
        fetch(apiUrl)
                .then(response => response.json())
                .then(json_a20 => {
                console.log(json_a20);
                document.getElementById("aosip_stats").innerHTML = "Stats: " + json_a20.total;
        }).catch(err => console.error(err));
    }

    function aospa_r_stats() {
        filepath = 'Samsung/A20/R/aospa/';
        apiUrl = 'https://sourceforge.net/projects/eurekaroms/files/' + filepath + 'stats/json?start_date=2020-01-01&end_date=2023-01-01';
        fetch(apiUrl)
                .then(response => response.json())
                .then(json_a20 => {
                console.log(json_a20);
                document.getElementById("aospa_stats").innerHTML = "Stats: " + json_a20.total;
        }).catch(err => console.error(err));
    }

    aicp_r_stats();
    aex_r_stats();
    aosip_r_stats();
    aospa_r_stats();
  });
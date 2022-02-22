$(document).ready(function() {
    var filepath;
    var apiUrl;

    function ancient_stats() {
        async function fetchData() {
            apiUrl = 'https://sourceforge.net/projects/ancientrom/files/' + filepath + '/stats/json?start_date=2021-03-01&end_date=2023-01-01';
            const response = await fetch(apiUrl);
            const largedata = await response.json();
            var data = largedata.total
            return data;
        };

        async function downloads_per_rom() {
            var a10_data;
            try {
                filepath = 'a10';
                a10_data = await fetchData();
            } catch(e) {
                a10_data = 0;
            }

            var sum = a10_data;
            if (sum == 0) {
                document.getElementById('ancient_S_stats').innerHTML = "Stats Unavailable";
            } else {
                document.getElementById('ancient_S_stats').innerHTML = "Downloaded: " + sum + " times";
            }
            return sum;
        }

	setTimeout(() => { downloads_per_rom(); }, 1000);
    }

    ancient_stats();
  });

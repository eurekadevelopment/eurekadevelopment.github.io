$(document).ready(function() {
    var filepath;
    var apiUrl;

    function rom_stats() {
        async function fetchData() {
            apiUrl = 'https://sourceforge.net/projects/eurekaroms/files/' + filepath + '/stats/json?start_date=2021-03-01&end_date=2023-01-01';
            const response = await fetch(apiUrl);
            const largedata = await response.json();
            var data = largedata.total
            return data;
        };

        async function downloads_per_rom(a, b) {
            var android = a;
            var rom = b;
            var a10_arm_data;
            var a10_arm64_data;
            var a20_data;
            var a20e_data;
            var a30_data
            var a40_data;
            try {
                filepath = 'Samsung/A10/' + android + '/arm/' + rom;
                if ((rom == 'cherish') | (rom == 'crdroid') | (rom == 'derp') | (rom == 'evolution') | (rom == 'hentai') | (rom == 'potato') | (rom == 'ppui') | (rom == 'pixysos') | (rom == 'radiant')) {
                    a10_arm_data = 0;
                } else {
                    a10_arm_data = await fetchData();
                }
            } catch(e) {
                a10_arm_data = 0;
            }
            try {
                filepath = 'Samsung/A10/' + android + '/arm64/' + rom;
                a10_arm64_data = await fetchData();
            } catch(e) {
                a10_arm64_data = 0;
            }
            try {
                filepath = 'Samsung/A20/' + android + '/' + rom;
                if (rom == 'derp') {
                    a20_data = 0;
                } else {
                    a20_data = await fetchData();
                }
            } catch(e) {
                a20_data = 0;
            }
            try {
                filepath = 'Samsung/A20e/' + android + '/' + rom;
                if (rom == 'derp') {
                    a20e_data = 0;
                } else {
                    a20e_data = await fetchData();
                }
            } catch(e) {
                a20e_data = 0;
            }
            try {
                filepath = 'Samsung/A30/' + android + '/' + rom;
                a30_data = await fetchData();
            } catch(e) {
                a30_data = 0;
            }
            try {
                filepath = 'Samsung/A40/' + android + '/' + rom;
                if (rom == 'crdroid') {
                    a40_data = 0;
                } else {
                    a40_data = await fetchData();
                }
            } catch(e) {
                a40_data = 0;
            }

            var sum = a10_arm_data + a10_arm64_data + a20_data + a20e_data + a30_data + a40_data;
            if (sum == 0) {
                document.getElementById(rom + '_' + android + '_stats').innerHTML = "Stats Unavailable";
            } else {
                document.getElementById(rom + '_' + android + '_stats').innerHTML = "Downloaded: " + sum + " times";
            }
            return sum;
        }

        const android_list = ['S'];
        const rom_list = ['aex', 'aicp', 'arcana', 'arrow', 'awaken', 'bliss', 'cherish', 'cipher', 'crdroid', 'derp', 'evolution', 'exthmui', 'hentai', 'lighthouse', 'lineage', 'nitrogen', 'octavi', 'pixysos', 'potato', 'ppui', 'radiant', 'spark', 'superior',  'yaap'];
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 24; j++) {
                setTimeout(() => { downloads_per_rom(android_list[i], rom_list[j]); }, 2500);
            }
        }
    }

    rom_stats();
  });

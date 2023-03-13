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
                if ((rom == 'aospa') | (rom == 'awaken') | (rom == 'crdroid') | (rom == 'derp') | (rom == 'descendant') | (rom == 'evox') | (rom == 'falcon') | (rom == 'hycon') | (rom == 'legion') | (rom == 'lighthouse') | (rom == 'mokee') | (rom == 'nezuko') | (rom == 'octavi') | (rom == 'pe') | (rom == 'peplus') | (rom == 'peext') | (rom == 'pixysos') | (rom == 'posp') | (rom == 'shapeshift') | (rom == 'tenx') | (rom == 'yaap')) {
                    a10_arm_data = 0;
                } else {
                    a10_arm_data = await fetchData();
                }
            } catch(e) {
                a10_arm_data = 0;
            }
            try {
                filepath = 'Samsung/A10/' + android + '/arm64/' + rom;
                if ((rom == 'awaken') | (rom == 'falcon') | (rom == 'lighthouse') | (rom == 'mokee') | (rom == 'pixysos') | (rom == 'posp') | (rom == 'shapeshift') | (rom == 'tenx') | (rom == 'yaap')) {
                    a10_arm64_data = 0;
                } else {
                    a10_arm64_data = await fetchData();
                }
            } catch(e) {
                a10_arm64_data = 0;
            }
            try {
                filepath = 'Samsung/A20/' + android + '/' + rom;
                if ((rom == 'awaken') | (rom == 'falcon') | (rom == 'lighthouse') | (rom == 'mokee') | (rom == 'pixysos') | (rom == 'posp') | (rom == 'shapeshift') | (rom == 'tenx') | (rom == 'yaap')) {
                    a20_data = 0;
                } else {
                    a20_data = await fetchData();
                }
            } catch(e) {
                a20_data = 0;
            }
            try {
                filepath = 'Samsung/A20e/' + android + '/' + rom;
                if ((rom == 'aex') | (rom == 'aospa') | (rom == 'arrowos') | (rom == 'cherish') | (rom == 'corvus') | (rom == 'crdroid') | (rom == 'derp') | (rom == 'evox') | (rom == 'havoc') | (rom == 'legion') | (rom == 'lineage') | (rom == 'nusantara') | (rom == 'pe') | (rom == 'revengeos') | (rom == 'sakura')) {
                    a20e_data = await fetchData();
                } else {
                    a20e_data = 0;
                }
            } catch(e) {
                a20e_data = 0;
            }
            try {
                filepath = 'Samsung/A30/' + android + '/' + rom;
                if ((rom == 'awaken') | (rom == 'falcon') | (rom == 'lighthouse') | (rom == 'mokee') | (rom == 'pixysos') | (rom == 'posp') | (rom == 'shapeshift') | (rom == 'tenx') | (rom == 'yaap')) {
                    a30_data = 0;
                } else {
                    a30_data = await fetchData();
                }
            } catch(e) {
                a30_data = 0;
            }
            try {
                filepath = 'Samsung/A40/' + android + '/' + rom;
                if ((rom == 'havoc') | (rom == 'lineage') | (rom == 'crdroid')) {
                    a40_data = await fetchData();
                } else {
                    a40_data = 0;
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

        const android_list = ['R'];
        const rom_list = ['aex', 'aicp', 'aosip', 'aospa', 'arrowos', 'awaken', 'bliss', 'carbon', 'cesium', 'cherish', 'cipheros', 'colt', 'corvus', 'crdroid', 'derp', 'descendant', 'dot', 'dotfe', 'evox', 'falcon', 'fluid', 'havoc', 'hycon', 'kang', 'legion', 'lighthouse', 'lineage', 'lineagefe', 'mokee', 'msm-xtended', 'nezuko', 'nusantara', 'octavi', 'palladium', 'pe', 'peplus', 'peext', 'pixysos', 'posp', 'radiant', 'revengeos', 'sakura', 'shapeshift', 'spark', 'spice', 'styx', 'superior', 'tenx', 'wave', 'yaap'];
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 50; j++) {
                setTimeout(() => { downloads_per_rom(android_list[i], rom_list[j]); }, 2500);
            }
        }
    }

    rom_stats();
  });

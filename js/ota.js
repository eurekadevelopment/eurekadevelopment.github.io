$(document).ready(function() {
    function ota_links() {
        async function loadData(a, b, c) {
            var datatype = a;
            var device = b;
            var arch = c;

            var jsonUrl = 'https://raw.githubusercontent.com/eurekadevelopment/ota_website/main/roms.json';
            const response = await fetch(jsonUrl);
            const largedata = await response.json();

            var aex = largedata.aex[0];
            var aicp = largedata.aicp[0];
            var arcana = largedata.arcana[0];
            var arrow = largedata.arrow[0];
            var awaken = largedata.awaken[0];
            var bliss = largedata.bliss[0];
            var cherish = largedata.cherish[0];
            var cipher = largedata.cipher[0];
            var crdroid = largedata.crdroid[0];
            var derp = largedata.derp[0];
            var evolution = largedata.evolution[0];
            var exthmui = largedata.exthmui[0];
            var hentai = largedata.hentai[0];
            var lighthouse = largedata.lighthouse[0];
            var lineage = largedata.lineage[0];
            var nitrogen = largedata.nitrogen[0];
            var octavi = largedata.octavi[0];
            var pixysos = largedata.pixysos[0];
            var potato = largedata.potato[0];
            var ppui = largedata.ppui[0];
            var radiant = largedata.radiant[0];
            var spark = largedata.spark[0];
            var superior = largedata.superior[0];
            var yaap = largedata.yaap[0];

            const rom_data = [aex, aicp, arcana, arrow, awaken, bliss, cherish, cipher, crdroid, derp, evolution, exthmui, hentai, lighthouse, lineage, nitrogen, octavi, pixysos, potato, ppui, radiant, spark, superior, yaap];

            const rom_list = ['aex', 'aicp', 'arcana', 'arrow', 'awaken', 'bliss', 'cherish', 'cipher', 'crdroid', 'derp', 'evolution', 'exthmui', 'hentai', 'lighthouse', 'lineage', 'nitrogen', 'octavi', 'pixysos', 'potato', 'ppui', 'radiant', 'spark', 'superior',  'yaap'];

            // i < (number of roms in rom_list + 1)
            // i starts at 0.
            for (let i = 0; i <24; i++) {
                var target_rom = rom_data[i];
                if (device == "A10") {
                    if (arch == "arm") {
                        var target_url = target_rom.a10_arm_url;
                    } else {
                        var target_url = target_rom.a10_arm64_url;
                    }
                } else if (device == "A20") {
                    var target_url = target_rom.a20_url;
                } else if (device == "A20e") {
                    var target_url = target_rom.a20e_url;
                } else if (device == "A30") {
                    var target_url = target_rom.a30_url;
                } else if (device == "A40") {
                    var target_url = target_rom.a40_url;
                }
                console.log(target_url);
                if (device == "A10") {
                    try {
                        document.getElementById(device + '_' + arch + '_' + rom_list[i] + '_link').outerHTML = "<option value = " + target_url + "> " + device + " " + arch;
                    } catch(e) {
                        console.log("Missing id in html for " + rom_list[i] + ". Please check!");
                    }
                } else {
                    try {
                        document.getElementById(device + '_' + rom_list[i] + '_link').outerHTML = "<option value = " + target_url + "> " + device;
                    } catch(e) {
                        console.log("Missing id in html for " + rom_list[i] + ". Please check!");
                    }
                }
            }

            /* Not used for the time being
            var filename = trim_data.filename;
            var datetime = trim_data.datetime;
            var rom_url = trim_data.url + "/" + filename;
            var md5sum = trim_data.id;

            if (datatype == "file") {
                console.log(filename);
                return filename;
            } else if (datatype == "date") {
                console.log(datetime);
                return datetime;
            } else if (datatype == "url") {
                console.log(rom_url);
                return rom_url;
            } else if (datatype == "md5") {
                console.log(md5sum);
                return md5sum;
            }
            */
        };

        const device_list = ['A10', 'A20', 'A20e', 'A30', 'A40'];
        for (let i = 0; i <5; i++) {
            if (device_list[i] == "A10") {
                loadData("url", device_list[i], "arm");
                loadData("url", device_list[i], "arm64");
            } else {
                loadData("url", device_list[i], "arm64");
            }
        }
    }

    ota_links();
  });

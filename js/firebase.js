var firebaseConfig = {
    apiKey: "AIzaSyAH1rtwQNO5BHMZy_DdMTVGDh4y7DrGKyc",
    authDomain: "eurekadevelopment-f98df.firebaseapp.com",
    databaseURL: "https://eurekadevelopment-f98df-default-rtdb.firebaseio.com",
    projectId: "eurekadevelopment-f98df",
    storageBucket: "eurekadevelopment-f98df.appspot.com",
    messagingSenderId: "596745833779",
    appId: "1:596745833779:web:be65d396200e77148f4246",
    measurementId: "G-0T83M2F2QK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function get_viewers_ip(json) {
      viewers_ip = json.ip;
      //view count with ip
      count_view(viewers_ip);
  }

  function count_view(viewers_ip) {
        var views;
        var ip_to_string = viewers_ip.toString();

        for(var i, i = 0; i < ip_to_string.length; i++){
            ip_to_string = ip_to_string.replace(".", "-");
        }

        firebase.database().ref().child("eureka_db/" + ip_to_string).set({
            viewers_ip: viewers_ip
        });

        firebase.database().ref().child("eureka_db").on("value", function(snapshot){
            views = snapshot.numChildren();
            document.getElementById("view_count_text").innerHTML = "Total Visits: " + views;
        });
  }
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    
    var wkday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var mnth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayn = wkday[d.getDay()];
    var dt = d.getDate();
    var m = mnth[d.getMonth()];
    var y = d.getFullYear();


    document.getElementById("ct").innerHTML = dayn+", "+m+" "+dt+", "+y;

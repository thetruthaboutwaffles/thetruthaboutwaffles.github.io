//*function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    
    document.getElementById('ct').innerHTML = d, hours;
//*}
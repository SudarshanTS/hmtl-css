var hourStore = document.getElementById('hour');
var minStore = document.getElementById('minutes');
var secStore = document.getElementById('seconds');
var startId = document.getElementById('Startbtn');
hourStore.innerHTML = "00";
minStore.innerHTML = "00";
secStore.innerHTML = "00"
var minFlag = false;
var hourFlag = false;
var secFlag = false;
var tempsecFlag = false;
var tempminFlag = false;
var temphourFlag = false;
var mintemp = "";
var hourtemp = "";
var sectemp = "";
var tempMin = 0;
var Timer;

function hourSelected() {
  hourFlag = true;
  minFlag = false;
  secFlag = false;

}

function minSelected() {
  minFlag = true;
  hourFlag = false;
  secFlag = false;

}

function secSelected() {
  secFlag = true;
  minFlag = false;
  hourFlag = false;
}

function key(value) {
  if (mintemp.length <= 1) {
    if (minFlag) {
      mintemp += value;
      minStore.innerHTML = mintemp;
      if (mintemp >= 60) {
        mintemp = mintemp - "60";
        mintemp = checkTime(mintemp);
        mintemp = mintemp.toString();
        minStore.innerHTML = mintemp;
        hourtemp++;
        hourtemp = checkTime(hourtemp);
        hourtemp = hourtemp.toString();
        hourStore.innerHTML = hourtemp;
      }
      if (hourtemp > 24) {
        hourtemp = "00";
        hourStore.innerHTML = hourtemp;
        alert("Enter only numbers between 00 to 24");

      }
    }
  }
  if (hourtemp.length <= 1) {
    if (hourFlag) {
      hourtemp += value;
      hourStore.innerHTML = hourtemp;
      if (hourtemp > 24) {
        hourtemp = "00";
        hourStore.innerHTML = hourtemp;
        alert("Enter only numbers between 00 to 24");

      }
    }
  }
  if (sectemp.length <= 1) {
    if (secFlag) {
      sectemp += value;
      secStore.innerHTML = sectemp;
      if (sectemp >= 60) {
        sectemp = sectemp - "60";
        sectemp = checkTime(sectemp);
        sectemp = sectemp.toString();
        secStore.innerHTML = sectemp;
        mintemp++;
        mintemp = checkTime(mintemp);
        mintemp = mintemp.toString();
        minStore.innerHTML = mintemp;
      }
        if (mintemp >= 60) {
        mintemp = mintemp - "60";
        mintemp = checkTime(mintemp);
        mintemp = mintemp.toString();
        minStore.innerHTML = mintemp;
        hourtemp++;
        hourtemp = checkTime(hourtemp);
        hourtemp = hourtemp.toString();
        hourStore.innerHTML = hourtemp;
      }
      if (hourtemp > 24) {
        hourtemp = "00";
        hourStore.innerHTML = hourtemp;
        alert("Enter only numbers between 00 to 24");

      }

    }
  }


}

function backSpace() {
  if (tempsecFlag == false) {
    secStore.innerHTML = secStore.innerHTML.substring(0, secStore.innerHTML.length - 1);
    sectemp = sectemp.slice(0, 1);
    tempminFlag = false;
    temphourFlag = false;
    if (tempminFlag == false && temphourFlag == false) {
      tempminFlag = true;
      temphourFlag = true;
      tempsecFlag = false;
      if (secStore.innerHTML == "") {
        tempsecFlag = true;
        sectemp = sectemp.slice(0, 0);
        secStore.innerHTML = "00"
      }
    }
  } else if (tempminFlag) {
    minStore.innerHTML = minStore.innerHTML.substring(0, minStore.innerHTML.length - 1);
    mintemp = mintemp.slice(0, 1);
    temphourFlag = false;
    if (temphourFlag == false) {
      tempminFlag = true;
      temphourFlag = true;
      if (minStore.innerHTML == "") {
        tempminFlag = false;
        mintemp = mintemp.slice(0, 0);
        minStore.innerHTML = "00"

      }

    }


  } else if (temphourFlag) {
    hourStore.innerHTML = hourStore.innerHTML.substring(0, hourStore.innerHTML.length - 1);
    hourtemp = hourtemp.slice(0, 1);
    if (hourStore.innerHTML == "") {
      tempsecFlag = false;
      hourtemp = hourtemp.slice(0, 0);
      hourStore.innerHTML = "00"

    }
  }


}

function start() {
  if (secStore.innerHTML >= 60) {
    minStore.innerHTML++;
    minStore.innerHTML = checkTime(minStore.innerHTML);
    secStore.innerHTML = 0;
  }
  if (minStore.innerHTML == 60) {
    hourStore.innerHTML++;
    hourStore.innerHTML = checkTime(hourStore.innerHTML);
    minStore.innerHTML = "00";
  }
  secStore.innerHTML++;
  secStore.innerHTML = checkTime(secStore.innerHTML);
  Timer = setTimeout(start, 1000);
  startId.innerHTML = "STOP";
  startId.setAttribute("onclick", "stop()");
}

function stop() {
  clearTimeout(Timer);
  startId.innerHTML = "START";
  startId.setAttribute("onclick", "start()");
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function Reset() {
  hourStore.innerHTML = "00";
  minStore.innerHTML = "00";
  secStore.innerHTML = "00"
  clearTimeout(Timer);
  sectemp = "";
  mintemp = "";
  hourtemp = "";

  startId.innerHTML = "START";
  startId.setAttribute("onclick", "start()");
}

/* 
     EPOCH TIME — update every 1000 ms
   */
  const timeEl = document.getElementById('epoch-time');

  function refreshTime() {
    timeEl.textContent = Date.now();
  }

  // set immediately on load, then tick every second
  refreshTime();
  setInterval(refreshTime, 1000);
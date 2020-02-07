(function() {
  setFooterYear();

  function setFooterYear(year) {
    var footerYearDom = document.getElementById("footer-year");
    footerYearDom.innerText = year || new Date().getFullYear();
  }
})();

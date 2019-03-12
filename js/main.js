window.onscroll = function () {

   let menuBar = document.querySelector('#menuBar');

   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      menuBar.style.background = '#536dfe';
      menuBar.style.boxShadow = '0px 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
   } else {
      menuBar.style.background = 'rgba(0, 0, 0, 0)';
      menuBar.style.boxShadow = 'none';
   }
};
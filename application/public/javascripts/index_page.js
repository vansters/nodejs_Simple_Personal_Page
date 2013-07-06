$(document).ready(function() {
      drawProcessGraph();
      var  btnTech = $('#btn-tech'),
           btnTool = $('#btn-tool'),
           btnMore = $('#btn-more');
      btnTech.click(function(event) {
        changeTab(btnTech,'tab-tech');
      });
      btnTool.click(function(event) {
        changeTab(btnTool,'tab-tool');
      });
      btnMore.click(function(event) {
        changeTab(btnMore,'tab-more');
      });

      function changeTab (tabMenu,tabConten) {
        $('.tabs-menu>div>span').each(function(){
            if($(this).hasClass('itemtabActivated')){
              $(this).removeClass('itemtabActivated');
              $(this).addClass('itemtab');
            }
        });
        tabMenu.addClass('itemtabActivated');
        tabMenu.removeClass('itemtab');
        
        $('.tab').each(function(index) {
          if(this.id == tabConten){
            $(this).fadeIn(1000);
          }else{
            $(this).hide();
          } 
        });
      }

      function drawProcessGraph () {
        var canvas = document.getElementById('devProcess');
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '20pt VT323';

        ctx.font = '15pt VT323';
        ctx.fillText('Descubrir e Investigar', 600, 125);
        ctx.fillText('Analizar & Diseñar Procesos', 40, 100);
        ctx.fillText('Desarrollar', 200, 300);
        ctx.fillText('Evaluar', 600, 275);

        ctx.beginPath();
        ctx.arc(450, 200, 100, 0 * Math.PI, 1.7 * Math.PI, true);
        ctx.lineWidth = 75;
        ctx.strokeStyle = "#ff6160";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(450, 200, 100, 1.7 * Math.PI, 1 * Math.PI, true);
        ctx.strokeStyle = "#f5f5f5";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(450, 200, 100, 1 * Math.PI, .3 * Math.PI, true);
        ctx.strokeStyle = "#65b9aa";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(450, 200, 100, .3 * Math.PI, 2 * Math.PI, true);
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
      }
    });
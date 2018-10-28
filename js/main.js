function changeBorderRadius() {
  //получаем значение радиусов углов с input'ов
  var clt = document.getElementById('clt').value;
  var crt = document.getElementById('crt').value;
  var clb = document.getElementById('clb').value;
  var crb = document.getElementById('crb').value;

  //получаем span'ы для отображения значений в input'ах
  var tlt = document.getElementById('tlt');
  var trt = document.getElementById('trt');
  var tlb = document.getElementById('tlb');
  var trb = document.getElementById('trb');
  
  //передача значений input'ов в span'ы
  tlt.innerHTML = clt;
  trt.innerHTML = crt;
  tlb.innerHTML = clb;
  trb.innerHTML = crb;  

  //получаем доступ к демонстрационному блоку
  var block = document.getElementById('block');

  //изменение border-radius'а демонстрационного блока
  block.style.borderRadius = clt + "px " + crt + "px " + clb + "px " + crb + "px";
}
function countDown() {
  const diasCasamento = new Date('19 October 2024 16:00:00');
  const dataAtual = new Date();
  const quantoTempo = diasCasamento.getTime() - dataAtual.getTime();
  const dias = Math.floor(quantoTempo / (24 * 60 * 60 * 1000));
  const horas = Math.floor(quantoTempo / (60 * 60 * 1000)) % 24;
  const minutos = Math.floor(quantoTempo / (60 * 1000)) % 60;
  const segundos = Math.floor(quantoTempo / 1000) % 60;
  const diasDom = (document.querySelector('.dias').innerHTML = dias);
  const horasDom = (document.querySelector('.horas').innerHTML = horas);
  const minutosDom = (document.querySelector('.minutos').innerHTML = minutos);
  const segundosDom = (document.querySelector('.segundos').innerHTML =
    segundos);
}

setInterval(() => {
  countDown();
}, 1000);

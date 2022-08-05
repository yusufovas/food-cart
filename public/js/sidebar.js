const url = window.location.href.split('/')[3]
if(url === 'dashboard') {
  const p = document.createElement('p')
  p.classList = 'p'
  p.innerHTML = 'TOUCHE RESTAURANT'
  document.body.append(p)
}
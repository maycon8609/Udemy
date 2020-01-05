const conteudo = document.getElementById('conteudo')

document.querySelectorAll('[wm-nav]').forEach(link => {
  link.onclick = function (e) {
    e.preventDefault()
    fetch(link.getAttribute('wm-nav'))
      .then(resp => resp.text())
      .then(html => conteudo.innerHTML = html)
  }
})

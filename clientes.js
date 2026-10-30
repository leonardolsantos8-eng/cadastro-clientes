document.addEventListener('DOMContentLoaded', () => {
    const listacliente = document.getElementById('lista-clientes')

    const clientes = JSON.parse(localStorage.getItem('clientes')) || []

    if (clientes.length === 0) {
        listacliente.innerHTML = `<li>Nenhum cliente cadastrado.</li>`
    }

clientes.forEach(cliente => {
    const li = document.createElement('li')
    li.innerHTML = `
    <strong>Nome:</strong> ${cliente.nome} <br>
    <strong>E-mail:</strong> ${cliente.email} <br>
    <strong>Telefone:</strong> ${cliente.telefone} 
    `
    listacliente.appendChild(li)
    
});

})
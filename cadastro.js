function funcaocadastrarcliente(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    
    if (!nome || !email || !telefone){
        alert('Por favor, preencha todos os campos.')
        return
    }
    
    //cria uma variavel com os dados do clente.
    const novocliente = {nome, email, telefone}

    //pega a lista de cliente ja existente ou cria uma vazia.
    let listaclientes = JSON.parse(localStorage.getItem('clientes')) || []

    // adiciona um novo cliente na lista.
    listaclientes.push(novocliente)

    //salva no localstorage(armazenament local no navegador)
    localStorage.setItem('clientes', JSON.stringify(listaclientes))

    // mensagem do navegador
    alert('Cliente cadastrado com sucesso!')

    document.getElementById('formulario-cadastro').reset()
}
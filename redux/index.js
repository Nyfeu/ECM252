const Redux = require('redux')
const { createStore, combineReducers } = Redux

// escrever uma função criadora de ação
// ela produz uma ação que representa a criação de um novo contrato

const criarContrato = (nome, taxa) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: { nome, taxa }
    }
}

// escrever uma nova criadora de ação
// ela serve para cancelar contratos, dado um nome

const cancelarContrato = (nome, multa) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: { nome, multa }
    }
}

const solicitarCashback = (nome, valor) => {
    return {
        type: "SOLICITAR_CASHBACK",
        payload: { nome, valor }
    }
}

const historicoDePedidosDeCashback = (historicoDePedidosDeCashback = [], acao) => {
    return acao.type === "SOLICITAR_CASHBACK"
    ? [...historicoDePedidosDeCashback, acao.payload]
    : historicoDePedidosDeCashback
}

// resolver a manipulação do caixa, usando somente operadores ternários
const caixa = function(dinheiroEmCaixa = 0, acao) {
    return acao.type === "SOLICITAR_CASHBACK"
    ? dinheiroEmCaixa - acao.payload.valor
    : acao.type === "CRIAR_CONTRATO" 
    ? dinheiroEmCaixa + acao.payload.valor
    : acao.type === "CANCELAR_CONTRATO"
    ? dinheiroEmCaixa - acao.payload.multa
    : dinheiroEmCaixa
}

// fazer o proximo reducer
const contratos = (listaDeContratosAtual = [], acao) => {
    return acao.type === "CRIAR_CONTRATO"
    ? [...listaDeContratosAtual, acao.payload]
    : acao.type === "CANCELAR_CONTRATO"
    ? listaDeContratosAtual.filter(s => s.nome !== acao.payload.nome)
    : listaDeContratosAtual
}

// combinando todos os reducers - Redux
const todosOsReducers = combineReducers({
    historicoDePedidosDeCashback,
    caixa,
    contratos
})

const store = createStore(todosOsReducers)

// - cria um contrato para José
// - cria um contrato para Maria
// - Solicita cashback de 10 para Maria
// - Solicita cashback de 20 para José
// - Cancela o contrato de Maria
//
// Detalhe: Após cada atividade, exibir o estado atual

store.subscribe(() => console.log(store.getState()))

store.dispatch(criarContrato("José", 1.1))
store.dispatch(criarContrato("Maria", 1.1))
store.dispatch(solicitarCashback("José", 10))
store.dispatch(solicitarCashback("Maria", 17))
store.dispatch(cancelarContrato("Maria"))
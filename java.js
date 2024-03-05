// Exercício 5 - DESAFIO

var total = 0;
var listaProdutos = "";

while (true) {
    // Entrada de dados do produto
    var nomeProduto = prompt("Digite o nome do produto ('fim' para encerrar):");
    
    if (nomeProduto.toLowerCase() === "fim") {
        break;
    }

    var precoUnitario = prompt("Digite o preço unitário do produto:");
    var quantidade = prompt("Digite a quantidade do produto:");

    // Cálculo do subtotal
    var subtotal = parseFloat(precoUnitario) * parseInt(quantidade);

    // Adição ao total
    total += subtotal;

    // Adição à lista de produtos
    listaProdutos += "Produto: " + nomeProduto +
                    "\nQuantidade: " + quantidade +
                    "\nPreço Unitário: R$" + precoUnitario +
                    "\nSubtotal: R$" + subtotal.toFixed(2) + "\n\n";
}

// Apresentação da lista de produtos
if (listaProdutos !== "") {
    alert(listaProdutos + "Total da compra: R$" + total.toFixed(2));
} else {
    alert("Nenhum produto foi adicionado.");
}

// Função para abrir o modal com o conteúdo específico
function openModal(content) {
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('service-modal').style.display = "block";
}

// Fechar o modal
document.querySelector('.modal .close').addEventListener('click', function() {
    document.getElementById('service-modal').style.display = "none";
});

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('service-modal')) {
        document.getElementById('service-modal').style.display = "none";
    }
}

// Conteúdo para cada card
const serviceContent1 = `
<div class="quadro">
    <h2>Serviço 1</h2><br>
    <p>Descrição geral do Serviço 1. Aqui você pode adicionar informações importantes sobre o serviço e como ele pode beneficiar o cliente.</p>
    <br><h3>O Que Inclui o Serviço 1?</h3><br>
    <p><strong>Detalhe 1:</strong> Descrição detalhada do primeiro aspecto do Serviço 1.</p>
    <p><strong>Detalhe 2:</strong> Descrição detalhada do segundo aspecto do Serviço 1.</p>
    <p><strong>Detalhe 3:</strong> Descrição detalhada do terceiro aspecto do Serviço 1.</p><br>
    <a href="https://example.com/marcar-consulta" class="button">Marcar Consulta</a>
</div>
`;

const serviceContent2 = `
<div class="quadro">
    <h2>Serviço 2</h2><br>
    <p>Descrição geral do Serviço 2. Aqui você pode adicionar informações importantes sobre o serviço e como ele pode beneficiar o cliente.</p>
    <br><h3>O Que Inclui o Serviço 2?</h3><br>
    <p><strong>Detalhe 1:</strong> Descrição detalhada do primeiro aspecto do Serviço 2.</p>
    <p><strong>Detalhe 2:</strong> Descrição detalhada do segundo aspecto do Serviço 2.</p>
    <p><strong>Detalhe 3:</strong> Descrição detalhada do terceiro aspecto do Serviço 2.</p><br>
    <a href="https://example.com/marcar-consulta" class="button">Marcar Consulta</a>
</div>
`;

const serviceContent3 = `
<div class="quadro">
    <h2>Serviço 3</h2><br>
    <p>Descrição geral do Serviço 3. Aqui você pode adicionar informações importantes sobre o serviço e como ele pode beneficiar o cliente.</p>
    <br><h3>O Que Inclui o Serviço 3?</h3><br>
    <p><strong>Detalhe 1:</strong> Descrição detalhada do primeiro aspecto do Serviço 3.</p>
    <p><strong>Detalhe 2:</strong> Descrição detalhada do segundo aspecto do Serviço 3.</p>
    <p><strong>Detalhe 3:</strong> Descrição detalhada do terceiro aspecto do Serviço 3.</p><br>
    <a href="https://example.com/marcar-consulta" class="button">Marcar Consulta</a>
</div>
`;

// Adicionando evento de clique para cada card
document.getElementById('limpeza-card').addEventListener('click', function() {
    openModal(serviceContent1);
});

document.getElementById('ortodontia-card').addEventListener('click', function() {
    openModal(serviceContent2);
});

document.getElementById('implante-card').addEventListener('click', function() {
    openModal(serviceContent3);
});

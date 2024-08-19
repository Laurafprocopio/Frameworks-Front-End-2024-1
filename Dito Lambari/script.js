// Seletores de elementos
const menu = document.getElementById("menu");
const recipeModal = document.getElementById("recipe-modal");
const recipeContent = document.getElementById("recipe-content");
const closeModalBtn = document.getElementById("close-modal-btn");
const openModalBtn = document.getElementById("open-modal-btn");
const spanItem = document.getElementById("date-span");

// Dados das receitas
const recipes = {
    caldo_de_piranha: {
        title: "Caldo de Piranha",
        ingredients: [
            "Ingredientes do Caldo de Piranha..."
        ],
        preparation: "Modo de preparo do Caldo de Piranha: Passo a passo detalhado..."
    },
    file_de_tilapia_frito: {
        title: "File de Tilapia Frito",
        ingredients: [
            "Ingredientes do File de Tilapia Frito..."
        ],
        preparation: "Modo de preparo do File de Tilapia Frito: Passo a passo detalhado..."
    },
    file_de_tilapia: {
        title: "File de Tilapia",
        ingredients: [
            "Ingredientes do File de Tilapia..."
        ],
        preparation: "Modo de preparo do File de Tilapia: Passo a passo detalhado..."
    },
    mojica_de_pintado: {
        title: "Mojica de Pintado",
        ingredients: [
            "Ingredientes da Mojica de Pintado..."
        ],
        preparation: "Modo de preparo da Mojica de Pintado: Passo a passo detalhado..."
    }
};

// Função para abrir o modal com a receita
function openRecipeModal(recipeKey) {
    const recipe = recipes[recipeKey];
    if (recipe) {
        recipeContent.innerHTML = `
            <h3 class="font-bold text-xl mb-4">${recipe.title}</h3>
            <h4 class="font-semibold text-lg mt-2">Ingredientes:</h4>
            <ul class="list-disc pl-5">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h4 class="font-semibold text-lg mt-2">Modo de Preparo:</h4>
            <p>${recipe.preparation}</p>
        `;
        recipeModal.style.display = "flex";
    }
}

// Função para fechar o modal
function closeRecipeModal() {
    recipeModal.style.display = "none";
}

// Evento para abrir o modal quando um botão for clicado
$(document).on("click", "[data-bs-toggle='modal']", function() {
    const recipeKey = $(this).data("recipe");
    openRecipeModal(recipeKey);
});

// Evento para fechar o modal quando clicar fora dele
recipeModal.addEventListener("click", function(event) {
    if (event.target === recipeModal) {
        closeRecipeModal();
    }
});

// Evento para fechar o modal ao clicar no botão de fechar
closeModalBtn.addEventListener("click", closeRecipeModal);

// Evento para abrir o modal de informações adicionais
openModalBtn.addEventListener("click", function() {
    alert("Mais informações sobre a receita serão mostradas aqui.");
});

// Função para verificar se o restaurante está aberto
function checkRestaurantOpen() {
    const date = new Date();
    const hour = date.getHours();
    return hour >= 18 && hour < 22; 
}

// Atualizar o estado de abertura do restaurante
function updateRestaurantStatus() {
    const isOpen = checkRestaurantOpen();
    spanItem.classList.toggle("bg-green-600", isOpen);
    spanItem.classList.toggle("bg-red-500", !isOpen);
}

// Inicializar o status do restaurante
updateRestaurantStatus();

// fim

// inicio do script de pedidos 


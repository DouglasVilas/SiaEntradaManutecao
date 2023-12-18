
// Adicione um evento de clique ao botão

document.querySelectorAll('.dropbtn, .dropbtnwhite').forEach(function (button) {
  button.addEventListener('click', function (e) {
    // Evite que o clique feche o dropdown imediatamente
    e.stopPropagation();

    // Oculte todos os dropdowns
    document.querySelectorAll('.dropdown-content, .dropdown2-content').forEach(function (content) {
      content.style.display = 'none';
    });

    // Exiba apenas o dropdown correspondente ao botão clicado
    var dropdown = this.classList.contains('dropbtn') ? this.nextElementSibling : this.nextElementSibling.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Adicione um evento de clique ao documento para fechar os dropdowns se clicar fora deles
document.addEventListener('click', function () {
  // Oculte os dropdowns
  document.querySelectorAll('.dropdown-content, .dropdown2-content').forEach(function (content) {
    content.style.display = 'none';
  });
});



// Para aumentar um campo ou diminuir

const resizableContainer = document.getElementById("resizableContainer");
const resizableInput = document.getElementById("resizableInput");

resizableContainer.addEventListener("mousedown", function (e) {
  if (e.target === resizableInput) {
    return;
  }

  initDrag(e);
});

function initDrag(e) {
  e.preventDefault();

  let startY = e.clientY;
  let startHeight = resizableContainer.clientHeight;

  function doDrag(e) {
    let height = startHeight + e.clientY - startY;


    // Define uma altura mínima, ajuste conforme necessário
    let minHeight = 100;
    height = Math.max(height, minHeight);

    resizableContainer.style.height = height + "px";
  }

  function stopDrag() {
    document.removeEventListener("mousemove", doDrag);
    document.removeEventListener("mouseup", stopDrag);
  }

  document.addEventListener("mousemove", doDrag);
  document.addEventListener("mouseup", stopDrag);
}

resizableInput.addEventListener("input", function () {
  // Não faz nada ao digitar para evitar ajuste automático
});


// validacao de imei 
function validateImei() {
  let inputElement = document.getElementById("imei");
  let inputValue = inputElement.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
  inputValue = inputValue.substring(0, 15); // Limita para 15 caracteres
  inputElement.value = inputValue; // Atualiza o valor no campo
}

//validacao de simcard

function validateSimcard(simcardType) {
  let inputElement = document.getElementById(simcardType);
  let inputValue = inputElement.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
  inputValue = inputValue.substring(0, 20); // Limita para 20 caracteres
  inputElement.value = inputValue; // Atualiza o valor no campo
}



// MUDANDO TEXTOS NOS BUTTON 
// Função atualizar o texto e a cor de um botão
function updateButton(buttonId, labelText) {
  const button = document.getElementById(buttonId);
  button.innerText = labelText;
  button.style.backgroundColor = 'rgb(0, 191, 255)' ;
  button.style.color = 'black';
}

function updateInputRight0Text(selectedText) {
  updateButton('gavetainfo', 'GAVETA DE CHIP | ' + selectedText);
}

function updateInputRight1Text(selectedText) {
  updateButton('batteryinfo', 'BATERIA | ' + selectedText);
}

function updateInputRight2Text(selectedText) {
  updateButton('cabousbinfo', 'CABO USB - ATM | ' + selectedText);
}

function updateInputRight3Text(selectedText) {
  updateButton('fonteinfo', 'FONTE - ATM | ' + selectedText);
}

function updateInputRight4Text(selectedText) {
  updateButton('cabousbterceirosinfo', 'CABO USB - TERCEIROS | ' + selectedText);
}

function updateInputRight5Text(selectedText) {
  updateButton('fonteterceirosinfo', 'FONTE - TERCEIROS | ' + selectedText);
}

function updateInputRight6Text(selectedText) {
  updateButton('capatpuinfo', 'CAPA TPU | ' + selectedText);
}

function updateInputRight7Text(selectedText) {
  updateButton('capacouroinfo', 'CAPA COURO | ' + selectedText);
}

function updateInputRight8Text(selectedText) {
  updateButton('caparuggedinfo', 'CAPA RUGGED | ' + selectedText);
}

function updateInputRight9Text(selectedText) {
  updateButton('chipinfo', 'CHIP | ' + selectedText);
}



// Função para associar um manipulador de eventos a todas as opções do dropdown
function setupDropdownHandlers(dropdownId, updateFunction) {
  var options = document.getElementById(dropdownId).getElementsByTagName('a');

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
      updateFunction(this.innerText.trim());
    });
  }
}


// Configurando manipuladores de eventos para os dropdowns correspondentes
setupDropdownHandlers('selecao0', updateInputRight0Text);
setupDropdownHandlers('selecao', updateInputRight1Text);
setupDropdownHandlers('selecao2', updateInputRight2Text);
setupDropdownHandlers('selecao3', updateInputRight3Text);
setupDropdownHandlers('selecao4', updateInputRight4Text);
setupDropdownHandlers('selecao5', updateInputRight5Text);
setupDropdownHandlers('selecao6', updateInputRight6Text);
setupDropdownHandlers('selecao7', updateInputRight7Text);
setupDropdownHandlers('selecao8', updateInputRight8Text);
setupDropdownHandlers('selecao9', updateInputRight9Text);




//para exibir o pop up de enviado com sucesso

// Encontrar elementos necessários
// Encontrar elementos necessários
const checklistModal = document.getElementById('checklistModal');
const closeModalButton = document.getElementById('closeModal');
const salvarButton = document.getElementById('right');

// Função para abrir o pop-up
function openChecklistModal() {
    checklistModal.style.display = 'block';
}

// Função para fechar o pop-up
function closeChecklistModal() {
    checklistModal.style.display = 'none';
}

// Adicionar evento de clique no botão "Salvar"
salvarButton.addEventListener('click', function (event) {
    event.preventDefault();
    openChecklistModal();
});

// Adicionar evento de clique no botão de fechar no pop-up
closeModalButton.addEventListener('click', function (event) {
    event.preventDefault();
    closeChecklistModal();
});

// Fechar o pop-up se o usuário clicar fora dele
window.addEventListener('click', function (event) {
    if (event.target === checklistModal) {
        closeChecklistModal();
    }
});

// Fechar o pop-up se o usuário pressionar a tecla Esc
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeChecklistModal();
    }
});




// cancelar os button para atualizar futuramente 

// const cancelarButton = document.getElementById('right2');
const incluirFotoButton = document.getElementById('left');
const selecionarProtocoloOriginalButton = document.getElementById('protocolo');

// cancelarButton.disabled = true;
incluirFotoButton.disabled = true;
selecionarProtocoloOriginalButton.disabled = true;


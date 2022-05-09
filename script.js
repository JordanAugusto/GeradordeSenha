// Syncing the Range input and Number input
const passwordLengthRange = document.getElementById("password-length-range");
const passwordLengthNumber = document.getElementById("password-length-number");
passwordLengthRange.addEventListener("input", tamanhodasenha);
passwordLengthNumber.addEventListener("input", tamanhodasenha);

function tamanhodasenha(e) {
   const value = e.target.value;
   if (value < parseInt(passwordLengthNumber.min)) {
      passwordLengthNumber.value = passwordLengthNumber.min;
   } else {
      if (value > parseInt(passwordLengthNumber.max)) {
         passwordLengthNumber.value = passwordLengthNumber.max;
      } else {
         passwordLengthNumber.value = value;
      }
      passwordLengthRange.value = value;
   }
}

// INICIALIZANDO O PROJETO 
const letrasmaiusculo = getStringOfCharacters(65, 90);
const letrasminusculas = getStringOfCharacters(97, 122);
const numeros = getStringOfCharacters(48, 57);
const simbolos = getStringOfCharacters(33, 47).concat(getStringOfCharacters(58, 64))
   .concat(getStringOfCharacters(91, 96)).concat(getStringOfCharacters(123, 126));

// fUNCTION: INICIALIZANDO TODO O PROJETO
function getStringOfCharacters(low, high) {
   let string = "", i;
   for (i = low; i <= high; i++) string += String.fromCharCode(i);
   return string;
}

// GERADOR DE SENHAS
function gerandosenha() {
   const includeUppercase = document.getElementById("uppercase").checked;
   const includeLowercase = document.getElementById("lowercase").checked;
   const includenumeros = document.getElementById("numeros").checked;
   const includesimbolos = document.getElementById("simbolos").checked;

   // SE NAO TIVER NENHUMA RESTRIÇÃO
   if (!includeUppercase && !includeLowercase && !includenumeros && !includesimbolos) {
      document.getElementById("password").innerText = "Sua senha...";
      alert("Defina algum campo.");
   } else {
      const passwordLength = document.getElementById("password-length-number").value;

      // GERANDO SENHAS COM RESTRIÇÕES
      let characters = "";
      if (includeUppercase) characters += letrasmaiusculo;
      if (includeLowercase) characters += letrasminusculas;
      if (includenumeros) characters += numeros;
      if (includesimbolos) characters += simbolos;

      const charactersLength = characters.length;
      let i, password = "";
      for (i = 0; i < passwordLength; i++) {
         // obtendo um caractere aleatorio para adicionar a senha
         password += characters[Math.floor(Math.random() * charactersLength)];
      }

      // monstrando senha no visor
      document.getElementById("password").innerText = password;
   }
}

// COPIAR A SENHA 
function copiarsenhar() {
   const password = document.getElementById("password").innerText;
   if (password === "Sua senha...") {
      alert("Crie a senha primeiro");
   } else {
      navigator.clipboard.writeText(password);
      alert("Senha copiada!");
   }
}

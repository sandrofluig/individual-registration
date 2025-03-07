$(function () {
  atividadeAtual();
});

// Pega os códigos de identificação
function atividadeAtual() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();
  atividades(ATIVIDADE_ATUAL);
}

// Chama as funções de feedback, show camera, ocultar e aparecer
function atividades(ATIVIDADE_ATUAL) {
  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    sairCampo();
    regrasCampoNomeCompleto();
    regrasCampoCPF();
    regrasCampoEmail();
    regrasCampoTelefoneCelular();
    regrasCampoTelefoneFixo();
    regrasCampoCEP();
    regrasCampoEstado();
    regrasCampoCidade();
    regrasCampoBairro();
    regrasCampoNumero();
    regrasCampoRua();
    regrasCampoNomeBanco();
    regrasCampoCodigoBanco();
    regrasCampoAgencia();
    regrasCampoContaCorrente();
    esconderAprovador();
    esconderCampoNomeAbreviado();
  } else if (ATIVIDADE_ATUAL == 5) {
    aparecerAprovador();
    aparecerCampoNomeAbreviado();
    esconderinputAnexo();
    regrasCampoAbreviado();
    sairCampoNomeAbreviado();
  } else if (ATIVIDADE_ATUAL == 9) {
    sairCampo();
    regrasDeCampos();
    esconderCampoNomeAbreviado();
  }
}

// Funções de chamada de feedback dos inputs
function regrasCampoCPF() {
  $("[name=CPF]").on("keyup", function () {
    validarCPFInput();
  });
  $("[name=CPF]").on("blur", function () {
    validarCPFInput();
  });
}

function regrasCampoNomeCompleto() {
  $("[name=nomecompleto]").on("keyup", function () {
    validarNomeCompletoInput();
  });
  $("[name=nomecompleto]").on("blur", function () {
    validarNomeCompletoInput();
  });
}

function regrasCampoAbreviado() {
  $("[name=nomeabreviado]").on("keyup", function () {
    validarNomeAbreviado();
  });
  $("[name=nomeabreviado]").on("blur", function () {
    validarNomeAbreviado();
  });
}

function regrasCampoEmail() {
  $("[name=email]").on("keyup", function () {
    validarEmailInput();
  });
  $("[name=email]").on("blur", function () {
    validarEmailInput();
  });
}

function regrasCampoTelefoneCelular() {
  $("[name=telefonecelular]").on("keyup", function () {
    validarTelefoneCelInput();
  });
  $("[name=telefonecelular]").on("blur", function () {
    validarTelefoneCelInput();
  });
}

function regrasCampoTelefoneFixo() {
  $("[name=telefonefixo]").on("keyup", function () {
    validarTelefoneFixoInput();
  });
  $("[name=telefonefixo]").on("blur", function () {
    validarTelefoneFixoInput();
  });
}

function regrasCampoCEP() {
  $("[name=CEP]").on("keyup", function () {
    validarCEPInput();
  });
  $("[name=CEP]").on("blur", function () {
    validarCEPInput();
  });
}

function regrasCampoEstado() {
  $("[name=estado]").on("keyup", function () {
    validarEstadoInput();
  });
  $("[name=estado]").on("blur", function () {
    validarEstadoInput();
  });
}

function regrasCampoCidade() {
  $("[name=cidade]").on("keyup", function () {
    validarCidadeInput();
  });
  $("[name=cidade]").on("blur", function () {
    validarCidadeInput();
  });
}

function regrasCampoBairro() {
  $("[name=bairro]").on("keyup", function () {
    validarBairroInput();
  });
  $("[name=bairro]").on("blur", function () {
    validarBairroInput();
  });
}

function regrasCampoNumero() {
  $("[name=numero]").on("keyup", function () {
    validarNumeroInput();
  });
  $("[name=numero]").on("blur", function () {
    validarNumeroInput();
  });
}

function regrasCampoRua() {
  $("[name=rua]").on("keyup", function () {
    validarRuaInput();
  });
  $("[name=rua]").on("blur", function () {
    validarRuaInput();
  });
}

function regrasCampoNomeBanco() {
  $("[name=nomebanco]").on("keyup", function () {
    validarNomeBancoInput();
  });
  $("[name=nomebanco]").on("blur", function () {
    validarNomeBancoInput();
  });
}

function regrasCampoCodigoBanco() {
  $("[name=codigobanco]").on("keyup", function () {
    validarCodigoBancoInput();
  });
  $("[name=codigobanco]").on("blur", function () {
    validarCodigoBancoInput();
  });
}

function regrasCampoAgencia() {
  $("[name=agencia]").on("keyup", function () {
    validarAgenciaInput();
  });
  $("[name=agencia]").on("blur", function () {
    validarAgenciaInput();
  });
}

function regrasCampoContaCorrente() {
  $("[name=contacorrente]").on("keyup", function () {
    validarContaCorrenteInput();
  });
  $("[name=contacorrente]").on("blur", function () {
    validarContaCorrenteInput();
  });
}

function sairCampo() {
  $(
    "[name=CPF],[name=nomecompleto],[name=email],[name=telefonecelular],[name=telefonefixo],[name=CEP],[name=estado],[name=cidade],[name=bairro],[name=numero],[name=rua],[name=nomebanco],[name=codigobanco],[name=agencia],[name=contacorrente]"
  ).on("blur", function (eval) {
    var nomeCampo = eval.currentTarget.name;
    setBordaCinza(nomeCampo);
  });
}

function sairCampoNomeAbreviado() {
  $("[name=nomeabreviado]").on("blur", function (eval) {
    var nomeCampo = eval.currentTarget.name;
    setBordaCinza(nomeCampo);
  });
}

// Funções para mostrar os input
function aparecerCampoNomeAbreviado() {
  $(".CampoNomeAbreviado").show();
}

function aparecerAprovador() {
  $(".painelAprovador").show();
}

// Funções para ocultar os input
function esconderCampoNomeAbreviado() {
  $(".CampoNomeAbreviado").hide();
}

function esconderAprovador() {
  $(".painelAprovador").hide();
}

function esconderinputAnexo() {
  $(".inputAnexo").hide();
}

// Show camera function
function showCamera(param) {
  JSInterface.showCamera();
}

// Bloquear input
function setBordaCinza(nomeCampo) {
  if ($("[name=" + nomeCampo + "]").val() == "") {
    $("[name=" + nomeCampo + "]").attr("style", "border-color:red;");
  }
}

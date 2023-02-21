const area = prompt("Qual a área que você deseja estudar? Digite 1 para Front-end, 2 para Back-end ou 3 para Mobile");
if(area == 1) {
  alert("Você escolheu Front-end! Que legal!");

  const front = prompt("Você deseja estudar React ou Vue? Digite 1 para React ou 2 para Vue");
  if(front == 1){
    alert("Você sabia que o React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web?");
  } else if(front == 2){
    alert("Você sabia que o Vue é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única?");
  } else {
    alert("Você não digitou um valor válido.");
  }
} else if(area == 2) {
  alert("Você escolheu Back-end! Que legal!");

  const back = prompt("Você deseja estudar C# ou Java? Digite 1 para C# ou 2 para Java");
  if(back == 1){
    alert("Você sabia que o C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET ?");
  } else if(back == 2){
    alert("Você sabia que o Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90?");
  } else {
    alert("Você não digitou um valor válido.");
  }
} else if(area == 3) {
  alert("Você escolheu Mobile! Que legal!");

  const mobile = prompt("Você deseja estudar React Native ou Flutter? Digite 1 para React Native ou 2 para Flutter");
  if(mobile == 1){
    alert ("Você sabia que o React Native é uma biblioteca JavaScript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa?");
  } else if(mobile == 2){
    alert("Você sabia que oFlutter é um kit de desenvolvimento de interface de usuário, de código aberto, criado pela empresa Google em 2015, que possibilita a criação de aplicativos compilados nativamente, para os sistemas operacionais Android, iOS, Windows, Mac, Linux e, Fuchsia e Web?");
  } else {
    alert("Você não digitou um valor válido.");
  }
} else {
  alert("Você não digitou um valor válido.");
}

const especializacao = prompt("Você prefere especializar-se na area escolhida ou se tornar Fullstack? Digite 1 para especializar-se ou 2 para se tornar Fullstack");

if(especializacao == 1) {
  alert("Você escolheu se especializar na area escolhida!");
} else {
  alert("Você escolheu se tornar Fullstack!");
}

let continuar = "ok";
 
while(continuar == "ok"){
  const continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? digite ok para continuar");
  if(continuar == "ok"){
    const tech = prompt("Digite uma tecnologia que você deseja aprender");
    if(tech == "javascrip"){
      alert("Você sabia que o JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma?")
    } else if(tech == "typescript"){
      alert("Você sabia que o TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem?")
    } else if(tech == "python"){
      alert("Você sabia que o Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte?")
    } else if(tech == "c++"){
      alert("Você sabia que o C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores?")
    } else if(tech == "go"){
      alert("Você sabia que o Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno?")
    } else if(tech == "lua"){
      alert("Você sabia que o Lua é uma linguagem de programação interpretada, de script em alto nível, com tipagem dinâmica e multiparadigma, reflexiva e leve, projetada por Tecgraf da PUC-Rio em 1993 para expandir aplicações em geral, de forma extensível, para prototipagem e para ser embarcada em softwares complexos, como jogos?")
    }
    
  } else {
    continuar = "não";
  }
}
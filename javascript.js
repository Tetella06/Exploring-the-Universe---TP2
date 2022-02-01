//função do botao topo

let botaoTopo;
botaoTopo = document.querySelector("#botaoTopo");

//função
botaoTopo.addEventListener("click", function() {
    window.scrollTo(0,0);
});

//codigo das perguntas de mercúrio


//pegar botao mercurio
let btnMercurio;
btnMercurio = document.querySelector('#btnMercurio');
//pegar a div


btnMercurio.addEventListener('click', function() {
    let perguntasMercurio;
    perguntasMercurio = document.querySelector('#perguntasMercurio');   
    if (perguntasMercurio.style.display === 'block') {
        perguntasMercurio.style.display = 'none';
    }
    
    else {
        perguntasMercurio.style.display = 'block';
    }
});

//venus
let btnVenus;
btnVenus = document.querySelector('#btnVenus');

btnVenus.addEventListener('click', function() {
    //pegar a div
    let perguntasVenus;
    perguntasVenus = document.querySelector('#perguntasVenus');
    if (perguntasVenus.style.display === 'block') {
        perguntasVenus.style.display = 'none';
    }
    
    else {
        perguntasVenus.style.display = 'block';
    }
});

let btnTerra;
btnTerra = document.querySelector('#btnTerra');

btnTerra.addEventListener('click', function() {
    //pegar a div
    let perguntasTerra;
    perguntasTerra = document.querySelector('#perguntasTerra');
    if (perguntasTerra.style.display === 'block') {
        perguntasTerra.style.display = 'none';
    }
    
    else {
        perguntasTerra.style.display = 'block';
    }
});

let btnMarte;
btnMarte = document.querySelector('#btnMarte');

btnMarte.addEventListener('click', function() {
    //pegar a div
    let perguntasMarte;
    perguntasMarte = document.querySelector('#perguntasMarte');
    if (perguntasMarte.style.display === 'block') {
        perguntasMarte.style.display = 'none';
    }
    
    else {
        perguntasMarte.style.display = 'block';
    }
});

let btnJupiter;
btnJupiter = document.querySelector('#btnJupiter');

btnJupiter.addEventListener('click', function() {
    //pegar a div
    let perguntasJupiter;
    perguntasJupiter = document.querySelector('#perguntasJupiter');
    if (perguntasJupiter.style.display === 'block') {
        perguntasJupiter.style.display = 'none';
    }
    
    else {
        perguntasJupiter.style.display = 'block';
    }
});

let btnSaturno;
btnSaturno = document.querySelector('#btnSaturno');

btnSaturno.addEventListener('click', function() {
    //pegar a div
    let perguntasSaturno;
    perguntasSaturno = document.querySelector('#perguntasSaturno');
    if (perguntasSaturno.style.display === 'block') {
        perguntasSaturno.style.display = 'none';
    }
    
    else {
        perguntasSaturno.style.display = 'block';
    }
});

let btnUrano;
btnUrano = document.querySelector('#btnUrano');

btnUrano.addEventListener('click', function() {
    //pegar a div
    let perguntasUrano;
    perguntasUrano = document.querySelector('#perguntasUrano');
    if (perguntasUrano.style.display === 'block') {
        perguntasUrano.style.display = 'none';
    }
    
    else {
        perguntasUrano.style.display = 'block';
    }
});


let btnNetuno;
btnNetuno = document.querySelector('#btnNetuno');

btnNetuno.addEventListener('click', function() {
    //pegar a div
    let perguntasNetuno;
    perguntasNetuno = document.querySelector('#perguntasNetuno');
    if (perguntasNetuno.style.display === 'block') {
        perguntasNetuno.style.display = 'none';
    }
    
    else {
        perguntasNetuno.style.display = 'block';
    }
});


let divMercurio = document.querySelector('#pontuacao-mercurio');
let subMercurio = document.querySelector('#btn-resposta-mercurio'); 

//função de calcular pontuação

function pontuacaoMercurio () {
    let points;
    points = 0;

    if (document.getElementById(".mercurio1correta").checked == 'true') {
        points++;
    }
    if (document.getElementById(".mercurio2correta").checked == 'true') {
        points++; 
    }
    if (document.getElementById(".mercurio3correta").checked == 'true') {
        points++;
    }

    subMercurio.addEventListener ('click', function() {
        divMercurio.innerHTML = points; 
    })
};

let divVenus = document.querySelector('#pontuacao-venus');
let subVenus = document.querySelector('#btn-resposta-venus'); 

//função de calcular pontuação

function pontuacaoVenus () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-venus').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-venus').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-venus').checked) {
        points++;
    }

    subVenus.addEventListener ('click', function() {
        divVenus.innerHTML = points; 
    })
}; 


let divTerra = document.querySelector('#pontuacao-terra');
let subTerra = document.querySelector('#btn-resposta-terrra'); 

//função de calcular pontuação
function pontuacaoTerra () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-terra').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-terra').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-terra').checked) {
        points++;
    }

    subTerra.addEventListener ('click', function() {
        divTerra.innerHTML = points; 
    })
}; 

let divMarte = document.querySelector('#pontuacao-marte');
let subMarte = document.querySelector('#btn-resposta-marte'); 

//função de calcular pontuação
function pontuacaoMarte () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-marte').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-marte').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-marte').checked) {
        points++;
    }

    subMarte.addEventListener ('click', function() {
        divMarte.innerHTML = points; 
    })
}; 


let divJupiter = document.querySelector('#pontuacao-jupiter');
let subJupiter = document.querySelector('#btn-resposta-jupiter'); 

//função de calcular pontuação
function pontuacaoJupiter () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-jupiter').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-jupiter').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-jupiter').checked) {
        points++;
    }

    subJupiter.addEventListener ('click', function() {
        divJupiter.innerHTML = points; 
    })
}; 


let divSaturno = document.querySelector('#pontuacao-saturno');
let subSaturno = document.querySelector('#btn-resposta-saturno'); 

//função de calcular pontuação
function pontuacaoSaturno () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-saturno').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-saturno').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-saturno').checked) {
        points++;
    }

    subSaturno.addEventListener ('click', function() {
        divSaturno.innerHTML = points; 
    })
}; 


let divUrano = document.querySelector('#pontuacao-urano');
let subUrano = document.querySelector('#btn-resposta-urano'); 

//função de calcular pontuação
function pontuacaoUrano () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-urano').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-urano').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-urano').checked) {
        points++;
    }

    subUrano.addEventListener ('click', function() {
        divUrano.innerHTML = points; 
    })
}; 

let divNetuno = document.querySelector('#pontuacao-netuno');
let subNetuno = document.querySelector('#btn-resposta-netuno'); 

//função de calcular pontuação
function pontuacaoNetuno () {
    let points;
    points = 0;

    if (document.getElementById('#correta-1-netuno').checked) {
        points++;
    }
    if (document.getElementById('#correta-2-netuno').checked) {
        points++; 
    }
    if (document.getElementById('#correta-3-netuno').checked) {
        points++;
    }

    subNetuno.addEventListener ('click', function() {
        divNetuno.innerHTML = +points; 
    })
}; 






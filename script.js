// Banco de perguntas por tópico
const questionsBank = {
    ConhecimentosGerais: [
    {
        question: "Qual é o maior país do mundo em extensão territorial?",
        answers: ["China", "Estados Unidos", "Rússia", "Canadá"],
        correct: 2
    },
    {
        question: "Em que ano ocorreu a independência do Brasil?",
        answers: ["1800", "1822", "1889", "1500"],
        correct: 1
    },
    {
        question: "Qual é o rio mais extenso do mundo?",
        answers: ["Rio Nilo", "Rio Amazonas", "Rio Mississippi", "Rio Yangtzé"],
        correct: 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answers: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2
    },
    {
        question: "Qual é a capital da Austrália?",
        answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        answers: ["1965", "1969", "1971", "1975"],
        correct: 1
    },
    {
        question: "Qual é o elemento químico mais abundante no universo?",
        answers: ["Oxigênio", "Carbono", "Hidrogênio", "Nitrogênio"],
        correct: 2
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answers: [
            "José de Alencar",
            "Machado de Assis",
            "Carlos Drummond de Andrade",
            "Monteiro Lobato"
        ],
        correct: 1
    },
    {
        question: "Qual é o maior oceano do mundo?",
        answers: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        correct: 2
    },
    {
        question: "Em que país surgiu a Revolução Industrial?",
        answers: ["França", "Estados Unidos", "Alemanha", "Inglaterra"],
        correct: 3
    },
    {
        question: "Qual é o animal mais rápido do mundo?",
        answers: ["Leopardo", "Falcão-peregrino", "Guepardo", "Águia-real"],
        correct: 1
    },
    {
        question: "Quantos estados tem o Brasil atualmente?",
        answers: ["26", "27", "25", "28"],
        correct: 0
    },
    {
        question: "Qual foi o primeiro presidente do Brasil?",
        answers: [
            "Getúlio Vargas",
            "Deodoro da Fonseca",
            "Dom Pedro II",
            "Juscelino Kubitschek"
        ],
        correct: 1
    },
    {
        question: "O que significa a sigla ONU?",
        answers: [
            "Organização das Nações Unidas",
            "Ordem Nacional Unificada",
            "Organização Nacional Unida",
            "Organização das Nações Universais"
        ],
        correct: 0
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        answers: ["Vênus", "Terra", "Mercúrio", "Marte"],
        correct: 2
    }
],
    UFRRJ: [
    {
        question: "Em que ano foi fundada a UFRRJ?",
        answers: ["1910", "1920", "1934", "1945"],
        correct: 0
    },
    {
        question: "Qual é o nome do campus principal da UFRRJ?",
        answers: [
            "Campus Nova Iguaçu",
            "Campus Seropédica",
            "Campus Três Rios",
            "Campus Campos dos Goytacazes"
        ],
        correct: 1
    },
    {
        question: "Qual era o nome original da UFRRJ quando foi fundada?",
        answers: [
            "Escola Superior de Agricultura",
            "Escola Superior de Agricultura e Medicina Veterinária",
            "Instituto Federal Rural",
            "Universidade Rural do Brasil"
        ],
        correct: 1
    },
    {
        question: "Em que ano a instituição foi elevada ao status de universidade?",
        answers: ["1934", "1943", "1950", "1960"],
        correct: 1
    },
    {
        question: "Qual é o símbolo oficial da UFRRJ?",
        answers: [
            "Coruja",
            "Águia",
            "Brasão com elementos agrícolas",
            "Leão"
        ],
        correct: 2
    },
    {
        question: "Quantos institutos compõem a estrutura acadêmica da UFRRJ atualmente?",
        answers: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        question: "Além de Seropédica, quais outros campi a UFRRJ possui?",
        answers: [
            "Nova Iguaçu e Três Rios",
            "Niterói e Petrópolis",
            "Volta Redonda e Resende",
            "Duque de Caxias e Belford Roxo"
        ],
        correct: 0
    },
    {
        question: "Qual curso é considerado o mais antigo da UFRRJ?",
        answers: [
            "Medicina Veterinária",
            "Agronomia",
            "Engenharia Florestal",
            "Zootecnia"
        ],
        correct: 1
    },
    {
        question: "Qual é a cor oficial da UFRRJ?",
        answers: [
            "Azul e branco",
            "Verde e amarelo",
            "Verde e branco",
            "Azul e verde"
        ],
        correct: 1
    },
    {
        question: "O que significa a sigla UFRRJ?",
        answers: [
            "Universidade Federal Rural do Rio de Janeiro",
            "Universidade Federal Regional do Rio de Janeiro",
            "União Federal Rural do Rio de Janeiro",
            "Universidade Federal da Região do Rio de Janeiro"
        ],
        correct: 0
    },
    {
        question: "Qual a banda de rock brasileiro forma na UFRRJ e que até hoje é uma das maiores do país?",
        answers: [
            "Capital Inicial",
            "Charlie Brown Jr.",
            "Os Paralamas do Sucesso",
            "Titãs"
        ],
        correct: 2
    },
    {
        question: "Qual a edição da Semana Rural 2026",
        answers: [
            "3ª",
            "2ª",
            "4ª",
            "5ª"
        ],
        correct: 2
    }
],
    Inovacao: [
        {
            question: "Quem é considerado o pai da computação moderna?",
            answers: [
                "Bill Gates",
                "Steve Jobs",
                "Alan Turing",
                "Mark Zuckerberg"
            ],
            correct: 2
        },
        {
            question: "O que é inteligência artificial?",
            answers: [
                "Robôs que substituem humanos",
                "Sistemas que simulam a inteligência humana",
                "Computadores muito rápidos",
                "Programas de design gráfico"
            ],
            correct: 1
        },
        {
            question: "Qual tecnologia permite contratos autoexecutáveis?",
            answers: [
                "Cloud Computing",
                "Blockchain",
                "Internet 5G",
                "Realidade Virtual"
            ],
            correct: 1
        },
        {
            question: "O que é Internet das Coisas (IoT)?",
            answers: [
                "Rede social para objetos",
                "Conexão de dispositivos à internet",
                "Um tipo de computador",
                "Um navegador web"
            ],
            correct: 1
        }
    ],
    Sustentabilidade: [
    {
        question: "Qual é o principal gás do efeito estufa?",
        answers: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hidrogênio"],
        correct: 2
    },
    {
        question: "O que significa ESG?",
        answers: [
            "Environmental, Social and Governance",
            "Economic, Social and Global",
            "Energy, Sustainability and Growth",
            "Environmental, Strategic and General"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um exemplo de energia renovável?",
        answers: [
            "Carvão mineral",
            "Energia solar",
            "Petróleo",
            "Gás natural"
        ],
        correct: 1
    },
    {
        question: "O que são os ODS (Objetivos de Desenvolvimento Sustentável)?",
        answers: [
            "Metas exclusivas para países desenvolvidos",
            "17 objetivos globais estabelecidos pela ONU para um mundo mais sustentável",
            "Padrões de qualidade para produtos orgânicos",
            "Regras para o comércio internacional"
        ],
        correct: 1
    },
    {
        question: "Qual é o conceito dos 3 R's da sustentabilidade?",
        answers: [
            "Reciclar, Reutilizar e Reduzir",
            "Reformar, Reconstruir e Reciclar",
            "Reduzir, Reciclar e Reformar",
            "Reutilizar, Reformar e Redistribuir"
        ],
        correct: 0
    },
    {
        question: "O que é pegada de carbono?",
        answers: [
            "Medida de poluição do ar nas cidades",
            "Quantidade total de gases de efeito estufa emitidos por atividades humanas",
            "Marca deixada por pneus no asfalto",
            "Técnica de plantio sustentável"
        ],
        correct: 1
    },
    {
        question: "Qual país é o maior emissor de gases de efeito estufa do mundo?",
        answers: ["Estados Unidos", "Índia", "China", "Brasil"],
        correct: 2
    },
    {
        question: "O que é economia circular?",
        answers: [
            "Modelo econômico baseado em moedas circulares",
            "Sistema que elimina resíduos e mantém recursos em uso contínuo",
            "Comércio entre países vizinhos",
            "Mercado financeiro internacional"
        ],
        correct: 1
    },
    {
        question: "Qual acordo internacional visa combater as mudanças climáticas?",
        answers: [
            "Acordo de Paris",
            "Protocolo de Kyoto",
            "Tratado de Versalhes",
            "Acordo de Bretton Woods"
        ],
        correct: 0
    },
    {
        question: "O que significa a sigla COP quando falamos de clima?",
        answers: [
            "Comitê de Operações Públicas",
            "Conferência das Partes",
            "Conselho de Organizações Públicas",
            "Comissão de Orçamento Público"
        ],
        correct: 1
    },
    {
        question: "Qual é a fonte de energia mais utilizada no Brasil?",
        answers: [
            "Energia solar",
            "Energia eólica",
            "Energia hidrelétrica",
            "Energia nuclear"
        ],
        correct: 2
    },
    {
        question: "O que é desenvolvimento sustentável?",
        answers: [
            "Crescimento econômico a qualquer custo",
            "Desenvolvimento que atende necessidades atuais sem comprometer gerações futuras",
            "Apenas preservação ambiental",
            "Industrialização acelerada"
        ],
        correct: 1
    },
    {
        question: "Qual material leva mais tempo para se decompor na natureza?",
        answers: [
            "Papel",
            "Plástico",
            "Vidro",
            "Madeira"
        ],
        correct: 2
    }
    ],
    Entreterimento: [
    {
        question: "Qual ator interpreta o Homem de Ferro no Universo Cinematográfico da Marvel?",
        answers: [
            "Chris Evans",
            "Robert Downey Jr.",
            "Chris Hemsworth",
            "Mark Ruffalo"
        ],
        correct: 1
    },
    {
        question: "Em que ano foi lançado o primeiro filme dos Vingadores?",
        answers: ["2010", "2011", "2012", "2013"],
        correct: 2
    },
    {
        question: "Qual seleção ganhou a Copa do Mundo de Futebol de 2022?",
        answers: ["França", "Brasil", "Argentina", "Alemanha"],
        correct: 2
    },
    {
        question: "Quem é o super-herói conhecido como o 'Homem de Aço'?",
        answers: ["Batman", "Superman", "Homem de Ferro", "Thor"],
        correct: 1
    },
    {
        question: "Qual é o filme de maior bilheteria da história do cinema?",
        answers: [
            "Vingadores: Ultimato",
            "Avatar",
            "Titanic",
            "Star Wars: O Despertar da Força"
        ],
        correct: 1
    },
    {
        question: "Em qual esporte Michael Jordan se destacou?",
        answers: ["Futebol", "Basquete", "Tênis", "Golfe"],
        correct: 1
    },
    {
        question: "Qual é o nome do vilão principal nos filmes do Batman dirigidos por Christopher Nolan?",
        answers: ["Pinguim", "Charada", "Coringa", "Duas-Caras"],
        correct: 2
    },
    {
        question: "Quantos anéis olímpicos existem na bandeira dos Jogos Olímpicos?",
        answers: ["3", "4", "5", "6"],
        correct: 2
    },
    {
        question: "Qual estúdio é responsável pelos filmes de animação 'Toy Story' e 'Procurando Nemo'?",
        answers: ["DreamWorks", "Pixar", "Disney Animation", "Illumination"],
        correct: 1
    },
    {
        question: "Quem é o diretor do filme 'Pantera Negra'?",
        answers: [
            "Spike Lee",
            "Ryan Coogler",
            "Jordan Peele",
            "Antoine Fuqua"
        ],
        correct: 1
    },
    {
        question: "Qual país sediou os Jogos Olímpicos de 2016?",
        answers: ["China", "Reino Unido", "Brasil", "Japão"],
        correct: 2
    },
    {
        question: "Qual ator interpreta o Wolverine nos filmes dos X-Men?",
        answers: [
            "Hugh Jackman",
            "Ryan Reynolds",
            "Patrick Stewart",
            "Ian McKellen"
        ],
        correct: 0
    },
    {
        question: "O que é o Oscar?",
        answers: [
            "Festival de música",
            "Premiação do cinema",
            "Competição esportiva",
            "Programa de televisão"
        ],
        correct: 1
    },
    {
        question: "Qual é o esporte mais popular do mundo?",
        answers: ["Basquete", "Críquete", "Tênis", "Futebol"],
        correct: 3
    },
    {
        question: "Qual personagem da Marvel é conhecido como o 'Deus da Trapaça'?",
        answers: ["Thor", "Loki", "Odin", "Heimdall"],
        correct: 1
    },
    {
        question: "Qual é o nome do ator que interpreta o Capitão América?",
        answers: [
            "Chris Pratt",
            "Chris Evans",
            "Chris Hemsworth",
            "Chris Pine"
        ],
        correct: 1
    },
    {
        question: "Em que ano a Marvel Studios lançou 'Homem de Ferro', seu primeiro filme?",
        answers: ["2006", "2007", "2008", "2009"],
        correct: 2
    },
    {
        question: "Qual esporte é jogado em Wimbledon?",
        answers: ["Golfe", "Críquete", "Tênis", "Rúgbi"],
        correct: 2
    },
    {
        question: "Quem é o criador do Batman?",
        answers: [
            "Stan Lee",
            "Bob Kane",
            "Jack Kirby",
            "Jerry Siegel"
        ],
        correct: 1
    },
    {
        question: "Qual é a franquia de filmes de maior bilheteria da história?",
        answers: [
            "Star Wars",
            "Harry Potter",
            "Universo Cinematográfico Marvel",
            "Velozes e Furiosos"
        ],
        correct: 2
    },
    {
        question: "Quantos jogadores tem um time de futebol em campo?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        question: "Qual atriz interpreta a Mulher-Maravilha nos filmes da DC?",
        answers: [
            "Scarlett Johansson",
            "Gal Gadot",
            "Brie Larson",
            "Margot Robbie"
        ],
        correct: 1
    },
    {
        question: "Qual é o nome do campeonato mundial de futebol?",
        answers: [
            "Copa do Mundo FIFA",
            "Liga dos Campeões",
            "Copa América",
            "Eurocopa"
        ],
        correct: 0
    },
    {
        question: "Quem dirigiu o filme 'Vingadores: Ultimato'?",
        answers: [
            "Joss Whedon",
            "James Gunn",
            "Anthony e Joe Russo",
            "Jon Favreau"
        ],
        correct: 2
    },
    {
        question: "Qual é o animal símbolo das Olimpíadas?",
        answers: [
            "Águia",
            "Leão",
            "Mascote muda a cada edição",
            "Pomba"
        ],
        correct: 2
    },
    {
        question: "Qual personagem dos quadrinhos é conhecido como o 'Mercenário Tagarela'?",
        answers: ["Wolverine", "Deadpool", "Justiceiro", "Venom"],
        correct: 1
    },
    {
        question: "Qual país é o maior campeão mundial de futebol?",
        answers: ["Alemanha", "Itália", "Brasil", "Argentina"],
        correct: 2
    },
    {
        question: "O que significa a sigla MCU no cinema?",
        answers: [
            "Marvel Comics Universe",
            "Marvel Cinematic Universe",
            "Marvel Creative Universe",
            "Marvel Characters United"
        ],
        correct: 1
    },
    {
        question: "Qual é o nome do planeta natal do Superman?",
        answers: ["Marte", "Krypton", "Vulcano", "Asgard"],
        correct: 1
    },
    {
        question: "Em que ano foi realizada a primeira Copa do Mundo de Futebol?",
        answers: ["1920", "1930", "1940", "1950"],
        correct: 1
    },
    {
    question: "Qual é o personagem principal da franquia de jogos 'The Legend of Zelda'?",
    answers: ["Zelda", "Link", "Ganondorf", "Mario"],
    correct: 1
    },
    {
    question: "Qual é o nome do pokémon que é o mascote da franquia?",
    answers: ["Charmander", "Pikachu", "Bulbasaur", "Squirtle"],
    correct: 1
    },
    {
    question: "Em Dragon Ball, qual é o nome da técnica de ataque mais famosa de Goku?",
    answers: ["Genki Dama", "Kamehameha", "Final Flash", "Galick Gun"],
    correct: 1
    },
    {
    question: "Qual é o nome do protagonista de Naruto?",
    answers: ["Sasuke Uchiha", "Naruto Uzumaki", "Kakashi Hatake", "Sakura Haruno"],
    correct: 1
    },
    {
    question: "Qual empresa criou o jogo 'Mario Bros' e 'The Legend of Zelda'?",
    answers: ["Sega", "Sony", "Nintendo", "Microsoft"],
    correct: 2
    },
    {
    question: "Qual é o nome do vilão principal em 'Harry Potter'?",
    answers: [
        "Dumbledore",
        "Sirius Black",
        "Voldemort",
        "Severo Snape"
    ],
    correct: 2
    },
    {
    question: "Qual é o nome do primeiro filme da franquia 'Star Wars' lançado em 1977?",
    answers: [
        "O Império Contra-Ataca",
        "Uma Nova Esperança",
        "O Retorno de Jedi",
        "A Ameaça Fantasma"
    ],
    correct: 1
    },
    {   
    question: "Qual dragão é o parceiro de Soluço na franquia 'Como Treinar o Seu Dragão'?",
    answers: ["Tempestade", "Banguela", "Ciclone", "Fúria"],
    correct: 1
    },
    {   
    question: "Em 'Pokémon', qual é o nome do professor que entrega os pokémons iniciais na região de Kanto?",
    answers: [
        "Professor Elm",
        "Professor Birch",
        "Professor Oak",
        "Professor Rowan"
    ],
    correct: 2
    },
    {
    question: "Qual é o jogo mais vendido de todos os tempos?",
    answers: ["Tetris", "Minecraft", "GTA V", "PUBG"],
    correct: 1
    },
    {
    question: "Qual personagem da Disney perdeu um sapato de cristal em um baile?",
    answers: ["Bela", "Ariel", "Cinderela", "Branca de Neve"],
    correct: 2
    },
    {
    question: "Quantos Dragon Balls são necessários para invocar o dragão Shenlong?",
    answers: ["5", "6", "7", "8"],
    correct: 2
    },
    {   
    question: "Qual é o nome do reino mágico em 'Frozen'?",
    answers: ["Corona", "Arendelle", "Atlântida", "Valhalla"],
    correct: 1
    },
    {
    question: "Em qual console foi lançado o primeiro jogo do Sonic?",
    answers: [
        "Super Nintendo",
        "PlayStation 1",
        "Mega Drive/Genesis",
        "Nintendo 64"
    ],
    correct: 2
    },
    {
    question: "Qual é o nome do personagem principal do anime 'One Piece'?",
    answers: [
        "Roronoa Zoro",
        "Monkey D. Luffy",
        "Sanji",
        "Trafalgar Law"
    ],
    correct: 1
    }
    ]
};

// Estado do jogo
const gameState = {
    currentScreen: 'welcome',
    selectedTopic: null,
    currentQuestionIndex: 0,
    score: 0,
    timer: 30,
    timerInterval: null,
    totalQuestions: 5,
    questions: []
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('Signal Quiz - Jogo iniciado!');
    showScreen('welcome');
    drawRoulette(); // Pré-desenha a roleta
});

// Gerenciar telas
function showScreen(screenName) {
    console.log('Mostrando tela:', screenName);
    
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar a tela selecionada
    const screenElement = document.getElementById(screenName + '-screen');
    if (screenElement) {
        screenElement.classList.add('active');
        gameState.currentScreen = screenName;
    } else {
        console.error('Tela não encontrada:', screenName);
    }
}

// Iniciar jogo
function startGame() {
    console.log('Iniciando jogo...');
    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    document.getElementById('score').textContent = '0';
    showScreen('roulette');
}

// Desenhar roleta
function drawRoulette() {
    const canvas = document.getElementById('rouletteCanvas');
    if (!canvas) {
        console.error('Canvas não encontrado!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    
    const topics = Object.keys(questionsBank);
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar cada fatia
    topics.forEach((topic, index) => {
        const startAngle = (index * 2 * Math.PI) / topics.length - Math.PI / 2;
        const endAngle = ((index + 1) * 2 * Math.PI) / topics.length - Math.PI / 2;
        
        // Desenhar fatia
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        // Preencher com cor
        ctx.fillStyle = colors[index];
        ctx.fill();
        
        // Borda branca
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Adicionar texto
        ctx.save();
        ctx.translate(centerX, centerY);
        const textAngle = startAngle + (endAngle - startAngle) / 2;
        ctx.rotate(textAngle);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Poppins, sans-serif';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 5;
        
        // Formatar nome do tópico
        const topicName = formatTopicName(topic);
        ctx.fillText(topicName, radius - 25, 6);
        ctx.restore();
    });
    
    // Desenhar círculo central
    ctx.beginPath();
    ctx.arc(centerX, centerY, 35, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = '#6C63FF';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    console.log('Roleta desenhada com sucesso!');
}

function formatTopicName(topic) {
    // Adiciona um espaço antes de cada letra maiúscula (exceto a primeira)
    let formatted = topic.replace(/([A-Z])/g, ' $1').trim();
    
    // Capitaliza a primeira letra de cada palavra
    formatted = formatted.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    return formatted;
}

// Girar roleta
function spinRoulette() {
    const button = document.getElementById('spinButton');
    if (!button) return;
    
    button.disabled = true;
    
    const canvas = document.getElementById('rouletteCanvas');
    if (!canvas) return;
    
    const topics = Object.keys(questionsBank);
    const spinDuration = 3000; // 3 segundos
    const totalRotation = Math.random() * 360 + 1080; // Pelo menos 3 voltas
    const startTime = Date.now();
    const numTopics = topics.length;
    const sliceAngle = 360 / numTopics;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);
        
        // Easing para desaceleração suave
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const rotation = totalRotation * easeOut;
        
        canvas.style.transform = 'rotate(' + rotation + 'deg)';
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Determinar tópico selecionado
            const finalAngle = totalRotation % 360;
            const invertedAngle = (360 - finalAngle) % 360;
            const selectedIndex = Math.floor(invertedAngle / sliceAngle) % numTopics;
            const selectedTopic = topics[selectedIndex];
            
            gameState.selectedTopic = selectedTopic;
            
            // Atualizar nome do tópico COM FORMATAÇÃO
            const topicNameElement = document.getElementById('topicName');
            if (topicNameElement) {
                topicNameElement.textContent = formatTopicName(selectedTopic);
            }

            const selectedTopicDiv = document.getElementById('selectedTopicDiv');
            if (selectedTopicDiv) {
                selectedTopicDiv.style.animation = 'none';
                selectedTopicDiv.offsetHeight; // Trigger reflow
                selectedTopicDiv.style.animation = 'glowIn 0.5s ease-out';
            }
            
            // Preparar perguntas
            prepareQuestions(selectedTopic);
            
            // Aguardar um pouco antes de mostrar as perguntas
            setTimeout(() => {
                showScreen('question');
                startQuestion(0);
                button.disabled = false;
                canvas.style.transform = 'rotate(0deg)';
            }, 2000);
        }
    }
    
    requestAnimationFrame(animate);
}

// Preparar perguntas para o tópico selecionado
function prepareQuestions(topic) {
    if (!questionsBank[topic]) {
        console.error('Tópico não encontrado:', topic);
        return;
    }
    
    // Clonar array de perguntas do tópico
    const allQuestions = [...questionsBank[topic]];
    const selected = [];
    
    // Selecionar aleatoriamente perguntas (máximo 5)
    const count = Math.min(5, allQuestions.length);
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        selected.push(allQuestions.splice(randomIndex, 1)[0]);
    }
    
    gameState.questions = selected;
    gameState.totalQuestions = selected.length;
    
    console.log('Perguntas preparadas:', selected.length);
}

// Iniciar uma pergunta específica
function startQuestion(index) {
    // Verificar se chegou ao fim
    if (index >= gameState.questions.length) {
        endGame();
        return;
    }
    
    gameState.currentQuestionIndex = index;
    const question = gameState.questions[index];
    
    // Atualizar elementos da tela
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('timer').textContent = '30';
    
    // Atualizar barra de progresso
    const progress = (index / gameState.totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Atualizar indicador de tópico
    const topicIndicator = document.getElementById('topicIndicator');
    if (topicIndicator) {
        topicIndicator.textContent = gameState.selectedTopic.toUpperCase();
    }
    
    // Criar botões de resposta
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = function() {
            checkAnswer(i, question.correct);
        };
        answersContainer.appendChild(button);
    });
    
    // Esconder feedback
    document.getElementById('feedbackContainer').style.display = 'none';
    
    // Iniciar timer
    startTimer();
}

// Verificar resposta selecionada
function checkAnswer(selectedIndex, correctIndex) {
    // Parar timer
    clearInterval(gameState.timerInterval);
    
    // Desabilitar todos os botões
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(button => button.disabled = true);
    
    // Marcar resposta correta
    buttons[correctIndex].classList.add('correct');
    
    if (selectedIndex === correctIndex) {
        // Resposta correta
        gameState.score += 100;
        document.getElementById('score').textContent = gameState.score;
        showFeedback(true);
    } else {
        // Resposta errada
        buttons[selectedIndex].classList.add('wrong');
        showFeedback(false);
    }
    
    // Avançar para próxima pergunta após delay
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        startQuestion(gameState.currentQuestionIndex);
    }, 2000);
}

// Timer da pergunta
function startTimer() {
    let timeLeft = 30;
    const timerDisplay = document.getElementById('timer');
    
    // Limpar timer anterior
    clearInterval(gameState.timerInterval);
    
    gameState.timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        // Mudar cor quando estiver acabando
        if (timeLeft <= 10) {
            timerDisplay.style.color = '#f44336';
        }
        
        if (timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            timerDisplay.style.color = '#2C3E50';
            
            // Tempo esgotado
            const buttons = document.querySelectorAll('.answer-button');
            buttons.forEach(button => button.disabled = true);
            
            const question = gameState.questions[gameState.currentQuestionIndex];
            buttons[question.correct].classList.add('correct');
            
            showFeedback(false);
            
            setTimeout(() => {
                gameState.currentQuestionIndex++;
                startQuestion(gameState.currentQuestionIndex);
            }, 2000);
        }
    }, 1000);
}

// Mostrar feedback
function showFeedback(isCorrect) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    feedbackContainer.style.display = 'block';
    
    if (isCorrect) {
        feedbackMessage.innerHTML = '✅ Correto! +100 pontos';
        feedbackMessage.style.color = '#4CAF50';
        feedbackMessage.style.backgroundColor = '#E8F5E9';
        feedbackMessage.style.padding = '15px';
        feedbackMessage.style.borderRadius = '10px';
    } else {
        feedbackMessage.innerHTML = '❌ Errado! Tente novamente na próxima';
        feedbackMessage.style.color = '#f44336';
        feedbackMessage.style.backgroundColor = '#FFEBEE';
        feedbackMessage.style.padding = '15px';
        feedbackMessage.style.borderRadius = '10px';
    }
}

// Finalizar jogo
function endGame() {
    clearInterval(gameState.timerInterval);
    showScreen('result');
    
    const finalScore = gameState.score;
    const maxScore = gameState.totalQuestions * 100;
    const percentage = maxScore > 0 ? (finalScore / maxScore) * 100 : 0;
    
    // Atualizar pontuação final
    document.getElementById('finalScore').textContent = finalScore;
    
    // Determinar mensagem e estrelas
    let message = '';
    let stars = '';
    
    if (percentage >= 80) {
        message = 'Excelente! Você é um expert! 🏆';
        stars = '⭐⭐⭐⭐⭐';
    } else if (percentage >= 60) {
        message = 'Muito bom! Continue assim! 👏';
        stars = '⭐⭐⭐⭐';
    } else if (percentage >= 40) {
        message = 'Bom trabalho! Dá pra melhorar! 💪';
        stars = '⭐⭐⭐';
    } else if (percentage >= 20) {
        message = 'Continue tentando! 📚';
        stars = '⭐⭐';
    } else {
        message = 'Não desista! Tente novamente! 🎯';
        stars = '⭐';
    }
    
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultStars').textContent = stars;
}

// Compartilhar resultado
function shareResult() {
    const finalScore = gameState.score;
    const text = 'Acabei de fazer ' + finalScore + ' pontos no Signal Quiz! 🏆 Teste seus conhecimentos também!';
    
    // Verificar se a API de compartilhamento está disponível
    if (navigator.share) {
        navigator.share({
            title: 'Signal Quiz',
            text: text,
            url: window.location.href
        }).catch(err => {
            console.log('Erro ao compartilhar:', err);
        });
    } else {
        // Fallback: copiar para área de transferência
        navigator.clipboard.writeText(text).then(() => {
            alert('Resultado copiado para a área de transferência! Cole onde quiser compartilhar.');
        }).catch(() => {
            alert('Seu resultado: ' + finalScore + ' pontos! Compartilhe com seus amigos!');
        });
    }
}

// Reiniciar jogo
function restartGame() {
    // Resetar estado do jogo
    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    gameState.questions = [];
    gameState.selectedTopic = null;
    
    // Resetar elementos da interface
    document.getElementById('score').textContent = '0';
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('topicName').textContent = '---';
    
    // Voltar para roleta
    showScreen('roulette');
}

// Log para confirmar carregamento
console.log('script.js carregado com sucesso!');
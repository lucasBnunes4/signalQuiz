// Banco de perguntas por tópico
const questionsBank = {
    tecnologia: [
        {
            question: "Qual linguagem de programação é conhecida como 'a linguagem da web'?",
            answers: ["Java", "JavaScript", "Python", "C++"],
            correct: 1
        },
        {
            question: "O que significa HTML?",
            answers: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correct: 0
        },
        {
            question: "Qual empresa desenvolveu o sistema operacional Windows?",
            answers: ["Apple", "Google", "Microsoft", "IBM"],
            correct: 2
        },
        {
            question: "O que é um algoritmo?",
            answers: [
                "Um tipo de computador",
                "Uma sequência de passos para resolver um problema",
                "Uma linguagem de programação",
                "Um dispositivo de hardware"
            ],
            correct: 1
        },
        {
            question: "O que é CSS?",
            answers: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            correct: 1
        }
    ],
    negocios: [
        {
            question: "O que é um MVP em startups?",
            answers: [
                "Most Valuable Player",
                "Minimum Viable Product",
                "Maximum Value Proposition",
                "Market Value Price"
            ],
            correct: 1
        },
        {
            question: "Qual é o principal objetivo de uma empresa júnior?",
            answers: [
                "Apenas gerar lucro",
                "Desenvolver profissionais e oferecer serviços de qualidade",
                "Competir com grandes empresas",
                "Vender produtos importados"
            ],
            correct: 1
        },
        {
            question: "O que é ROI?",
            answers: [
                "Return On Investment",
                "Rate Of Interest",
                "Revenue Over Income",
                "Risk Of Investment"
            ],
            correct: 0
        },
        {
            question: "O que significa a sigla MEJ?",
            answers: [
                "Movimento Empresa Júnior",
                "Mercado Empresarial Jovem",
                "Modelo Empresarial Jurídico",
                "Metodologia Empresarial Júnior"
            ],
            correct: 0
        }
    ],
    inovacao: [
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
    sustentabilidade: [
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
        }
    ],
    empreendedorismo: [
        {
            question: "O que é um pitch?",
            answers: [
                "Um tipo de investimento",
                "Uma apresentação rápida de uma ideia de negócio",
                "Uma ferramenta de design",
                "Um modelo de negócios"
            ],
            correct: 1
        },
        {
            question: "Qual destes é um exemplo de economia compartilhada?",
            answers: [
                "Supermercado tradicional",
                "Uber/Airbnb",
                "Fábrica de automóveis",
                "Banco tradicional"
            ],
            correct: 1
        },
        {
            question: "O que é um CNPJ?",
            answers: [
                "Cadastro Nacional de Pessoas Jurídicas",
                "Certificado Nacional de Produção Jurídica",
                "Cadastro Nacional de Produção Júnior",
                "Certificado Nacional de Pessoas Jurídicas"
            ],
            correct: 0
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
        ctx.font = 'bold 16px Poppins, sans-serif';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 5;
        
        // Formatar nome do tópico
        const topicName = topic.charAt(0).toUpperCase() + topic.slice(1);
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

// Girar roleta
function spinRoulette() {
    const button = document.getElementById('spinButton');
    if (!button) return;
    
    button.disabled = true;
    
    const canvas = document.getElementById('rouletteCanvas');
    if (!canvas) return;
    
    const topics = Object.keys(questionsBank);
    const spinDuration = 3000; // 3 segundos
    const totalRotation = Math.random() * 360 + 720; // Pelo menos 2 voltas
    const startTime = Date.now();
    
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
            const normalizedRotation = rotation % 360;
            const sliceAngle = 360 / topics.length;
            const selectedIndex = Math.floor(normalizedRotation / sliceAngle);
            const actualIndex = (topics.length - selectedIndex) % topics.length;
            const selectedTopic = topics[actualIndex];
            
            gameState.selectedTopic = selectedTopic;
            
            // Atualizar nome do tópico
            const topicNameElement = document.getElementById('topicName');
            if (topicNameElement) {
                topicNameElement.textContent = 
                    selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1);
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
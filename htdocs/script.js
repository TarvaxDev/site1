// Simulando dados de vídeos de CS:GO
const videosCSGO = [
    { title: '123', description: '123', filename: 'video1.mp4' },
    { title: '123', description: '123', filename: 'csgo_video2.mp4' }
    // Adicione mais vídeos de CS:GO conforme necessário
];

// Simulando dados de vídeos de League of Legends (LoL)
const videosLOL = [
    { title: '123', description: '123.', filename: 'video1.mp4' },
    { title: '123', description: '123', filename: 'lol_video2.mp4' }
    // Adicione mais vídeos de LoL conforme necessário
];

// Função para adicionar vídeos ao DOM
function renderVideos(category = 'todos') {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = '';

    let selectedVideos;
    if (category === 'csgo') {
        selectedVideos = videosCSGO;
    } else if (category === 'lol') {
        selectedVideos = videosLOL;
    } else {
        selectedVideos = [...videosCSGO, ...videosLOL]; // Combine todos os vídeos
    }

    selectedVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <h2>${video.title}</h2>
            <p>${video.description}</p>
            <video width="560" height="315" controls>
                <source src="videos/${video.filename}" type="video/mp4">
                Seu navegador não suporta o elemento <code>video</code>.
            </video>
        `;
        videosContainer.appendChild(videoElement);
    });
}

// Função para filtrar vídeos por categoria
function filterVideos(category) {
    renderVideos(category);
}

function filterVideos(category) {
    if (category === 'about') {
        window.location.href = 'como_funciona.html'; // Redirecionar para a página que explica como funciona
    } else {
        renderVideos(category);
    }
}

// // Chamando a função para renderizar vídeos quando a página carregar
// window.onload = renderVideos;

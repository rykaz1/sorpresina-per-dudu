function nextScreen(id){
    document
        .querySelectorAll('.screen')
        .forEach(screen =>{
            screen.classList.remove('active');
        });
    
    setTimeout(()=>{
        document
            .getElementById(id)
            .classList.add('active');
    },100);
}

function openLetter(){
    nextScreen('letter');
}

function flipCard(card){
    card.classList.toggle('flipped');
}

function finale(){
    const secret=
        document.getElementById('secret');
    secret.classList.add('show');

    createExplosion();
}

function createParticles(){
    const container=
        document.getElementById('particles');
    for(let i=0;i<25;i++){
        const particle=
            document.createElement('div');
        particle.classList.add('particle');
        particle.innerHTML=
            Math.random() > 0.5
            ? '♡'
            : '✦';
        particle.style.left=
            Math.random()*100+'%';
        particle.style.animationDuration=
            (5+Math.random()*8)+'s';
        particle.style.animationDelay=
            Math.random()*8+'s';
        particle.style.fontSize=
            (8+Math.random()*12)+'px';
        container.appendChild(particle); 
    }
}

createParticles();

function createExplosion(){
    for(let i=0;i<60;i++){
        const heart=
            document.createElement('div');
        heart.innerHTML=
            Math.random() > 0.3
            ? '♥'
            : '♡';
        heart.style.position=
            'fixed';
        heart.style.left=
            '50%';
        heart.style.top=
            '50%';
        heart.style.color=
            '#d89aaa';
        heart.style.fontSize=
            (10+Math.random()*25)+'px';
        heart.style.pointerEvents=
            'none';
        heart.style.zIndex=
            '200';
        const angle=
            Math.random()*Math.PI*2;
        const distance=
            150+Math.random()*500;
        const x=
            Math.cos(angle)*distance;
        const y=
            Math.sin(angle)*distance;
        heart.animate(
            [
                {
                    transform:
                        'translate(-50%,-50%) scale(0)',
                        opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50%+${x}px),
                            calc(-50%+${y}px)
                        ) scale(1)`,
                    opacity: 0
                            
                }
            ],
            {
                duration:
                    1200+Math.random()*1000,
                easing:
                    'cubic-bezier(.17,.67,.35,1)',
                fill:
                    'forwards'
            }
        );

        document.body.appendChild(heart);
        setTimeout(()=>{
            heart.remove();
        },2500);
    }
}

function toggleMusic(){
    const song=document.getElementById("our-song");
    const player=document.querySelector(".music-player");
    const button=document.querySelector(".music-button");
    if(song.paused){
        song.play();
        button.classList.add("is-playing");
        button.setAttribute("aria-label", "Metti in pausa");
        player.classList.add("playing");
    }else{
        song.pause();
        button.classList.remove("is-playing");
        button.setAttribute("aria-label", "Riproduci");
        player.classList.remove("playing");
    }
}
        

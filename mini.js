let man = document.querySelector('.man'),
    ground = document.querySelector('.ground'),
    cloud1 = document.querySelector('.cloud1'),
    cloud2 = document.querySelector('.cloud2');

    document.addEventListener('keydown', move);
    document.addEventListener('keyup', stop);


function move(e){
    if(e.key == 'ArrowRight'){
        man.classList.add('run');
        ground.classList.add('run');
        cloud1.classList.add('run');
        cloud2.classList.add('run');
    }
}
function stop(){
    man.classList.remove('run');
    ground.classList.remove('run');
    cloud1.classList.remove('run');
    cloud2.classList.remove('run');
}

class TVControl {
    addLink: string;

    constructor() {
        this.addLink = '';
    }

    createAdd(addLink: string) {
        this.addLink = addLink;
        document.getElementById('my-video').setAttribute('src', `${this.addLink}`);
        let video = < HTMLMediaElement > document.getElementById('my-video');
        document.getElementById('my-video').style.display = 'inline';
        document.getElementById('remote').style.display = 'flex';
        this.playAdd(video);
    }

    playAdd(video) {
        video.play();
    }

    pauseAdd(video) {
        video.pause();
    }

    increaseVolume(video) {
        try {
            video.volume = video.volume + 0.1;
            document.getElementById('volume').innerHTML = `Current Volume: ${video.volume.toFixed(2)*100}%`
        } catch (error) {
            video.volume = 1;
            document.getElementById('volume').innerHTML = `Current Volume: ${video.volume.toFixed(2)*100}%`
        }

    }

    decreaseVolume(video) {
        try {
            video.volume = video.volume - 0.1;
            document.getElementById('volume').innerHTML = `Current Volume: ${video.volume.toFixed(2)*100}%`
        } catch (error) {
            video.volume = 0;
            document.getElementById('volume').innerHTML = `Current Volume: ${video.volume.toFixed(2)*100}%`
        }

    }
}

function showAdd(company: string) {

    let tvCtrl = new TVControl();
    switch (company) {
        case 'samsung':
            tvCtrl.createAdd('videos/samsung.mp4');
            break;
        case 'mi':
            tvCtrl.createAdd('videos/mi.mp4');
            break;
        case 'sony':
            tvCtrl.createAdd('videos/sony.mp4');
            break;
        case 'toshiba':
            tvCtrl.createAdd('videos/toshiba.mp4');
            break;
    }
}

document.getElementById('play').addEventListener('click', () => {
    let tvCtrl = new TVControl();
    tvCtrl.playAdd(document.getElementById('my-video'));
});

document.getElementById('pause').addEventListener('click', () => {
    let tvCtrl = new TVControl();
    tvCtrl.pauseAdd(document.getElementById('my-video'));
});

document.getElementById('volUp').addEventListener('click', () => {
    let tvCtrl = new TVControl();
    tvCtrl.increaseVolume(( < HTMLMediaElement > document.getElementById('my-video')));
});

document.getElementById('volDown').addEventListener('click', () => {
    let tvCtrl = new TVControl();
    tvCtrl.decreaseVolume(( < HTMLMediaElement > document.getElementById('my-video')));
});
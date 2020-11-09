var TVControl = /** @class */ (function () {
    function TVControl() {
        this.addLink = '';
    }
    TVControl.prototype.createAdd = function (addLink) {
        this.addLink = addLink;
        document.getElementById('my-video').setAttribute('src', "" + this.addLink);
        var video = document.getElementById('my-video');
        document.getElementById('my-video').style.display = 'inline';
        document.getElementById('remote').style.display = 'flex';
        this.playAdd(video);
    };
    TVControl.prototype.playAdd = function (video) {
        video.play();
    };
    TVControl.prototype.pauseAdd = function (video) {
        video.pause();
    };
    TVControl.prototype.increaseVolume = function (video) {
        try {
            video.volume = video.volume + 0.1;
            document.getElementById('volume').innerHTML = "Current Volume: " + video.volume.toFixed(2) * 100 + "%";
        }
        catch (error) {
            video.volume = 1;
            document.getElementById('volume').innerHTML = "Current Volume: " + video.volume.toFixed(2) * 100 + "%";
        }
    };
    TVControl.prototype.decreaseVolume = function (video) {
        try {
            video.volume = video.volume - 0.1;
            document.getElementById('volume').innerHTML = "Current Volume: " + video.volume.toFixed(2) * 100 + "%";
        }
        catch (error) {
            video.volume = 0;
            document.getElementById('volume').innerHTML = "Current Volume: " + video.volume.toFixed(2) * 100 + "%";
        }
    };
    return TVControl;
}());
function showAdd(company) {
    var tvCtrl = new TVControl();
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
document.getElementById('play').addEventListener('click', function () {
    var tvCtrl = new TVControl();
    tvCtrl.playAdd(document.getElementById('my-video'));
});
document.getElementById('pause').addEventListener('click', function () {
    var tvCtrl = new TVControl();
    tvCtrl.pauseAdd(document.getElementById('my-video'));
});
document.getElementById('volUp').addEventListener('click', function () {
    var tvCtrl = new TVControl();
    tvCtrl.increaseVolume(document.getElementById('my-video'));
});
document.getElementById('volDown').addEventListener('click', function () {
    var tvCtrl = new TVControl();
    tvCtrl.decreaseVolume(document.getElementById('my-video'));
});

'use strict';

var LandingPage = function () {
    var hero = document.getElementById('hero');

    // nav
    var mainNav = document.getElementById('main-nav');
    var menuContainer = document.getElementById('menu-container');
    var openMenuBtn = document.getElementById('open-menu-button');
    var closeMenuBtn = document.getElementById('close-menu-button');
    var mobileMenuMask = document.getElementById('mobile-menu-mask');

    // mobile menu
    openMenuBtn.addEventListener('click', function () {
        menuContainer.classList.add('open');
    });
    closeMenuBtn.addEventListener('click', function () {
        menuContainer.classList.remove('open');
    });
    mobileMenuMask.addEventListener('click', function () {
        menuContainer.classList.remove('open');
    });

    // sticky nav 
    window.addEventListener('touchmove', stickyNav);
    window.addEventListener('scroll', stickyNav);

    function stickyNav() {
        if (hero.getBoundingClientRect().top <= -1) {
            mainNav.classList.add('sticky-nav');
        } else {
            mainNav.classList.remove('sticky-nav');
        }
    }

    // demo video
    var demoVideoModal = document.getElementById('demo-video-modal');
    var youtubeAPI = document.createElement('script');
    youtubeAPI.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(youtubeAPI, firstScriptTag);

    var demoVideoPlayer = void 0;
    window.onYouTubeIframeAPIReady = function () {
        demoVideoPlayer = new YT.Player('demo-video', {
            width: '1280',
            height: '720',
            videoId: 'qc_T5NhzoSQ'
        });
    };
    demoVideoModal.addEventListener('modal-open', function () {
        return demoVideoPlayer.playVideo();
    });
    demoVideoModal.addEventListener('modal-close', function () {
        return demoVideoPlayer.stopVideo();
    });

    // team portraits
    var portraits = document.querySelectorAll('#team .portrait');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = portraits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var portrait = _step.value;

            portrait.style.backgroundImage = 'url(images/' + portrait.dataset.bg + ')';
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}();
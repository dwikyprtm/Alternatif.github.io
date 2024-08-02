const overlayClose = document.querySelectorAll('.overlay');

for(let i = 0; i < overlayClose.length; i++){
    overlayClose[i].addEventListener('click', function(){
        let url = window.location.href.substr(0, window.location.href.indexOf('#'))
        window.location = url;
    });
}
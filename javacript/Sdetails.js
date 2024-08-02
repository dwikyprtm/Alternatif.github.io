let mainImg = document.querySelector('#mainImg');
let smallImg = document.querySelectorAll('.smal-img');

   smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
   }
   smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
   }
   smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
   }
   smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
   }


// img zoom
// Ambil elemen kontainer dan gambar utama
let imgContElm = document.querySelector('#imgZom');
let imgElm = document.querySelector('#imgZom img');

// Level zoom
let ZOOM = 400; // Persentase zoom, misalnya 700%

// Event mouse enter
imgContElm.addEventListener('mouseenter', function() {
    imgElm.style.width = ZOOM + '%'; // Perbesar gambar
    imgElm.style.height = 'auto'; // Pastikan tinggi otomatis mengikuti lebar
    imgElm.style.position = 'relative'; // Set posisi relatif untuk memungkinkan pergerakan
    imgElm.style.top = '0'; // Reset posisi vertikal jika perlu
    imgElm.style.left = '0'; // Reset posisi horizontal jika perlu
});

// Event mouse leave
imgContElm.addEventListener('mouseleave', function() {
    imgElm.style.width = '100%'; // Kembalikan gambar ke ukuran asli
    imgElm.style.height = 'auto'; // Kembalikan tinggi ke otomatis
    imgElm.style.top = '0'; // Reset posisi vertikal
    imgElm.style.left = '0'; // Reset posisi horizontal
});

// Event mouse move
imgContElm.addEventListener('mousemove', function(e) {
    // Dapatkan posisi kontainer relatif terhadap halaman
    let rect = imgContElm.getBoundingClientRect();
    let xPos = e.clientX - rect.left; // X koordinat mouse relatif terhadap kontainer
    let yPos = e.clientY - rect.top;  // Y koordinat mouse relatif terhadap kontainer

    // Dapatkan ukuran gambar setelah zoom
    let imgWidth = imgElm.clientWidth;
    let imgHeight = imgElm.clientHeight;

    // Hitung posisi top dan left gambar yang baru berdasarkan posisi mouse
    imgElm.style.top = -(((imgHeight - imgContElm.clientHeight) * yPos) / imgContElm.clientHeight) + 'px';
    imgElm.style.left = -(((imgWidth - imgContElm.clientWidth) * xPos) / imgContElm.clientWidth) + 'px';
});

// Change height container
function changeHeight() {
    imgContElm.style.height = imgContElm.clientWidth + 'px'; // Set tinggi kontainer sama dengan lebar untuk menjaga rasio aspek
}
changeHeight();

// Change height on resize
window.addEventListener('resize', changeHeight);


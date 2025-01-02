let slideIndex = 0;

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide() {
    let slides = document.getElementsByClassName("mySlides");

    // Menyembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Menampilkan slide berikutnya
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Jika sudah mencapai slide terakhir, kembali ke slide pertama
    }

    slides[slideIndex - 1].style.display = "block"; // Menampilkan slide sesuai dengan index
}

// Menampilkan slide show setelah tombol "Next" pertama diklik
document.getElementById('nextButton1').onclick = function() {
    document.getElementById('firstScreen').style.display = 'none'; // Menyembunyikan tampilan pertama
    document.getElementById('slideShow').style.display = 'block'; // Menampilkan slide show
    showNextSlide();  // Mulai slide pertama
};

// Tombol Next untuk slide kedua
document.getElementById('nextButton2').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide ketiga
document.getElementById('nextButton3').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide keempat
document.getElementById('nextButton4').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide kelima
document.getElementById('nextButton5').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide kelima
document.getElementById('nextButton6').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide kelima
document.getElementById('nextButton7').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide kelima
document.getElementById('nextButton8').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide kelima
document.getElementById('nextButton9').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol Next untuk slide kelima
document.getElementById('nextButton10').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};
// Tombol Next untuk slide kelima
document.getElementById('nextButton11').onclick = function() {
    showNextSlide();  // Menampilkan slide berikutnya
};

// Tombol selesai yang akan muncul setelah slide terakhir
document.getElementById('finishButton').onclick = function() {
    alert("Terima kasih sudah melihat ucapan ulang tahunku! 💖"); // Menampilkan pesan terima kasih
    location.reload(); // Mengulang halaman setelah selesai
};

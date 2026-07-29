/* ==========================================
   MATHLAB EXPLORER
   SCRIPT.JS
========================================== */

// ============================
// ELEMENT
// ============================

const loading = document.getElementById("loading-screen");

const landing = document.getElementById("landing-page");

const dashboard = document.getElementById("dashboard");

const startBtn = document.getElementById("startBtn");

const popup = document.getElementById("popup");

const popupContent = document.getElementById("popup-content");

const closePopup = document.getElementById("closePopup");

// ============================
// LOADING SCREEN
// ============================

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.display = "none";

    }, 1800);

});

// ============================
// MULAI EKSPLORASI
// ============================

startBtn.addEventListener("click", () => {

    landing.classList.remove("active");

    dashboard.classList.add("active");

});

// ============================
// TEMPLATE
// ============================

const templates = {

    masjid: document.getElementById("template-masjid"),

    perpus: document.getElementById("template-perpus"),

    basket: document.getElementById("template-basket"),

    upacara: document.getElementById("template-upacara")

};

// ============================
// MARKER
// ============================

const markers = document.querySelectorAll(".marker");

markers.forEach(marker => {

    marker.addEventListener("click", () => {

        const lokasi = marker.dataset.location;

        popupContent.innerHTML = "";

        popupContent.appendChild(

            templates[lokasi].content.cloneNode(true)

        );

        popup.classList.add("active");

        aktifkanMissionButton();

    });

});

// ============================
// CLOSE POPUP
// ============================

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});

popup.addEventListener("click", (e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});

// ============================
// MISSION BUTTON
// ============================

function aktifkanMissionButton(){

    const tombol = document.querySelector(".mission-btn");

    tombol.addEventListener("click", () => {

        popupContent.innerHTML = `

        <h2>🚀 Selamat Memulai Misi</h2>

        <span class="badge">

        Petunjuk Eksplorasi

        </span>

        <p>

        Pergilah menuju lokasi yang dipilih bersama kelompokmu.

        </p>

        <br>

        <p>

        Website ini <b>tidak memberikan data pengukuran.</b>

        Semua informasi yang diperlukan harus diperoleh melalui kegiatan mengamati, mengukur, berdiskusi, dan mencatat hasil observasi.

        </p>

        <br>

        <h3>Yang perlu kalian lakukan</h3>

        <ul>

        <li>📍 Temukan lokasi.</li>

        <li>👀 Lakukan observasi.</li>

        <li>📏 Lakukan pengukuran.</li>

        <li>📝 Catat hasilnya.</li>

        <li>🤝 Diskusikan bersama kelompok.</li>

        <li>🧮 Gunakan hasil tersebut untuk menyelesaikan tantangan dari guru.</li>

        </ul>

        <button class="mission-btn" id="selesaiBtn">

        SIAP!

        </button>

        `;

        document

        .getElementById("selesaiBtn")

        .addEventListener("click",()=>{

            popup.classList.remove("active");

        });

    });

}

// ============================
// STATUS PROGRESS
// ============================

const progress = {

    masjid:false,

    perpus:false,

    basket:false,

    upacara:false

};

// ============================
// UPDATE PROGRESS
// ============================

function updateProgress(){

    console.log(progress);

}

// ============================
// VERSI 1.0
// ============================

console.log("MathLab Explorer Ready 🚀");
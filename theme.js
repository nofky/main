// 1. MEMUAT STYLE (CSS) BAWAAN ASLI PORTAL
const style = document.createElement('style');
style.textContent = `
*{margin:0; padding:0; box-sizing:border-box;}
body{font-family:Arial,sans-serif; background:#0b1220; color:#fff; line-height:1.5;}
header{background:#111a2e; padding:45px 20px; text-align:center;}
header h1{font-size:32px; margin-bottom:10px;}
header p{max-width:650px; margin:auto; color:#cbd5e1; font-size:14px;}
.container{max-width:1200px; margin:auto; padding:35px 16px;}
.group{margin-bottom:35px;}
.group-title{font-size:22px; margin-bottom:16px; border-left:4px solid #22c55e; padding-left:12px;}
.grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;}
.card{background:#111a2e; padding:16px; border-radius:14px; box-shadow:0 6px 16px rgba(0,0,0,0.25); transition:0.2s; text-align:center;}
.card:hover{transform:translateY(-3px);}
.card h3{margin-bottom:10px; font-size:17px;}
.btn{display:inline-block; padding:9px 14px; background:#22c55e; color:#fff; text-decoration:none; border-radius:8px; font-size:13px; font-weight:bold; transition:0.2s;}
.btn:hover{opacity:0.9;}
.info-box{background:#111a2e; padding:22px; border-radius:14px; margin-top:40px;}
.info-box h2{margin-bottom:10px; font-size:20px;}
.info-box p{color:#cbd5e1; font-size:13px; margin-bottom:12px;}
.menu{margin-top:20px; text-align:center;}
.menu a{display:inline-block; color:#94a3b8; text-decoration:none; margin:5px 10px; font-size:14px; transition:0.2s;}
.menu a:hover{color:#fff;}
footer{margin-top:30px; padding:20px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); color:#64748b; font-size:12px;}
@media(max-width:600px){header h1{font-size:26px;} .group-title{font-size:20px;} .grid{grid-template-columns:repeat(2,1fr);} }
`;
document.head.appendChild(style);

// 2. MEMUAT INJECT HEADER, MENU, & FOOTER OTOMATIS
document.addEventListener("DOMContentLoaded", function () {
    const is404Page = document.querySelector('.box') !== null;

    if (!is404Page) {
        const headerHtml = `
        <header>
            <h1>LINK ALTERNATIF RECOGNIZED GROUP</h1>
            <p>Selamat datang di WL4 PORTAL. Kami menyediakan akses langsung, aman, ringan, dan mobile-friendly untuk seluruh layanan resmi dari Recognized Group.</p>
        </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
    }

    // --- LOGIKA OTOMATISASI PARAGRAF DESKRIPSI UTK 24 SUBDOMAIN ---
    const currentHost = window.location.hostname;
    
    // Teks Default untuk Domain Utama (wl4.link)
    let dynamicTitle = "Tentang WL4 Portal";
    let dynamicDesc = "WL4 Access Portal menyediakan kumpulan link alternatif resmi dan link login wap terupdate untuk seluruh jaringan Recognized Group. Kami mempermudah Anda mengakses situs terpercaya bebas blokir internet positif seperti 4DPRIZE, INDOPOOLS, INDO4DPOOLS, SHIO88, ANGKANET4D, INDOVEGAS4D, ANUGERAHTOTO, BINTANG4DP, AKSARA4D, dan 4DSUPER. Dapatkan juga akses langsung ke grup populer lainnya termasuk KAISARTOTO88, WLATOGEL88, INDOLOTTERY88, DUNIALOTTERY88, INDOBOSS6D, MICROTOGEL88, DIM88, VIP4DP, VEGAS6D, VICTORY4DP, VIRAL4DP, VVIPBOSS, KISARANTOTO, serta KISARAN4D yang selalu aktif 24 jam.";

    // ==================== GRUP 4DPRIZE (10 BRAND) ====================
    if (currentHost.includes("4dprize")) {
        dynamicTitle = "Tentang 4DPRIZE";
        dynamicDesc = "4DPRIZE hadir sebagai pilar utama dari 4DPrize Group yang menyediakan pasaran toto terbesar. Melalui halaman navigasi aman terupdate ini, seluruh member dapat mengakses link login versi wap mobile dan pendaftaran member baru secara instan tanpa kendala pemblokiran.";
    } else if (currentHost.includes("indopools")) {
        dynamicTitle = "Tentang INDOPOOLS";
        dynamicDesc = "INDOPOOLS menyediakan gerbang alternatif resmi untuk memudahkan akses ke arena judi toto terpercaya Recognized Group. Didukung infrastruktur tangguh, situs jembatan ini menggaransi kelancaran navigasi daftar akun baru dan link login wap harian Anda.";
    } else if (currentHost.includes("indo4dpools")) {
        dynamicTitle = "Tentang INDO4DPOOLS";
        dynamicDesc = "INDO4DPOOLS hadir sebagai platform tebak angka modern yang sangat responsif. Halaman perantara resmi ini memberikan jaminan link login alternatif wap dan web bebas nawala dengan server ringan demi kenyamanan member setia 4DPrize Group.";
    } else if (currentHost.includes("shio88")) {
        dynamicTitle = "Tentang SHIO88";
        dynamicDesc = "SHIO88 merupakan link alternatif resmi dari 4DPrize Group yang menyajikan kemudahan pendaftaran akun toto secara kilat. Server kami dirancang mobile-friendly untuk memastikan login versi wap Anda berjalan mulus tanpa hambatan internet positif.";
    } else if (currentHost.includes("angkanet4d")) {
        dynamicTitle = "Tentang ANGKANET4D";
        dynamicDesc = "ANGKANET4D adalah bagian dari jaringan Recognized Group yang menyuguhkan akses link login wap resmi anti-blokir. Platform perantara ini mengutamakan kecepatan akses data sehingga memudahkan para pemain melakukan pasang taruhan dan daftar baru.";
    } else if (currentHost.includes("indovegas4d")) {
        dynamicTitle = "Tentang INDOVEGAS4D";
        dynamicDesc = "INDOVEGAS4D menyajikan pengalaman navigasi taruhan toto kelas dunia dari 4DPrize Group. Gunakan jalur alternatif resmi di halaman static ini untuk melakukan pendaftaran member baru atau masuk langsung ke sistem login versi mobile wap yang super stabil.";
    } else if (currentHost.includes("anugerahtoto")) {
        dynamicTitle = "Tentang ANUGERAHTOTO";
        dynamicDesc = "ANUGERAHTOTO merupakan situs penyedia link alternatif resmi terpercaya yang berada di bawah naungan 4DPrize Group. Memberikan proteksi keamanan tingkat tinggi untuk akses login wap dan link daftar baru agar terhindar dari pemblokiran siber.";
    } else if (currentHost.includes("bintang4dp")) {
        dynamicTitle = "Tentang Bintang 4DP";
        dynamicDesc = "Bintang 4DP menyajikan link alternatif resmi terupdate dari ekosistem 4DPrize Group. Halaman perantara static ini dikonstruksi khusus untuk mengamankan proses registrasi member baru dan jalur masuk login wap kapan saja tanpa interupsi.";
    } else if (currentHost.includes("aksara4d")) {
        dynamicTitle = "Tentang Aksara 4D";
        dynamicDesc = "Aksara 4D adalah pilihan utama bagi penikmat toto yang mendambakan platform login wap berkecepatan penuh dari 4DPrize Group. Kami menjamin seluruh rute link alternatif dan pendaftaran di halaman ini aman dan terbebas dari nawala.";
    } else if (currentHost.includes("4dsuper")) {
        dynamicTitle = "Tentang 4DSuper";
        dynamicDesc = "4DSuper menawarkan rute jembatan masuk situs taruhan resmi terupdate besutan 4DPrize Group. Akses link login wap mobile serta pendaftaran akun baru diproteksi secara penuh oleh server static super ringan demi kelancaran taruhan Anda.";
    }
    
    // ==================== GRUP 88 (7 BRAND) ====================
    else if (currentHost.includes("indolottery88")) {
        dynamicTitle = "Tentang INDOLOTTERY88";
        dynamicDesc = "INDOLOTTERY88 adalah situs taruhan togel online terpercaya di bawah bendera 88 Group yang menyediakan pasaran terlengkap dengan akses link alternatif login dan daftar versi wap super cepat serta aman dari blokir nawala.";
    } else if (currentHost.includes("dunialottery88")) {
        dynamicTitle = "Tentang DUNIALOTTERY88";
        dynamicDesc = "DUNIALOTTERY88 hadir sebagai platform toto terbaik dari 88 Group. Kami menyediakan navigasi jembatan resmi terupdate untuk menjamin kelancaran login mobile wap dan pendaftaran member baru setiap hari.";
    } else if (currentHost.includes("indoboss6d")) {
        dynamicTitle = "Tentang INDOBOSS6D";
        dynamicDesc = "INDOBOSS6D merupakan gerbang utama taruhan online 88 Group yang fokus pada kenyamanan akses mobile. Nikmati fasilitas link login alternatif wap dengan sistem enkripsi tinggi tanpa gangguan internet positif.";
    } else if (currentHost.includes("microtogel88")) {
        dynamicTitle = "Tentang MICROTOGEL88";
        dynamicDesc = "MICROTOGEL88 menyediakan link login wap resmi dengan infrastruktur server paling ringan di kelasnya. Bagian dari jaringan 88 Group yang berkomitmen memberikan jalur daftar bebas nawala 24 jam.";
    } else if (currentHost.includes("dim88")) {
        dynamicTitle = "Tentang DIM88";
        dynamicDesc = "DIM88 adalah pusat link alternatif resmi terupdate persembahan 88 Group. Memudahkan para pemain judi togel online mengakses menu pendaftaran akun baru dan login wap melalui rute server tercepat.";
    } else if (currentHost.includes("kaisartoto88")) {
        dynamicTitle = "Tentang KAISARTOTO88";
        dynamicDesc = "KAISARTOTO88 adalah ikon tepercaya dari 88 Group yang menghadirkan link login alternatif wap anti blokir. Melalui rute khusus ini, Anda dapat melakukan registrasi akun baru judi toto dengan jaminan kelancaran akses 24 jam penuh.";
    } else if (currentHost.includes("wlatogel88")) {
        dynamicTitle = "Tentang WLATOGEL88";
        dynamicDesc = "WLATOGEL88 menyuguhkan fasilitas akses login versi wap mobile tercepat dari 88 Group. Gunakan jembatan link alternatif resmi di sini untuk pendaftaran akun baru secara aman dan terhindar dari pemblokiran internet positif.";
    }

    // ==================== GRUP VIP4DP (5 BRAND) ====================
    else if (currentHost.includes("vip4dp")) {
        dynamicTitle = "Tentang VIP4DP";
        dynamicDesc = "VIP4DP merupakan platform judi terkemuka dari VIP4DP Group yang legendaris. Dapatkan kenyamanan pendaftaran dan login rute alternatif wap secara langsung melalui server jembatan kami yang super ringan dan kebal sensor siber.";
    } else if (currentHost.includes("vegas6d")) {
        dynamicTitle = "Tentang VEGAS6D";
        dynamicDesc = "VEGAS6D menyajikan gerbang link alternatif resmi dari VIP4DP Group bagi para pemburu jackpot toto. Proses masuk login wap dan registrasi akun baru berjalan instan berkat optimasi server static berperforma tinggi.";
    } else if (currentHost.includes("victory4dp")) {
        dynamicTitle = "Tentang VICTORY4DP";
        dynamicDesc = "VICTORY4DP memfasilitasi kebutuhan akses taruhan online para member VIP4DP Group tanpa hambatan internet positif. Temukan jalur login wap mobile serta pendaftaran id baru yang resmi dan terupdate di sini.";
    } else if (currentHost.includes("viral4dp")) {
        dynamicTitle = "Tentang VIRAL4DP";
        dynamicDesc = "VIRAL4DP adalah link alternatif resmi terpercaya persembahan VIP4DP Group yang tengah populer. Akses pendaftaran akun judi togel dan link masuk login wap dipastikan aman melalui jalur server proxy cadangan ini.";
    } else if (currentHost.includes("vvipboss")) {
        dynamicTitle = "Tentang VVIPBOSS";
        dynamicDesc = "VVIPBOSS menghadirkan layanan eksklusif login alternatif versi wap dan web dari VIP4DP Group. Nikmati stabilitas koneksi terbaik untuk menu daftar dan pasang angka taruhan tanpa perlu khawatir kendala situs diblokir.";
    }

    // ==================== GRUP KISARAN (2 BRAND) ====================
    else if (currentHost.includes("karantoto") || currentHost.includes("kisarantoto")) {
        dynamicTitle = "Tentang KISARANTOTO";
        dynamicDesc = "KISARANTOTO merupakan pilar utama dari Kisaran Group yang terkenal dengan kredibilitasnya. Gunakan link alternatif resmi terupdate di halaman ini untuk kelancaran masuk login wap mobile serta registrasi member baru tanpa nawala.";
    } else if (currentHost.includes("kisaran4d")) {
        dynamicTitle = "Tentang KISARAN4D";
        dynamicDesc = "KISARAN4D menyodorkan opsi jembatan akses resmi anti-blokir dari Kisaran Group. Server static kami menjamin proses navigasi daftar akun baru serta login alternatif wap Anda berjalan lancar dengan loading secepat kilat.";
    }

    // Inject Komponen Menu Navigasi Global dan Footer di bagian bawah body dengan teks dinamis
    const footerComponentHtml = `
    <div class="info-box">
        <h2>${dynamicTitle}</h2>
        <p>${dynamicDesc}</p>
    </div>
    <div class="menu">
        <a href="/">Beranda</a>
        <a href="/about">Tentang</a>
        <a href="/faq">FAQ</a>
        <a href="/update">Update</a>
        <a href="/contact">Kontak</a>
        <a href="https://wl4.link">Link Alternatif</a>
    </div>
    <footer>© 2026 WL4 Access Portal</footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerComponentHtml);
});

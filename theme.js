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
  .menu{margin-top:14px;}
  .menu a{color:#94a3b8; text-decoration:none; margin-right:14px; font-size:13px;}
  footer{margin-top:45px; padding:20px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); color:#64748b; font-size:12px;}
  @media(max-width:600px){
    header h1{font-size:26px;}
    .group-title{font-size:20px;}
    .grid{grid-template-columns:repeat(2,1fr);}
  }
`;
document.head.appendChild(style);

// 2. MEMUAT INJECT HEADER & FOOTER OTOMATIS SETELAH DOM SIAP
document.addEventListener("DOMContentLoaded", function() {
    // Inject Header di bagian paling atas body
    const headerHtml = `
        <header>
            <h1>LINK ALTERNATIF RECOGNIZED GROUP</h1>
            <p>Selamat datang di WL4 PORTAL. Kami menyediakan akses langsung, aman, ringan, dan mobile-friendly untuk seluruh layanan resmi dari Recognized Group.</p>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Inject Footer di bagian paling bawah body
    const footerHtml = `<footer>© 2026 WL4 Access Portal</footer>`;
    document.body.insertAdjacentHTML('beforeend', footerHtml);
});

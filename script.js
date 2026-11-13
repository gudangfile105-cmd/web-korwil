/* =====================================================================
   CONFIG — SATU-SATUNYA TEMPAT UNTUK MENGEDIT ISI WEBSITE
   Ganti teks di antara tanda kutip "..." lalu simpan. Jangan hapus
   tanda kutip, koma, kurung [ ] atau kurung { }.
   ===================================================================== */
const CONFIG = {

  /* 1. WARNA UTAMA (kode warna hex, bisa dicari di Google: "color picker") */
  warna: {
    utama: "#7C3AED",   // ungu
    kuning: "#FDE047",  // kuning lemon
    pink: "#FF4FA3",    // pink
    biru: "#2F5BFF",    // biru elektrik
    gelap: "#1B1035",   // warna teks & garis tebal
    latar: "#FFF8E7"    // warna latar halaman
  },

  /* 2. IDENTITAS KANTOR */
  nama: "OPERATOR SEKOLAH SD KECAMATAN REJOSO",
  namaPanjang: "Forum Diskusi - Berbagi Informasi",
  namaSingkat: "OPS ROSO",   // tampil di pojok kiri navbar
  logoEmoji: "🏫",
  jenjang: "SD",
  tagline: "Landingpage OPS SD se-Kecamatan Rejoso!",
  deskripsiSEO: "Website resmi Operator Pendidikan Kecamatan Rejoso, Nganjuk.",

  /* 3. TOMBOL UTAMA DI HERO */
  tombolHero: { teks: "Portal Informasi", target: "#informasi" },

  /* 4. WHATSAPP ADMIN
     Nomor ditulis diawali 62 tanpa 0 dan tanpa tanda +. Contoh: "6281234567890" */
  whatsapp: {
    nomor: "62",
    pesan: "Halo admin OPS Rejoso, saya mau tanya info.",
    labelTombol: "Chat Admin"
  },

  /* 5. MENU NAVBAR (label = tulisan, target = id bagian halaman) */
  menu: [
    { label: "Beranda", target: "#beranda" },
    { label: "Profil", target: "#profil" },
    { label: "Informasi", target: "#informasi" },
    { label: "Pengumuman", target: "#pengumuman" },
    { label: "Galeri", target: "#galeri" },
    { label: "Admin", target: "#admin" },
    { label: "Kontak", target: "#kontak" }
  ],

  /* 6. TEKS BERJALAN (MARQUEE) — tambah/kurangi sesuka hati */
  marquee: [
    "💻 Salam Satu Data", "📚 Agenda ", "📸 Dokumentasi",
    "🤝 Senergi",
  ],

  /* 7. JUDUL TIAP BAGIAN */
  bagian: {
    profil:     { stiker: "👋 Welcome", judul: "Profil Singkat", sub: "" },
    informasi:  { stiker: "📄 Info & Dokumen", judul: "Informasi Terbaru", sub: "Klik tombol untuk membuka dokumennya." },
    pengumuman: { stiker: "📢 Penting!", judul: "Pengumuman", sub: "Jangan sampai ketinggalan ya." },
    galeri:     { stiker: "📸 Seru-seruan", judul: "Galeri Kegiatan", sub: "Cuplikan momen dari sekolah-sekolah kita." },
    admin:      { stiker: "🔐 Khusus admin", judul: "Ruang Admin", sub: "Masuk dengan kata sandi untuk menambah, mengedit, menghapus data, dan mengunggah gambar." }
  },

  /* 8. PROFIL */
  profil: {
    judul: "Assalamuaikum",
    teks: [
      "Operator Sekolah merupakan bagian penting dalam mendukung kelancaran administrasi dan pengelolaan data pendidikan di lingkungan satuan pendidikan. Dengan memanfaatkan teknologi informasi, Operator Sekolah berperan dalam memastikan pengelolaan data sekolah berjalan secara tertib, akurat, efektif, dan berkelanjutan.",
      "Melalui website ini, kami berkomitmen untuk menghadirkan pusat informasi, dokumentasi, serta layanan administrasi sekolah yang informatif dan mudah diakses. Berbagai informasi dan kegiatan terkait pengelolaan data pendidikan, administrasi sekolah, pendataan peserta didik, tenaga pendidik dan kependidikan, serta informasi pendukung lainnya disajikan sebagai bentuk transparansi dan peningkatan kualitas pelayanan."
    ],
    gambar: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=70",

    /* Angka statistik pengunjung web & data lain (angka boleh diganti manual) */
    statistik: [
      { emoji: "👀", angka: "12.540", label: "Pengunjung web" },
      { emoji: "🏫", angka: "37", label: "SD Negeri" },
      { emoji: "👩‍🏫", angka: "37", label: "Operator Sekolah" }
    ],

    /* Jadwal kegiatan */
    jadwalJudul: "🗓️ Jadwal Kegiatan",
    jadwal: [
      { tanggal: "15 Nov 2026", kegiatan: "Rapat koordinasi kepala sekolah" },
      { tanggal: "22 Nov 2026", kegiatan: "Pelatihan guru kelas" },
      { tanggal: "25 Nov 2026", kegiatan: "Upacara Hari Guru Nasional" }
    ]
  },

  /* 9. INFORMASI — judul, ket (keterangan), gambar (link foto), link (alamat dokumen), teksLink (tulisan tombol)
     Bisa juga ditambah lewat Ruang Admin di halaman. */
  informasi: [
    { judul: "Juknis Penerimaan Murid Baru", ket: "Panduan lengkap alur pendaftaran SD tahun ajaran baru.", gambar: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=70", link: "https://example.com/juknis.pdf", teksLink: "Buka dokumen" },
    { judul: "Kalender Pendidikan", ket: "Hari efektif belajar, libur, dan agenda tahunan.", gambar: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=70", link: "https://example.com/kalender.pdf", teksLink: "Buka dokumen" },
    { judul: "Formulir Data Sekolah", ket: "Unduh formulir pendataan untuk dilengkapi sekolah.", gambar: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=70", link: "https://example.com/formulir.docx", teksLink: "Unduh" }
  ],

  /* 10. PENGUMUMAN — judul, tanggal, ket, gambar */
  pengumuman: [
    { judul: "Libur Semester Ganjil", tanggal: "20 Des 2026", ket: "Pembagian rapor dan libur semester mengikuti kalender pendidikan.", gambar: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=70" },
    { judul: "Lomba Literasi Antar SD", tanggal: "5 Des 2026", ket: "Pendaftaran dibuka! Hubungi korwil lewat WhatsApp admin.", gambar: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=70" },
    { judul: "Pelatihan Kurikulum Guru", tanggal: "28 Nov 2026", ket: "Wajib diikuti perwakilan guru tiap sekolah.", gambar: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=70" }
  ],

  /* 11. GALERI KEGIATAN — judul, ket, gambar */
  galeri: [
    { judul: "Upacara Bendera", ket: "Semangat pagi seluruh siswa.", gambar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=70" },
    { judul: "Belajar di Kelas", ket: "Suasana belajar yang ceria.", gambar: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70" },
    { judul: "Lomba Antar Sekolah", ket: "Sportif dan seru!", gambar: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=600&q=70" },
    { judul: "Wisuda Kelas 6", ket: "Selamat melangkah ke jenjang berikutnya.", gambar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=70" }
  ],

  /* 12A. SUPABASE — penyimpanan data bersama untuk semua pengunjung.
     Isi url dan key dari Supabase (Project Settings > API Keys > Publishable key).
     Kalau dikosongkan, website memakai mode lama (data hanya tersimpan di browser). */
  supabase: {
    url: "https://rvuubpfrxfxstxtdmoms.supabase.co",        // contoh: "https://abcdxyz.supabase.co"
    key: "sb_publishable_HucK-QeRWdoql-JHENUGeQ_5gjpvSIJ",        // contoh: "sb_publishable_xxxxxxxx"  (JANGAN pakai secret key!)
    tabel: "konten",
    bucket: "gambar"
  },

  /* 12. HAK AKSES ADMIN (bisa mengelola Profil, Informasi, Pengumuman, Kontak, Galeri langsung dari web)
     PERINGATAN: kata sandi di file ini bisa dilihat siapa saja yang membuka kode.
     Data yang diubah lewat Ruang Admin tersimpan di browser perangkat ini saja.
     Untuk pengamanan sungguhan dan data bersama, butuh server/database. */
  admin: {
    password: "admin123",   // hanya dipakai kalau Supabase kosong. Jika Supabase aktif, login memakai email + sandi akun Supabase
    teksLogin: "Masukkan kata sandi admin",
    tombolLogin: "Masuk",
    tombolKeluar: "Keluar",
    tombolSimpan: "Simpan & tampilkan di web",
    tombolReset: "Kembalikan data awal",
    salah: "Kata sandi salah, coba lagi ya.",
    sukses: "Berhasil disimpan ✅ Sudah tampil di web."
  },

  /* 13. KONTAK, SOSIAL MEDIA, FOOTER */
  kontak: {
    alamat: "Jl. Raya Bojonegoro NO. 39 - Rejoso - Nganjuk",
    telepon: "(isi nomor telepon kantor)",
    email: "(isi email kantor)",
    jam: "Senin–Jumat, 07.30–15.30 WIB"
  },
  sosmed: [
    { nama: "Instagram", emoji: "📷", url: "https://instagram.com/" },
    { nama: "Facebook", emoji: "👍", url: "https://facebook.com/" },
    { nama: "YouTube", emoji: "▶️", url: "https://youtube.com/" }
  ],
  footerTeks: "Dibuat dengan 💜 untuk pendidikan Rejoso."
};

/* =====================================================================
   KODE PROGRAM — orang awam tidak perlu mengubah apa pun di bawah ini
   ===================================================================== */
const $ = (s) => document.querySelector(s);
const KEY = "korwil_data_v1";
const LISTS = ["informasi", "pengumuman", "galeri"];
const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='3'%3E%3Crect width='4' height='3' fill='%23FDE047'/%3E%3C/svg%3E";

function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const k in (attrs || {})) {
    if (k === "class") e.className = attrs[k];
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]);
    else e.setAttribute(k, attrs[k]);
  }
  kids.flat().forEach((x) => { if (x != null) e.append(x instanceof Node ? x : document.createTextNode(x)); });
  return e;
}
function img(src, alt) {
  const i = h("img", { src, alt: alt || "", loading: "lazy" });
  i.onerror = () => { i.onerror = null; i.src = FALLBACK; };
  return i;
}
const SB = CONFIG.supabase;
const sb = SB.url && SB.key && window.supabase ? window.supabase.createClient(SB.url, SB.key) : null;
let store = {};
if (!sb) { try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {} }
const getData = (k) => store[k] || CONFIG[k];
function saveStore() { if (sb) return true; try { localStorage.setItem(KEY, JSON.stringify(store)); return true; } catch (e) { return false; } }
const waLink = () => `https://wa.me/${CONFIG.whatsapp.nomor}?text=${encodeURIComponent(CONFIG.whatsapp.pesan)}`;

function head(k) {
  const b = CONFIG.bagian[k];
  return h("div", { class: "sec-head fade" }, h("span", { class: "sticker" }, b.stiker), h("h2", {}, b.judul), b.sub ? h("p", {}, b.sub) : null);
}

/* Warna & judul halaman */
function setup() {
  const w = CONFIG.warna;
  Object.keys(w).forEach((k) => document.documentElement.style.setProperty("--" + k, w[k]));
  document.title = CONFIG.nama;
  $('meta[name="description"]').setAttribute("content", CONFIG.deskripsiSEO);
}

/* Navbar */
function renderNav() {
  const menu = h("ul", { class: "menu", id: "menu" }, CONFIG.menu.map((m) =>
    h("li", {}, h("a", { href: m.target, onclick: () => menu.classList.remove("open") }, m.label))));
  const burger = h("button", { class: "burger", "aria-label": "Buka menu", "aria-expanded": "false",
    onclick: () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")) }, "☰");
  $("#navbar").append(h("nav", { class: "nav" }, h("a", { class: "logo", href: "#beranda" }, CONFIG.logoEmoji + " " + CONFIG.namaSingkat), burger), menu);
}

/* Hero + marquee */
function renderHero() {
  const hero = $("#beranda");
  ["⭐", "🎨", "📚", "✏️"].forEach((e, i) => {
    const f = h("span", { class: "float", "aria-hidden": "true" }, e);
    f.style.cssText = `top:${15 + i * 18}%;${i % 2 ? "right" : "left"}:${4 + i * 3}%;animation-delay:${i * .6}s`;
    hero.append(f);
  });
  hero.append(
    h("span", { class: "sticker" }, `🎓 Jenjang ${CONFIG.jenjang}`),
    h("h1", {}, CONFIG.nama),
    h("p", {}, CONFIG.tagline),
    h("a", { class: "btn", href: CONFIG.tombolHero.target }, CONFIG.tombolHero.teks + " 🚀")
  );
  const items = CONFIG.marquee.map((t) => h("span", {}, t));
  const dup = CONFIG.marquee.map((t) => h("span", {}, t));
  $("#marquee").append(h("div", { class: "track" }, items, dup, items.map((n) => n.cloneNode(true)), dup.map((n) => n.cloneNode(true))));
}

/* Animasi fade-up saat scroll (hanya opacity & transform) */
const observer = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("show"); observer.unobserve(e.target); }
}), { threshold: 0.12 });
const observe = () => document.querySelectorAll(".fade:not(.show)").forEach((el) => observer.observe(el));

/* Profil (bento grid) */
function renderProfil() {
  const p = getData("profil"), sec = $("#profil");
  sec.replaceChildren(head("profil"));
  const stats = p.statistik.map((s, i) => h("div", { class: `box stat fade c${(i % 3) + 2}` }, h("span", {}, s.emoji), h("strong", {}, s.angka), s.label));
  sec.append(h("div", { class: "bento" },
    h("div", { class: "box wide fade c1" }, h("h3", {}, p.judul), p.teks.map((t) => h("p", {}, t))),
    h("div", { class: "box photo fade" }, img(p.gambar, CONFIG.namaPanjang)),
    stats,
    h("div", { class: "box wide fade" }, h("h3", {}, p.jadwalJudul),
      h("ul", { class: "jadwal" }, p.jadwal.map((j) => h("li", {}, h("b", {}, j.tanggal + " — "), j.kegiatan))))));
  observe();
}

/* Grid kartu untuk informasi, pengumuman, galeri */
function renderGrid(k) {
  const sec = $("#" + k);
  let grid = sec.querySelector(".grid");
  if (!grid) { sec.append(head(k)); grid = h("div", { class: "grid" }); sec.append(grid); }
  grid.replaceChildren();
  const list = getData(k);
  if (!list.length) grid.append(h("p", { class: "empty" }, "Belum ada data. Cek lagi nanti ya 🙌"));
  list.forEach((d) => {
    grid.append(h("article", { class: "card fade" }, h("div", { class: "img" }, img(d.gambar, d.judul)),
      h("div", { class: "body" },
        d.tanggal ? h("small", {}, "🗓️ " + d.tanggal) : null,
        h("h3", {}, d.judul), h("p", {}, d.ket),
        d.link ? h("a", { class: "btn sm", href: d.link, target: "_blank", rel: "noopener" }, (d.teksLink || "Buka dokumen") + " 🔗") : null)));
  });
  observe();
}

/* Footer + WhatsApp mengambang */
function renderFooter() {
  const k = getData("kontak");
  $("#kontak").replaceChildren(h("div", { class: "foot" },
    h("div", {}, h("h3", {}, CONFIG.nama), h("p", {}, "📍 " + k.alamat), h("p", {}, "🕘 " + k.jam)),
    h("div", {}, h("h3", {}, "Kontak"), h("p", {}, "📞 " + k.telepon), h("p", {}, "✉️ " + k.email),
      h("p", {}, h("a", { href: waLink(), target: "_blank", rel: "noopener" }, "💬 WhatsApp admin"))),
    h("div", {}, h("h3", {}, "Sosial media"), h("div", { class: "sosmed" }, CONFIG.sosmed.map((s) =>
      h("a", { href: s.url, target: "_blank", rel: "noopener" }, s.emoji + " " + s.nama))))
  ), h("p", { class: "copy" }, `© ${new Date().getFullYear()} ${CONFIG.nama}. ${CONFIG.footerTeks}`));
  const wa = $("#wa");
  wa.href = waLink();
  wa.textContent = "💬 " + CONFIG.whatsapp.labelTombol;
}
const refresh = (k) => (k === "profil" ? renderProfil() : k === "kontak" ? renderFooter() : renderGrid(k));

/* Perkecil foto (maks 800px) supaya muat di penyimpanan browser */
function resize(file, asBlob) {
  return new Promise((ok) => {
    const r = new FileReader();
    r.onload = () => {
      const i = new Image();
      i.onload = () => {
        const s = Math.min(1, 800 / i.width), c = document.createElement("canvas");
        c.width = i.width * s; c.height = i.height * s;
        c.getContext("2d").drawImage(i, 0, 0, c.width, c.height);
        asBlob ? c.toBlob(ok, "image/jpeg", 0.8) : ok(c.toDataURL("image/jpeg", 0.72));
      };
      i.src = r.result;
    };
    r.readAsDataURL(file);
  });
}

/* Unggah foto ke Supabase Storage, hasilnya link publik */
async function uploadImg(file) {
  const blob = await resize(file, true);
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
  const { error } = await sb.storage.from(SB.bucket).upload(path, blob, { contentType: "image/jpeg", cacheControl: "31536000" });
  if (error) throw error;
  return sb.storage.from(SB.bucket).getPublicUrl(path).data.publicUrl;
}

/* Ruang Admin: tambah, edit, hapus, upload gambar */
function renderAdmin() {
  const sec = $("#admin"), A = CONFIG.admin;
  sec.append(head("admin"));
  const box = h("div", { class: "panel fade" });
  sec.append(box);
  const TABS = { profil: "Profil", informasi: "Informasi", pengumuman: "Pengumuman", kontak: "Kontak", galeri: "Galeri" };
  const logged = () => (sb ? !!session : sessionStorage.getItem("korwil_admin") === "1");
  let tab = "profil", editIdx = -1, note = "", uploading = 0, statusEl = null, session = null;
  const say = (t) => { note = t; if (statusEl) statusEl.textContent = t; };
  /* Setelah simpan: geser halaman ke bagian terkait & sorot kartu yang baru/diubah */
  const lihat = (k, idx) => setTimeout(() => {
    const s = $("#" + k);
    if (!s) return;
    s.scrollIntoView({ behavior: "smooth", block: "start" });
    const c = idx != null ? s.querySelectorAll(".card")[idx] : null;
    if (c) { c.classList.add("show", "baru"); setTimeout(() => c.classList.remove("baru"), 3500); }
  }, 200);

  const commit = async (k, v) => {
    if (sb) {
      say("⏳ Menyimpan ke Supabase...");
      const { error } = await sb.from(SB.tabel).upsert({ key: k, value: v, updated_at: new Date().toISOString() });
      if (error) { note = "⚠️ Gagal menyimpan ke Supabase: " + error.message; return false; }
    }
    store[k] = v;
    if (!saveStore()) { note = "⚠️ Gagal menyimpan: memori browser penuh. Hapus data lama atau pakai foto lebih kecil."; return false; }
    refresh(k); note = A.sukses; return true;
  };
  const field = (label, val, area) => {
    const el = area ? h("textarea", { rows: 4 }) : h("input", { type: "text" });
    el.value = val || "";
    return { el, nodes: [h("label", {}, label), el] };
  };
  const imgField = (cur, set) => {
    const prev = h("img", { alt: "Pratinjau", style: "width:160px;height:110px;border:var(--b);border-radius:14px;margin:6px 0" });
    prev.src = cur || FALLBACK;
    const file = h("input", { type: "file", accept: "image/*" });
    file.onchange = async () => { if (file.files[0]) { uploading++; say("⏳ Memproses gambar..."); try { const d = sb ? await uploadImg(file.files[0]) : await resize(file.files[0]); prev.src = d; set(d); say("Gambar siap ✅ Klik tombol simpan di bawah."); } catch (e) { say("⚠️ Gagal mengunggah gambar: " + (e.message || e)); } finally { uploading--; } } };
    const url = h("input", { type: "text", placeholder: "atau tempel link gambar (https://...)", value: cur && !cur.startsWith("data:") ? cur : "" });
    url.oninput = () => { prev.src = url.value || FALLBACK; set(url.value.trim()); };
    return [h("label", {}, "Gambar (upload dari perangkat)"), h("br"), prev, file, url];
  };
  const baris = (t) => t.split("\n").map((s) => s.trim()).filter(Boolean);

  function formProfil() {
    const p = getData("profil"); let gambar = p.gambar;
    const f = { judul: field("Judul", p.judul), teks: field("Teks profil (pisahkan paragraf dengan baris baru)", p.teks.join("\n"), 1),
      stat: field("Statistik: satu per baris, format  emoji | angka | label", p.statistik.map((s) => `${s.emoji} | ${s.angka} | ${s.label}`).join("\n"), 1),
      jad: field("Jadwal: satu per baris, format  tanggal | kegiatan", p.jadwal.map((j) => `${j.tanggal} | ${j.kegiatan}`).join("\n"), 1) };
    const save = h("button", { class: "btn", onclick: async () => {
      if (uploading) return say("⏳ Gambar masih diproses, tunggu sebentar lalu klik simpan lagi.");
      const sp = (l) => l.split("|").map((s) => s.trim());
      const ok = await commit("profil", { ...p, judul: f.judul.el.value, gambar, teks: baris(f.teks.el.value),
        statistik: baris(f.stat.el.value).map((l) => { const [emoji, angka, label] = sp(l); return { emoji: emoji || "", angka: angka || "", label: label || "" }; }),
        jadwal: baris(f.jad.el.value).map((l) => { const [tanggal, ...r] = sp(l); return { tanggal, kegiatan: r.join(" | ") }; }) });
      ok ? (draw(), lihat("profil")) : say(note);
    } }, "Simpan profil 💾");
    return [f.judul.nodes, f.teks.nodes, imgField(gambar, (d) => (gambar = d)), f.stat.nodes, f.jad.nodes, save];
  }
  function formKontak() {
    const k = getData("kontak");
    const f = ["alamat", "telepon", "email", "jam"].map((n) => [n, field(n[0].toUpperCase() + n.slice(1), k[n])]);
    const save = h("button", { class: "btn", onclick: async () => {
      const o = { ...k }; f.forEach(([n, x]) => (o[n] = x.el.value.trim())); (await commit("kontak", o)) ? (draw(), lihat("kontak")) : say(note);
    } }, "Simpan kontak 💾");
    return [f.map(([, x]) => x.nodes), save];
  }
  function formList() {
    const list = getData(tab), cur = editIdx >= 0 ? list[editIdx] : {};
    let gambar = cur.gambar || "";
    const names = [["judul", "Judul"], ["ket", "Keterangan singkat"]];
    if (tab === "informasi") names.push(["link", "Link dokumen (https://...)"], ["teksLink", "Tulisan tombol (contoh: Unduh / Buka dokumen)"]);
    if (tab === "pengumuman") names.push(["tanggal", "Tanggal (contoh: 20 Des 2026)"]);
    const f = names.map(([n, l]) => [n, field(l, cur[n], n === "ket")]);
    const save = h("button", { class: "btn", onclick: async () => {
      if (uploading) return say("⏳ Gambar masih diproses, tunggu sebentar lalu klik simpan lagi.");
      const o = { ...cur, gambar }; f.forEach(([n, x]) => (o[n] = x.el.value.trim()));
      if (!o.judul) return say("⚠️ Judul wajib diisi.");
      const arr = [...list], idx = editIdx >= 0 ? editIdx : 0;
      editIdx >= 0 ? (arr[editIdx] = o) : arr.unshift(o);
      if (await commit(tab, arr)) { editIdx = -1; draw(); lihat(tab, idx); } else say(note);
    } }, editIdx >= 0 ? "Simpan perubahan 💾" : A.tombolSimpan + " 💾");
    const cancel = editIdx >= 0 ? h("button", { class: "btn alt", style: "margin-left:8px", onclick: () => { editIdx = -1; note = ""; draw(); } }, "Batal") : null;
    const rows = list.map((d, i) => h("div", { class: "row" }, h("span", {}, d.judul),
      h("span", {}, h("button", { class: "btn sm alt", onclick: () => { editIdx = i; note = ""; draw(); scrollTo({ top: sec.offsetTop }); } }, "✏️ Edit"), " ",
        h("button", { class: "btn sm alt", "aria-label": "Hapus " + d.judul, onclick: async () => {
          if (confirm(`Hapus "${d.judul}"?`)) { editIdx = -1; await commit(tab, list.filter((_, x) => x !== i)); draw(); }
        } }, "🗑️ Hapus"))));
    return [h("h3", {}, editIdx >= 0 ? "Edit data" : "Tambah data baru"), f.map(([, x]) => x.nodes), imgField(gambar, (d) => (gambar = d)), save, cancel,
      h("h3", { style: "margin-top:22px" }, `Daftar ${TABS[tab]} (${list.length})`), rows];
  }

  function draw() {
    box.replaceChildren();
    if (!logged()) {
      const em = sb ? h("input", { type: "email", id: "em", placeholder: "Email admin", autocomplete: "username", "aria-label": "Email admin" }) : null;
      const pw = h("input", { type: "password", id: "pw", placeholder: A.teksLogin, autocomplete: "current-password", "aria-label": A.teksLogin });
      const msg = h("p", { class: "msg", role: "alert" });
      const go = async () => {
        if (sb) {
          msg.textContent = "⏳ Masuk...";
          const { error } = await sb.auth.signInWithPassword({ email: em.value.trim(), password: pw.value });
          if (error) { msg.textContent = A.salah; return; }
          session = (await sb.auth.getSession()).data.session; draw(); return;
        }
        if (pw.value === A.password) { try { sessionStorage.setItem("korwil_admin", "1"); } catch (e) {} draw(); } else msg.textContent = A.salah;
      };
      [em, pw].forEach((x) => x && x.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); }));
      box.append(...(em ? [h("label", { for: "em" }, "Email admin"), em] : []), h("label", { for: "pw" }, A.teksLogin), pw, h("button", { class: "btn", onclick: go }, A.tombolLogin + " 🔓"), msg);
      return;
    }
    const tabs = h("div", { class: "tabs" }, Object.keys(TABS).map((k) =>
      h("button", { class: "btn alt" + (k === tab ? " on" : ""), onclick: () => { tab = k; editIdx = -1; note = ""; draw(); } }, TABS[k])));
    const body = tab === "profil" ? formProfil() : tab === "kontak" ? formKontak() : formList();
    const imp = h("input", { type: "file", accept: "application/json", style: "display:none" });
    imp.onchange = () => { const r = new FileReader(); r.onload = async () => { try { const o = JSON.parse(r.result); if (sb) { const { error } = await sb.from(SB.tabel).upsert(Object.entries(o).map(([key, value]) => ({ key, value }))); if (error) throw error; } store = o; saveStore(); setupAll(); note = "Cadangan dipulihkan ✅"; } catch (e) { note = "File cadangan tidak valid atau gagal disimpan."; } draw(); }; r.readAsText(imp.files[0]); };
    const tools = h("div", { class: "tabs", style: "margin-top:20px" },
      h("button", { class: "btn sm alt", onclick: () => { const a = h("a", { href: URL.createObjectURL(new Blob([JSON.stringify(store, null, 1)], { type: "application/json" })), download: "cadangan-korwil.json" }); a.click(); } }, "⬇️ Unduh cadangan"),
      h("button", { class: "btn sm alt", onclick: () => imp.click() }, "⬆️ Pulihkan cadangan"), imp,
      h("button", { class: "btn sm alt", onclick: async () => { if (sb) { const { error } = await sb.from(SB.tabel).delete().eq("key", tab); if (error) { note = "⚠️ Gagal mereset: " + error.message; return draw(); } } delete store[tab]; saveStore(); refresh(tab); editIdx = -1; note = "Data bagian ini dikembalikan ke awal."; draw(); } }, A.tombolReset),
      h("button", { class: "btn sm alt", onclick: async () => { if (sb) { await sb.auth.signOut(); session = null; } try { sessionStorage.removeItem("korwil_admin"); } catch (e) {} draw(); } }, A.tombolKeluar));
    statusEl = h("p", { class: "msg", role: "status" }, note);
    box.append(tabs, statusEl, ...body.flat(Infinity).filter(Boolean), tools);
  }
  draw();
  if (sb) {
    sb.auth.getSession().then(({ data }) => { session = data.session; draw(); });
    sb.auth.onAuthStateChange((_e, s) => { const was = !!session; session = s; if (was !== !!s) draw(); });
  }
}
const setupAll = () => { renderProfil(); LISTS.forEach(renderGrid); renderFooter(); };

/* Jalankan semua */
/* Ambil data terbaru dari Supabase (dilihat semua pengunjung) */
async function loadRemote() {
  if (!sb) return;
  try {
    const { data, error } = await sb.from(SB.tabel).select("key,value");
    if (error) throw error;
    (data || []).forEach((r) => (store[r.key] = r.value));
    setupAll();
  } catch (e) { console.warn("Gagal memuat data Supabase:", e.message || e); }
}
setup(); renderNav(); renderHero(); setupAll(); renderAdmin(); observe(); loadRemote();

/* ===== FITUR LOGO & SOSMED ===== */
const BUCKET = "aset";

function urlAman(u) {
  try {
    const x = new URL(u);
    return ["http:", "https:"].includes(x.protocol) ? x.href : null;
  } catch { return null; }
}

/* --- Logo --- */
async function muatLogo() {
  if (!sb) return;
  const { data } = await sb.from("site_settings").select("value").eq("key", "logo_url").maybeSingle();
  const el = document.querySelector(".logo");
  if (!data?.value || !el) return;

  // hapus ikon 🏫 bawaan (di mana pun posisinya di dalam .logo)
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    walker.currentNode.textContent = walker.currentNode.textContent.replace(/🏫\uFE0F?\s*/g, "");
  }

    let img = el.querySelector(".logo-img");
  if (!img) {
    img = document.createElement("img");
    img.className = "logo-img";
    img.alt = "Logo";
    el.prepend(img);
  }
  img.src = data.value;

  // paksa susunan KIRI-KANAN: gambar di kiri, teks di kanan
  el.style.display = "inline-flex";
  el.style.flexDirection = "row";
  el.style.flexWrap = "nowrap";
  el.style.alignItems = "center";
  el.style.gap = "8px";
  el.style.width = "auto";
  img.style.display = "inline-block";
  img.style.height = "40px";
  img.style.width = "auto";
  img.style.margin = "0";
  img.style.flex = "none";
}

async function uploadLogo(file) {
  if (!file.type.startsWith("image/")) throw new Error("File harus berupa gambar.");
  if (file.size > 2 * 1024 * 1024) throw new Error("Ukuran maksimal 2 MB.");
  const ext = file.name.split(".").pop().toLowerCase();
  const path = `logo/logo-${Date.now()}.${ext}`;
  const { error } = await sb.storage.from(BUCKET).upload(path, file, { cacheControl: "3600" });
  if (error) throw error;
  const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
  const { error: e2 } = await sb.from("site_settings").upsert({ key: "logo_url", value: data.publicUrl });
  if (e2) throw e2;
  return data.publicUrl;
}

/* --- Sosmed tampil di web (footer Kontak) --- */
async function muatSosmed() {
  const foot = document.getElementById("kontak");
  if (!foot) return;
  const { data } = await sb.from("sosmed").select("*").order("urutan").order("id");
  let box = foot.querySelector(".sosmed");
  if (!box) {
    box = document.createElement("div");
    box.className = "sosmed";
    foot.appendChild(box);
  }
  box.replaceChildren();
  (data || []).forEach(s => {
    const href = urlAman(s.url);
    if (!href) return;
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = s.nama;
    box.appendChild(a);
  });
}

/* --- Panel admin --- */
async function renderAdminExtra(box) {
  box.replaceChildren();
  box.insertAdjacentHTML("beforeend", `
   <h3>Logo situs</h3>
    <img id="prevLogo" class="logo-img" alt="" hidden>
    <input id="urlLogo" placeholder="Tempel link gambar logo (https://...)">
    <button type="button" id="btnLogo">Simpan logo 💾</button>
    <p id="pesanLogo"></p>

    <h3>Sosial media</h3>
    <div id="listSosmed"></div>
    <h4>Tambah baru</h4>
    <input id="smNama" placeholder="Nama (mis. Instagram)">
    <input id="smUrl" placeholder="https://instagram.com/akun">
    <button type="button" id="btnTambahSm">Tambah ➕</button>
    <p id="pesanSm"></p>
  `);

  const q = s => box.querySelector(s);

  // preview logo saat ini
  const { data: st } = await sb.from("site_settings").select("value").eq("key", "logo_url").maybeSingle();
  if (st?.value) { q("#prevLogo").src = st.value; q("#prevLogo").hidden = false; }

    if (st?.value) q("#urlLogo").value = st.value;

  q("#btnLogo").onclick = async () => {
    const href = urlAman(q("#urlLogo").value.trim());
    if (!href) { q("#pesanLogo").textContent = "Link harus diawali http:// atau https://"; return; }
    q("#pesanLogo").textContent = "Menyimpan...";
    const { error } = await sb.from("site_settings").upsert({ key: "logo_url", value: href });
    if (error) { q("#pesanLogo").textContent = "Gagal: " + error.message; return; }
    q("#prevLogo").src = href; q("#prevLogo").hidden = false;
    q("#pesanLogo").textContent = "Logo berhasil disimpan ✅";
    muatLogo();
  };

  async function muatDaftar() {
    const list = q("#listSosmed");
    list.replaceChildren();
    const { data } = await sb.from("sosmed").select("*").order("urutan").order("id");
    (data || []).forEach(s => {
      const row = document.createElement("div");
      row.className = "sm-row";
      const n = document.createElement("input"); n.value = s.nama;
      const u = document.createElement("input"); u.value = s.url;
      const simpan = document.createElement("button"); simpan.type = "button"; simpan.textContent = "Simpan 💾";
      const hapus = document.createElement("button"); hapus.type = "button"; hapus.textContent = "Hapus 🗑️";

      simpan.onclick = async () => {
        const href = urlAman(u.value.trim());
        if (!n.value.trim() || !href) { q("#pesanSm").textContent = "Nama wajib diisi dan link harus diawali http:// atau https://"; return; }
        const { error } = await sb.from("sosmed").update({ nama: n.value.trim(), url: href }).eq("id", s.id);
        q("#pesanSm").textContent = error ? "Gagal: " + error.message : "Tersimpan ✅";
        muatSosmed();
      };
      hapus.onclick = async () => {
        if (!confirm(`Hapus ${s.nama}?`)) return;
        const { error } = await sb.from("sosmed").delete().eq("id", s.id);
        if (error) { q("#pesanSm").textContent = "Gagal: " + error.message; return; }
        muatDaftar(); muatSosmed();
      };
      row.append(n, u, simpan, hapus);
      list.appendChild(row);
    });
  }
  await muatDaftar();

  q("#btnTambahSm").onclick = async () => {
    const nama = q("#smNama").value.trim();
    const href = urlAman(q("#smUrl").value.trim());
    if (!nama || !href) { q("#pesanSm").textContent = "Nama wajib diisi dan link harus diawali http:// atau https://"; return; }
    const { error } = await sb.from("sosmed").insert({ nama, url: href });
    if (error) { q("#pesanSm").textContent = "Gagal: " + error.message; return; }
    q("#smNama").value = ""; q("#smUrl").value = "";
    q("#pesanSm").textContent = "Ditambahkan ✅";
    muatDaftar(); muatSosmed();
  };
}

muatLogo();
muatSosmed();

/* Pasang panel Logo & Sosmed di bawah kartu Ruang Admin */
function pasangPanelExtra() {
  const admin = document.getElementById("admin");
  if (!admin || !sb) return;
  if (document.getElementById("extraTampilan")) return;
  // hanya tampil kalau admin sudah login (form admin sudah muncul)
  if (!admin.querySelector("textarea, input[type=file]")) return;
  const box = document.createElement("div");
  box.id = "extraTampilan";
  box.className = "panel";
  box.style.marginTop = "20px";
  admin.appendChild(box);
  renderAdminExtra(box);
}

const adminEl = document.getElementById("admin");
if (adminEl) {
  new MutationObserver(pasangPanelExtra).observe(adminEl, { childList: true, subtree: true });
}
pasangPanelExtra();

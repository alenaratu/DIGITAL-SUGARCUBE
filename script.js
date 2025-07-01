const pockets = [
  { password: "coachkeren", message: "Haloo ka ren! terima kasihh banyak sudahh menjadi coach yang sangat baikk selama 2,5 bulan inii. Aku belajar banyak banget darii ka ren selama AFL inii dan bener-bener nunjukin kalo coach ituu ga cuma sekedar membimbing tapi juga harus bisa berbaur sama anak-anaknya. Semoga kak ren sukses selaluu, skripsi nya lancar, dann semua impiannya bisa tercapai ❤️" },
  { password: "1237", message: "Makasih banyak ya Kak udah sering bantuin aku, jawab pertanyaan-pertanyaan receh aku, dan selalu ramah banget. Aku masih penasaran banget sih sama skil billiard kakak, pengen banget bisa main bareng juga! Semangat terus ya Kak, sukses di setiap langkah ke depannya. Doa terbaik selalu buat Kak Muti 🤍✨" },
  { password: "7324", message: "Kak Yuan tuh definisi “sweet surprise”! Awalnya aku kira Kakak orangnya super calm, ternyata eh ternyata lucu atau agak kocak juga.  Makasih banyak ya Kak udah jadi bagian dari pengalaman akuu di AFL.  Semangat terus ya! 💛" },
  { password: "1776", message: "Dari awal udah kelihatan Kak Eve tuh punya aura yang adem dan kalem banget, tapi ternyata pas udah kenal lebih jauh, Kakak tuh thoughtful dan peduli banget sama sekitar. Terima kasih ya Kak udah nyempetin buat tetap kontribusi di final project walaupun Kakak lagi sibuk UAS. Semangat terus, dan sukses selalu di segala hal yang Kakak lakuin 🌷💫" },
  { password: "7768", message: "Semangat terus ya, Kak! Makasih banget udah jadi teman baru yang seru dan asik diajak ngobrol. Walaupun mungkin belum banyak ngobrol panjang, tapi seneng banget bisa kenal Kakak di perjalanan ini. Semoga sukses selalu ke depannya dan tetap jadi versi terbaik dari diri sendiri 🙌🏻" },
  { password: "1110", message: "YKak Pasha tuh orangnya kayanya santai tapi seru juga sihh walaupun belum sempet ngobrol langsung. Terima kasih yaa kak udah jadi bagian dari pengalaman aku di AFL , semoga kakak sukses selalu kedepannya 🔥" },
  { password: "1212", message: "Graphic designer terkeren di AFL! Terima kasih yaa kak udah jadi bagian dari pengalaman aku di AFL, semoga kita masih bisa terus berteman. Semangat terus ya, Kak, sukses selalu buat langkah-langkah ke depan! 🎨🔥" },
  { password: "9191", message: "Hii kak! walaupun aku jarang berinteraksi sama kak alex tapi aku mau ucapin terima kasih banyakk karena udah menjadi teammates yang baik. Semoga kakak kedepannya sukses selalu 🔥" }
];

let currentPocketIndex = 0;

function openPocket(index) {
  currentPocketIndex = index;
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("passwordInput").value = "";
  document.getElementById("messageOutput").innerText = "";
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const pocket = pockets[currentPocketIndex];
  const sound = document.getElementById("paperSound");

  if (input === pocket.password) {
    sound.play();
    setTimeout(() => {
      document.getElementById("messageOutput").innerText = pocket.message;
    }, 500); // Adjust this to match sound length
  } else {
    document.getElementById("messageOutput").innerText = "❌ Wrong password!";
  }
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
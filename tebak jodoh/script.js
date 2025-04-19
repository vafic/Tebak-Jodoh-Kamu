const namaPria = [
  "Raka", "Dimas", "Andi", "Iqbal", "Rizky", "Bayu", "Naufal", "Ilham", 
  "Reza", "Fajar", "Ilham", "Fahri", "Yoga", "Bima", "Bagus", "Roni", "Joko",
  "Abdullah", "Alfian", "Budi", "Cahyo", "Danang", "Dedy", "Eko", "Faisal",
  "Galih", "Hendra", "Indra", "Juli", "Krisna", "Luthfi", "Miko", "Nando",
  "Oki", "Pandu", "Qori", "Rian", "Samsul", "Taufik", "Umar", "Vino", "Wahyu",
  "Xander", "Yusuf", "Zaki", "Adit", "Bram", "Charlie", "Dian", "Evan", "Farhan",
  "Gilang", "Hadi", "Ihsan", "Jayson", "Khalid", "Lian", "Medi", "Nizar",
  "Omar", "Purnama", "Qais", "Rizal", "Steven", "Tri", "Usman", "Vicky", "Willy",
  "Xander", "Yanto", "Zain", "Amir", "Bilal", "Candra", "David", "Edwin", "Fahri",
  "Gusti", "Heru", "Irfan", "Joko", "Khalid", "Leo", "Musa", "Neno", "Opik",
  "Qodir", "Rafi", "Syarif", "Tegar", "Utama", "Vasco", "Wulan", "Xito", "Yori",
  "Zidan", "Arif", "Bima", "Candra", "Dede", "Eko", "Fahmi", "Guntur", "Herman",
  "Ismail", "Juma", "Kamal", "Lesti", "Miko", "Nata", "Omar", "Putra", "Rama",
  "Rifki", "Sahrul", "Tio", "Uki", "Vico", "Wawan", "Xio", "Yasir", "Zainal", "Raka", "Dimas", "Andi", "Iqbal", "Rizky", "Bayu", "Naufal", "Ilham", 
  "Reza", "Fajar", "Ilham", "Fahri", "Yoga", "Bima", "Bagus", "Roni", "Joko",
  "Abdullah", "Alfian", "Budi", "Cahyo", "Danang", "Dedy", "Eko", "Faisal",
  "Galih", "Hendra", "Indra", "Juli", "Krisna", "Luthfi", "Miko", "Nando",
  "Oki", "Pandu", "Qori", "Rian", "Samsul", "Taufik", "Umar", "Vino", "Wahyu",
  "Xander", "Yusuf", "Zaki", "Adit", "Bram", "Charlie", "Dian", "Evan", "Farhan",
  "Gilang", "Hadi", "Ihsan", "Jayson", "Khalid", "Lian", "Medi", "Nizar",
  "Omar", "Purnama", "Qais", "Rizal", "Steven", "Tri", "Usman", "Vicky", "Willy",
  "Xander", "Yanto", "Zain", "Amir", "Bilal", "Candra", "David", "Edwin", "Fahri",
  "Gusti", "Heru", "Irfan", "Joko", "Khalid", "Leo", "Musa", "Neno", "Opik",
  "Qodir", "Rafi", "Syarif", "Tegar", "Utama", "Vasco", "Wulan", "Xito", "Yori",
  "Zidan", "Arif", "Bima", "Candra", "Dede", "Eko", "Fahmi", "Guntur", "Herman",
  "Ismail", "Juma", "Kamal", "Lesti", "Miko", "Nata", "Omar", "Putra", "Rama",
  "Rifki", "Sahrul", "Tio", "Uki", "Vico", "Wawan", "Xio", "Yasir", "Zainal",
  "Ari", "Budi", "Ciko", "Dedi", "Edo", "Fadli", "Gilang", "Hadi", "Irvan",
  "Joni", "Khairul", "Lufian", "Mufid", "Naufal", "Omar", "Pitra", "Riyan", 
  "Sari", "Tio", "Umar", "Vicky", "Wira", "Xeno", "Yusuf", "Zidane"
 
];

const namaWanita = [
  "Salsa", "Putri", "Bella", "Dewi", "Ayu", "Rani", "Citra", "Ayu", 
  "Lia", "Sari", "Intan", "Dina", "Vina", "Tari", "Tari", "Aldila", "Mira",
  "Siti Aminah", "Kartini", "Nurul", "Maya", "Zahra", "Tika", "Indah", "Lina",
  "Yuliana", "Fina", "Nadia", "Amira", "Lina", "Vivi", "Putri Siti", "Cika", 
  "Gita", "Ika", "Asha", "Farah", "Ratna", "Wulan", "Siti", "Hani", "Nina", 
  "Diana", "Selvi", "Melisa", "Tina", "Dela", "Vera", "Weni", "Vivi", "Jasmine",
  "Arum", "Sinta", "Nita", "Tari", "Marisa", "Sita", "Titi", "Fanny", "Dewi",
  "Nina", "Eka", "Yanti", "Ayuni", "Kiran", "Desi", "Dewi", "Nita", "Sari",
  "Erlina", "Maya", "Dina", "Vita", "Alma", "Rika", "Fina", "Aisyah", "Alika",
  "Felia", "Lina", "Sarah", "Widya", "Mila", "Riana", "Dinda", "Sari", "Merry",
  "Erika", "Maya", "Angelina", "Lina", "Putri", "Kartika", "Anisa", "Sela",
  "Zara", "Putri", "Elis", "Erna", "Hana", "Wulan", "Ika", "Vera", "Lina",
  "Citra", "Tina", "Irene", "Fara", "Indri", "Hani", "Friska", "Widyawati", "Cici",
  "Siti", "Aulia", "Putri Ayu", "Rizka", "Chika", "Sally", "Nadya", "Rina", 
  "Yulia", "Aisah", "Anastasia", "Bunga", "Desi", "Siska", "Maya", "Tati", "Bela",
  "Novita", "Rani", "Krisna", "Daniella", "Monica", "Sena", "Mira", "Ratih", "Laili", "Salsa", "Putri", "Bella", "Dewi", "Ayu", "Rani", "Citra", "Ayu", 
  "Lia", "Sari", "Intan", "Dina", "Vina", "Tari", "Tari", "Aldila", "Mira",
  "Siti Aminah", "Kartini", "Nurul", "Maya", "Zahra", "Tika", "Indah", "Lina",
  "Yuliana", "Fina", "Nadia", "Amira", "Lina", "Vivi", "Putri Siti", "Cika", 
  "Gita", "Ika", "Asha", "Farah", "Ratna", "Wulan", "Siti", "Hani", "Nina", 
  "Diana", "Selvi", "Melisa", "Tina", "Dela", "Vera", "Weni", "Vivi", "Jasmine",
  "Arum", "Sinta", "Nita", "Tari", "Marisa", "Sita", "Titi", "Fanny", "Dewi",
  "Nina", "Eka", "Yanti", "Ayuni", "Kiran", "Desi", "Dewi", "Nita", "Sari",
  "Erlina", "Maya", "Dina", "Vita", "Alma", "Rika", "Fina", "Aisyah", "Alika",
  "Felia", "Lina", "Sarah", "Widya", "Mila", "Riana", "Dinda", "Sari", "Merry",
  "Erika", "Maya", "Angelina", "Lina", "Putri", "Kartika", "Anisa", "Sela",
  "Zara", "Putri", "Elis", "Erna", "Hana", "Wulan", "Ika", "Vera", "Lina",
  "Citra", "Tina", "Irene", "Fara", "Indri", "Hani", "Friska", "Widyawati", "Cici",
  "Siti", "Aulia", "Putri Ayu", "Rizka", "Chika", "Sally", "Nadya", "Rina", 
  "Yulia", "Aisah", "Anastasia", "Bunga", "Desi", "Siska", "Maya", "Tati", "Bela",
  "Novita", "Rani", "Krisna", "Daniella", "Monica", "Sena", "Mira", "Ratih", "Laili"
  
];

function tebakJodoh() {
    const tanggal = parseInt(document.getElementById('tanggal').value);
    const bulan = parseInt(document.getElementById('bulan').value);
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const hasil = document.getElementById('hasil');

    if (!tanggal || !bulan || tanggal > 31 || bulan > 12) {
        hasil.innerText = "Masukkan tanggal dan bulan yang valid!";
        return;
    }

    let namaJodoh;

    if (jenisKelamin === "pria") {
        namaJodoh = namaPria;
    } else {
        namaJodoh = namaWanita;
    }

    const index = (tanggal * bulan) % namaJodoh.length;
    hasil.innerText = "Nama jodoh kamu adalah: " + namaJodoh[index];
}

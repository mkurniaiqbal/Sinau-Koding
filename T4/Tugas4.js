var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (var angkot = 1; angkot <= jumlahAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log("Angkot No. " + angkot + " Beroperasi dengan baik.");
    }
    else if (angkot <= jumlahAngkot && angkot != 8) {
        console.log("Angkot No. " + angkot + " Sedang Tidak Beroperasi.");
    }
    else {
        console.log("Angkot No. " + angkot + " Sedang Lembur.");
    }

}
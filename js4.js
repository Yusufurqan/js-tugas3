// function murid(){
//     var nama = ["Joko","Widodo","Makruf","Amin"]
//     console.log(nama);
//     nama.push(2);
//     return nama;
// }
// console.log(murid())

// function murid(){
//     var nama = ["Joko","Widodo","Makruf","Amin"]
//     console.log(nama);
//     nama.splice(2,1,"Edutech");
//     return nama;
// }
// console.log(murid())

// function murid(){
//     var nama = ["Joko","Widodo","Makruf","Amin"]
//     console.log(nama);
//     nama.unshift("Rocky","Gerung");
//     return nama;
// }
// console.log(murid())
var b = 30
function data(b) {
    var a = []
    for (i = 1; i <= b; i++) {
        if (i % 3 == 0) {
            a[i-1]="edu ";
        }
        else if (i % 5 == 0) {
            a[i-1]="tech ";
        }
        else {
            a[i-1]=i;
        }
    }
    return a;
}
console.log(data(10));
console.log(data(20));
console.log(data(30));

var dataPenduduk = [
    [1,"Rian",1210912034],
    [2,"Ari", 1210912035],
    [3,"Ujang",1210912036],
]

function tampil(){
    for (i=0; i<=2; i++){
        console.log("id: "+ dataPenduduk[i][0]);
        console.log("Name: "+ dataPenduduk[i][1]);
        console.log("NIM: "+ dataPenduduk[i][2]);
    }
}

tampil()
// console.log(dataPenduduk[0][1])
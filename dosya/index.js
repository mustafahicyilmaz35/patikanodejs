const fs = require("fs");

//DOSYA OLUŞTURMA
// fs.writeFile("employee.json",'{"name":"Employee 1 Name", "salary":2000}',(err) => {
//     if(err){
//         console.log("Dosya oluşturma işlemi başarısız");
//     }
//     console.log("json dosyası oluşturuldu");
// })

//DOSYADAN VERİ OKUMA
// fs.readFile("employee.json", "utf-8",(err, data) => {
//     if(err){
//         console.log("Dosyadan veri okuma işlemi başarısız");
//     }
//     console.log(data)
// })

//DOSYADAN VERİ GÜNCELLEME
// fs.appendFile("employee.json",'\n{"name":"Employee 2 Name", "salary":2000}',(err) => {
//     if(err){
//         console.log("Dosya güncelleme işlemi başarısız");
//     }
//     console.log("json dosyası güncellendi");
// })


//DOSYAYI SİLME
fs.unlink("employee.json", (err) => {
    if(err){
        console.log("Silme işlemi başarısız.");
    }
    console.log("Silme işlemi başarılı.")
})
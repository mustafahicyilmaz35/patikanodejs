const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  
    if ("/" == ctx.path) {
      ctx.body = "<h1>Index Sayfasına Hoşgeldiniz.</h1>";
    }  

   else if ("/about" == ctx.path) {
     ctx.body = "<h1>Hakkında Sayfasına Hoşgeldiniz.</h1>";
   } 
   
   else if ("/contact" == ctx.path) {
     ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz.</h1>";
   } 
   else{
       
       ctx.body = "<h1>404 Sayfa bulunamadı</h1>"
   }

});



const port = 3000;
app.listen(port, () =>{
    console.log(`Hizmet ${port} portunda başladı`);
});

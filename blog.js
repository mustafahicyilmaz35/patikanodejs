const posts =[
    {baslik : "post 1", icerik:"Post 1 içerik"},
    {baslik : "post 2", icerik:"Post 2 içerik"},
    {baslik : "post 3", icerik:"Post 3 içerik"}
]


function PostSirala(control){
    return new Promise((resolve, reject) =>{
       if(control){
            resolve(
              "Sıralama İşlemi Başarılı.",
              posts.map((post) => {
                
                console.log(post.baslik + " " + post.icerik);
              })
            );
       } else {
           reject("Sıralama işlemi başarısız.");
       }
    });
}

//Sıralama işlemi.
PostSirala(true)
    .then((value) => console.log(value))
    .catch((err) => console.log(err));

console.log();
console.log();

async function YeniPost(post){
    try{
        posts.push(post);
        await PostSirala(posts);
    } catch(err){
        console.log(err);
    }
}

YeniPost({baslik:"post 4", icerik : "Post 4 içerik"});
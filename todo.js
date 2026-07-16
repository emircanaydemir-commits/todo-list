//aydınlık karanlık modu
const body=document.body;
const modbuton=document.getElementById("modbutton");
modbuton.addEventListener("click",function(){
    if(body.getAttribute('data-mod')=='dark'){
        body.removeAttribute('data-mod');
        modbuton.textContent="🌙";
    }
    else{
        body.setAttribute('data-mod','dark');
        modbuton.textContent="☀️";
    }
});
//ekle butonuna tıkladığımda gerçekleşecek olaylar
const ekle=document.getElementById("ekle");
const liste=document.getElementById("liste");
const giris=document.getElementById("giris");
ekle.addEventListener("click",function(){
    let metin=giris.value;
    console.log(metin);
    if(metin.trim()==""){
        giris.value="";
        return;
    }
    else{
        //yeni elementleri oluştur ve ekle
        metin=metin.trim();
        let yenitodo=document.createElement("li");
        yenitodo.textContent=metin;
        yenitodo.classList.add("eklenecek-todo");
        let todosil=document.createElement("button");
        todosil.textContent="🗑️";
        todosil.classList.add("silme-button");
        yenitodo.appendChild(todosil);
        liste.appendChild(yenitodo);
        giris.value="";
        todosil.addEventListener("click",function(){
            yenitodo.remove();
        })
        yenitodo.addEventListener("click",function(){
            yenitodo.classList.add("tamamlandi");
        })

    }
    
});
//enter desteği
giris.addEventListener("keypress",function(olay){
    if(olay.key=="Enter"){
        ekle.click();
    }
})

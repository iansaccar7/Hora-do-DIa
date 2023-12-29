function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('dia')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
        
    if(hora >= 5 && hora <= 12){
        img.src = 'manhã.jpg'
        //bom dia
        } else if (hora >= 12 && hora < 18){
            img.src = 'tarde.jpg'
            // boa tarde
        }else{
            img.src = 'noite.jpg'
            //boa noite
        }
        
}




 
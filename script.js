function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var saudacao = window.document.getElementById('saudacao')
msg.innerHTML =  `Agora são ${hora} horas`
if (hora > 0 && hora <12){
    //Bom dia
    saudacao.innerHTML = 'Bom dia'
    img.src = 'img/imgdia.jpg'
    document.body.style.background = '#e2cd9f'
}
else if(hora >=12 && hora < 18){
    //Boa tarde
    saudacao.innerHTML = 'Boa tarde'
    img.src = 'img/imgtarde.jpg'
    document.body.style.background = '#b9846f'
}
else{
    //Boa noite
     saudacao.innerHTML = 'Boa noite'
    img.src = 'img/imgnoite.jpg'
    document.body.style.background = '#515154'
}
}
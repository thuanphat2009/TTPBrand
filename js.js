
var liked = document.querySelectorAll('.home-product-item__like--liked')

liked.forEach((like,index) => {
    like.onclick = function(){
        this.classList.toggle('home-product-item__like--liked')
    }
}) 
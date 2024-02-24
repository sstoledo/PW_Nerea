document.addEventListener('DOMContentLoaded', function () {
    // Fetch your data
    fetch('recomends.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.swiper-container-products');
            const swiperWrapper = document.querySelector('.swiper-slide-products');

            swiperWrapper.style.display = 'none';



            data.forEach(reco => {

                //clonar template
                const card = swiperWrapper.cloneNode(true);

                //modificar datos
                card.querySelector('.tittle-products').textContent = reco.titulo;
                card.querySelector('.subtittle-products').textContent = `Cera: ${reco.subtitulo}`;
                card.querySelector('.overview').textContent = `Esencia: ${reco.descripcion}`;
                card.querySelector('.img img').src = reco.imagen;

                //quitamos el display none
                card.style.display = 'flex';

                //añadir al DOM
                container.appendChild(card);

            });

        });
});


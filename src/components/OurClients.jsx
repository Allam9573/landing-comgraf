import client1 from '../assets/img/clients/client-1.png'
import client2 from '../assets/img/clients/client-2.png'
import client3 from '../assets/img/clients/client-3.png'
import client4 from '../assets/img/clients/client-4.png'
import client5 from '../assets/img/clients/client-5.png'
import client6 from '../assets/img/clients/client-6.png'
import client7 from '../assets/img/clients/client-7.png'
import client8 from '../assets/img/clients/client-8.png'

const OurClients = () => {
    return (
        <>
            <section id="clients" class="clients">
                <div class="container" data-aos="zoom-in">

                    <header class="section-header">
                        <h3>Our Clients</h3>
                    </header>

                    <div class="clients-slider swiper">
                        <div class="swiper-wrapper align-items-center">
                            <div class="swiper-slide"><img src={client1} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client2} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client3} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client4} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client5} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client6} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client7} class="img-fluid" alt=""/></div>
                            <div class="swiper-slide"><img src={client8} class="img-fluid" alt=""/></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export { OurClients }
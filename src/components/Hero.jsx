import imagen from '../assets/img/intro-img.svg'  

const Hero = () => {
    return (
        <>
            <section id="hero" class="clearfix">
                <div class="container d-flex h-100">
                    <div class="row justify-content-center align-self-center" data-aos="fade-up">
                        <div class="col-lg-6 intro-info order-lg-first order-last" data-aos="zoom-in" data-aos-delay="100">
                            <h2>Impresion de calidad para tu marca<br />Tu exito, nuestra impresion. <span>Business!</span></h2>
                            <div>
                                <a href="#about" class="btn-get-started scrollto">Conocenos</a>
                            </div>
                        </div>

                        <div class="col-lg-6 intro-img order-lg-last order-first" data-aos="zoom-out" data-aos-delay="200">
                            <img src={imagen} alt="" class="img-fluid" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export { Hero }
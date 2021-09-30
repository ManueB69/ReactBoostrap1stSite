const Home = ()=> (
    <section>
        <div className="container-fluid">
          <div className="row">
            <h3>Home</h3>
          </div>
          
          <div className="row">
            <div className="col-12 col-md-6">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={require('../../assets/IMG_1.jpg').default} class="d-block w-100" alt="photo Cancun" />
                    <div class="carousel-caption d-none d-sm-block">
                      <h5>Cancun</h5>
                      <p>Notre première plage caribéenne.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={require('../../assets/IMG_2.jpg').default} class="d-block w-100" alt="photo plage" />
                    <div class="carousel-caption d-none d-sm-block">
                      <h5>Lever de soleil au sud de Cancun</h5>
                      <p>Les oiseaux marins forment un ballet de pêche</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={require('../../assets/IMG_3.jpg').default} class="d-block w-100" alt="photo plage" /> 
                    <div class="carousel-caption d-none d-sm-block">
                      <h5>Cozumel</h5>
                      <p>Magnifique... mais infesté de moustiques dès le soleil couché !!</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Précédent</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Suivant</span>
                </button>
              </div>
            </div>
            
            <div className="col-12 col-md-6">
              <p>Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.</p>  
            </div>
            
          </div>
        </div>
      </section>
)

export default Home
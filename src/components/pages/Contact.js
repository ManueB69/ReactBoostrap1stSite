const Contact = ()=> (
    <section>
        <div className="container-fluid">
          <div className="row">
            <h3>Pour venir chez nous</h3>          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238194.00038497787!2d-86.98931939848156!3d21.121285335820236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e8280511ccd4d%3A0xe4ab520c257a81e4!2sPlaya%20Delfines!5e0!3m2!1sfr!2sfr!4v1633005804407!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
          </div>
          
          <div className="row">
            <h3>Contactez nous</h3>
          </div>
          
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Name</label>
              <input type="text" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>

            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
          
        </div>
      </section>
)

export default Contact
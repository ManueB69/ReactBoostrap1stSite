import { useEffect, useState } from "react";

const Gallery = ()=> {
  
  // je déclare une variable gallery qui se remplit via la fonction setGallery, et je l'initialise comme étant un tableau vide
  const [gallery, setGallery] = useState([])
  const [page, setPage] = useState(1);
  
  const loadGallery = (page)=> {
    fetch("https://picsum.photos/v2/list?page="+page+"&limit=6")
    .then(response => response.json() )
    .then(data => {
      setGallery(data);
    })
  }
  
  const nextpage = (page) => {
    setPage(page);
  }
  
  useEffect( ()=>{
    loadGallery(page);
  }, [page])
  
  const ListImages = ()=> (
    <div className="row">
    {gallery.map( (img) => {
      const url="https://picsum.photos/id/" + img.id + "/600/400/";
      return (
      // syst requiert que les enfants d'1 liste aient une key unique
        <div key={ img.id } className="col-12 col-md-4 mb-3">
          <a href={img.url} target="_blank">
            <img src={ url } className="img-fluid" alt={ "from" + img.author } />
            </a>
            <h4 className="text-center">From { img.author } </h4>
        </div>
      )
    })
    }
    </div>)
  
  const Pagination = ()=> (
    <div className="row">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={page === 1 ? "page-item disabled" : "page-item"}>
            <a className="page-link" onClick={()=> page>1 ? nextpage(page-1) : null} href="#" >Précédent</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">{page}</a></li>
          <li className="page-item"><a className="page-link" onClick={()=>nextpage(page+1)}href="#">{page+1}</a></li>
          <li className="page-item"><a className="page-link" onClick={()=>nextpage(page+2)}href="#">{page+2}</a></li>
          <li className="page-item">
            <a className="page-link" onClick={()=>nextpage(page+1)} href="#">Suivant</a>
          </li>
        </ul>
      </nav>
    </div>
  )
  
  return (
    <section>
        <div className="container-fluid">
          <div className="row">
            <h3>Gallery</h3>
          </div>
          
          <div className="row">
            <p>Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt.</p>
          </div>    
          <Pagination />
          <ListImages /> 
          <Pagination />
        </div>
      </section>
  )
}

export default Gallery
import { useEffect, useState } from "react";

const Gallery = ()=> {
  
  // je déclare une variable gallery qui se remplit via la fonction setGallery, et je l'initialise comme étant un tableau vide
  const [gallery, setGallery] = useState([])
  
  const loadGallery = ()=> {
    fetch("https://picsum.photos/v2/list?page=2&limit=6")
    .then(response => response.json() )
    .then(data => {
      console.log(data);
      setGallery(data);
    })
  }
  
  useEffect( ()=>{
    loadGallery();
  }, [])
  
  const ListImages = ()=> (
    <div className="row">
    {gallery.map( (img) => {
      const url="https://picsum.photos/id/" + img.id + "/600/400/";
      return (
      // syst requiert que les enfants d'1 liste aient une key unique
        <div key={ img.id } className="col-12 col-md-4 mb-3">
          <img src={ url } className="img-fluid" alt={ "from" + img.author } />
          <h4 className="text-center">From { img.author } </h4>
        </div>
      )
    })
    }
    </div>)
  
  return (
    <section>
        <div className="container-fluid">
          <div className="row">
            <h3>Gallery</h3>
          </div>
          
          <div className="row">
            <p>Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt.</p>
          </div>    
          
          <ListImages /> 
        </div>
      </section>
  )
}

export default Gallery
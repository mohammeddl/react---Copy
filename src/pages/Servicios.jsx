import "../components/styles/Servicios.css";
import Diseño from "../assets/img/servicios/img1.jpeg";
import Publicidad from "../assets/img/servicios/img2.jpg";
import Marketing from "../assets/img/servicios/img3.jpg";
import google from "../assets/img/servicios/img4.jpg";
import servicio1 from "../assets/img/servicios/img5.jpg";
import servicio2 from "../assets/img/servicios/img6.jpeg";
export default function Servicios() {
  const data = [
    {
      id: 1,
      nombre: "Diseño Web",
      precio: 500,
      imagen: Diseño,
      descripcion: "Diseño de páginas web para tu negocio.",
    },
    {
      id: 2,
      nombre: "Publicidad",
      precio: 300,
      imagen: Publicidad,
      descripcion: "Publicidad para tu negocio.",
    },
    {
      id: 3,
      nombre: "Marketing",
      precio: 200,
      imagen: Marketing,
      descripcion: "Marketing para tu negocio.",
    },
    {
      id: 4,
      nombre: "googel Web",
      precio: 500,
      imagen: google,
      descripcion: "Diseño de páginas web para tu negocio.",
    },
    {
      id: 5,
      nombre: "Publicidad",
      precio: 300,
      imagen: servicio1,
      descripcion: "Publicidad para tu negocio.",
    },{
      id: 6,
      nombre: "Marketing",
      precio: 200,
      imagen: servicio2,
      descripcion: "Marketing para tu negocio.",
    },{
      id: 7,
      nombre: "Diseño Web",
      precio: 500,
      imagen: "https://via.placeholder.com/150",
      descripcion: "Diseño de páginas web para tu negocio.",
    },{
      id: 8,
      nombre: "Publicidad",
      precio: 300,
      imagen: "https://via.placeholder.com/150",
      descripcion: "Publicidad para tu negocio.",
    },{
      id: 9,
      nombre: "Marketing",
      precio: 200,
      imagen: "https://via.placeholder.com/150",
      descripcion: "Marketing para tu negocio.",
    }
  ];

  return (
    <>
      <main className='main'>
        <section className='slice triangle'>
          <h1>Contrata un Servicio y Aumenta tu Venta por Internet</h1>
        </section>
        <div className='container'>
          <div className='row'>
            {data.map((servicio) => (
              <div key={servicio.id} className='card'>
                <img src={servicio.imagen} alt={servicio.nombre} />
                <div className='info-card'>
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                  <h4 className='precio'>${servicio.precio}</h4>
                  <button className='button button-primary'>Contratar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

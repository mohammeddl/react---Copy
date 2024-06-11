import { useState } from 'react';
import "./styles/Header.css";

const Nav = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <nav className="bg-primary sticky top-0 w-full z-1000 h-20">
      <section className="flex justify-between items-center text-primary px-20">
        <div className="ml-20">
          <a href="../home.html">
            <img className="w-50 h-14 cursor-pointer transition-transform duration-200 hover:scale-105" src="../assets/img/logo/logo.png" alt="logo" />
          </a>
        </div>
        <div className="hidden md:block">
          <img className="w-7 h-10 cursor-pointer" src="../assets/icons/header/menu.svg" alt="menu lateral" />
        </div>

        <div className="flex items-center gap-5">
          <button className="hidden md:block" onClick={toggleForm}>X</button>

          <div className="relative">
            <a href="../home.html" className="text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent">
              <p>Inicio</p>
            </a>
          </div>

          <div className="border-l border-neutral-light h-4"></div>

          <div className="relative">
            <a href="../categorias/servicios.html" className="text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent">
              <div className="relative">
                <img className="w-5 h-5" src="../assets/icons/header/servicio.png" alt="Servicios" />
                Servicios
                <div className="absolute hidden bg-accent min-w-70 text-xs z-1">
                  <a href="#" className="block p-3 text-neutral-light hover:bg-primary">Inicio</a>
                  <a href="#" className="block p-3 text-neutral-light hover:bg-primary">Diseño</a>
                  <a href="#" className="block p-3 text-neutral-light hover:bg-primary">Publicidad</a>
                  <a href="#" className="block p-3 text-neutral-light hover:bg-primary">Marketing</a>
                </div>
              </div>
            </a>
          </div>

          <div className="border-l border-neutral-light h-4"></div>

          <div className="relative">
            <a href="#" className="text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent" onClick={toggleForm}>
              <img className="w-5 h-5" src="../assets/icons/header/presupuesto.png" alt="presupuesto" />
              <p>Pedir Presupuesto</p>
            </a>
          </div>

          <div className="border-l border-neutral-light h-4"></div>

          <div className="relative">
            <a href="../login/loginyregistro.html" className="text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent">
              <img className="w-5 h-5" src="../assets/icons/header/usuario.png" alt="identificate" />
              <p>Identifícate</p>
            </a>
          </div>

          <div className="border-l border-neutral-light h-4"></div>

          <div className="relative">
            <a href="../categorias/servicios.html" className="text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent">
              <img className="w-5 h-5" src="../assets/icons/header/carro.png" alt="compra" />
            </a>
          </div>

          <div className="border-l border-neutral-light h-4"></div>

          <div className="relative">
            <a href="tel:+34631558660" className="text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent">
              <img className="w-5 h-5" src="../assets/icons/header/telefono.png" alt="contacto" />
              <p>631558660</p>
            </a>
          </div>
        </div>
      </section>

      {isFormOpen && <Form toggleForm={toggleForm} />}
    </nav>
  );
};

const Form = ({ toggleForm }) => {
  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-light z-10000 w-3/4 max-w-lg p-5 rounded-lg shadow-lg">
      <article className="flex flex-col gap-2">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">Pedir Presupuesto y te contestamos en el momento</h2>
        </div>

        <form id="cta-form" className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label htmlFor="cta_name" className="text-lg font-bold text-primary">Nombre<span className="text-red-500">*</span></label>
            <input id="cta_name" className="bg-primary text-neutral-light p-2 rounded-lg" type="text" name="cta-name" required placeholder="Introduce tu nombre..." />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cta_email" className="text-lg font-bold text-primary">Email<span className="text-red-500">*</span></label>
            <input id="cta_email" className="bg-primary text-neutral-light p-2 rounded-lg" type="email" name="cta-email" required placeholder="Introduce tu email..." />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cta_telefono" className="text-lg font-bold text-primary">Telefono<span className="text-red-500">*</span></label>
            <input id="cta_telefono" className="bg-primary text-neutral-light p-2 rounded-lg" type="number" name="cta-telf" required placeholder="Introduce tu telefono..." />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cta-subscription" className="text-lg font-bold text-primary">Para que Tipo de consulta<span className="text-red-500">*</span></label>
            <select id="cta-subscription" className="bg-primary text-neutral-light p-2 rounded-lg" name="cta-subscription--type" required>
              <option value="" disabled selected>Selecciona una categoria</option>
              <option value="abogados">Abogados</option>
              <option value="gestorias">Gestorias</option>
              <option value="asesores">Asesores</option>
            </select>
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="cta-mensaje" className="text-lg font-bold text-primary">Mensaje<span className="text-red-500">*</span></label>
            <textarea id="cta-mensaje" className="bg-primary text-neutral-light p-2 rounded-lg h-20" name="cta-mensaje" required placeholder="Pedir un presupuesto para una página web es el inicio de todo negocio online"></textarea>
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <input className="bg-accent text-neutral-light p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105" type="submit" value="Enviar" />
            <input className="bg-primary text-neutral-light p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105" type="reset" value="Cancelar" onClick={toggleForm} />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Nav;

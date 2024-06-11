import { useState, useEffect } from 'react';
import '../components/styles/Login.css';

export default function Login() {
  const [formVisible, setFormVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    setOverlayVisible(false);
    setFormVisible(false);
  }, []);

  const toggleForm = () => {
    setFormVisible(!formVisible);
    setOverlayVisible(!overlayVisible);
  };

  // JSX
  return (
    <div>
      <main className='main'>
        <div className='contenedor'>
          <section className='slice triangle'>
            <div className='container'>
              <h2>Regístrate o Inicia sesión</h2>
            </div>
          </section>

          <section className='usuario'>
            <div className='contenedor_opciones-usuario'>
              <div className='texto_opciones-usuario'>
                <div className='opciones_no_registrado'>
                  <h2 className='titulo_no_registrado'>
                    ¿No tienes una cuenta? Regístrate
                  </h2>
                  <p id='p-registro' className='texto_no_registrado'>
                    Regístrate para ver nuestras Ofertas.
                  </p>
                  <button
                    className='registro_no_registrado'
                    id='boton_registro'
                    name='registro'
                    onClick={toggleForm}>
                    Regístrate
                  </button>
                </div>

                <div className='opciones_registrado'>
                  <h2 className='titulo_registrado'>¿Tienes una cuenta?</h2>
                  <p className='texto_registrado'>
                    Inicia tu sesión y empieza a contratar tu servicio.
                  </p>
                  <button
                    className='inicio_sesion_registrado'
                    id='boton_inicio_sesion'
                    name='iniciar'
                    onClick={toggleForm}>
                    Iniciar sesión
                  </button>
                </div>
              </div>

              <div
                className={`formularios_opciones-usuario ${formVisible ? 'Left' : 'Right'}`}
                id='formularios_opciones-usuario'>
                <div className='formulario_inicio_sesion'>
                  <h2 className='titulo_formulario'>Iniciar sesión</h2>
                  <form className='formulario_form'>
                    <fieldset className='fieldset_formulario'>
                      <div className='campo_formulario'>
                        <input
                          name='email'
                          id='correo_electronico1'
                          type='email'
                          placeholder='Correo electrónico'
                          className='entrada_campo_formulario'
                        />
                      </div>
                      <span id='correoError'></span>
                      <div className='campo_formulario'>
                        <input
                          name='password'
                          id='contraseña1'
                          type='password'
                          placeholder='Contraseña'
                          className='entrada_campo_formulario'
                        />
                      </div>
                      <span id='contraseñaError'></span>
                    </fieldset>
                    <div className='botones_formulario'>
                      <button type='button' className='boton_olvido'>
                        ¿Olvidaste la contraseña?
                      </button>
                      <button
                        type='submit'
                        id='submitLogin'
                        className='accion_botones_formulario'>
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>

                <div className='formulario_registro'>
                  <h2 className='titulo_formulario'>Regístrate</h2>
                  <form className='formulario_form'>
                    <fieldset className='fieldset_formulario'>
                      <div className='campo_formulario'>
                        <input
                          type='text'
                          id='nombre_completo'
                          name='nombre_completo'
                          placeholder='Nombre completo'
                          className='entrada_campo_formulario'
                          required
                        />
                      </div>
                      <div className='campo_formulario'>
                        <input
                          type='email'
                          id='correo_electronico'
                          name='correo_electronico'
                          placeholder='Correo electrónico'
                          className='entrada_campo_formulario'
                          required
                        />
                      </div>
                      <div className='campo_formulario'>
                        <input
                          type='password'
                          id='contraseña'
                          name='contraseña'
                          placeholder='Contraseña'
                          className='entrada_campo_formulario'
                          required
                        />
                      </div>
                      <div className='campo_formulario'>
                        <input
                          type='password'
                          id='contraseña_confirmation'
                          name='contraseña_confirmation'
                          placeholder='Confirmar contraseña'
                          className='entrada_campo_formulario'
                          required
                        />
                      </div>
                      <span id='errorPassword'></span>
                    </fieldset>
                    <div className='botones_formulario'>
                      <input
                        type='submit'
                        id='submitRegistro'
                        value='Regístrate'
                        className='accion_botones_formulario'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Overlay for form */}
      <div
        className={`cta-blur-overlay ${overlayVisible ? '' : 'hidden'}`}
        onClick={toggleForm}
      ></div>
    </div>
  );
}

import "./footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Columna Datos Almacen para Mascotas */}
                    <div className="col-details">
                        <h4 className="list-title">Almacén para Mascotas</h4>
                        <ul className="list-unstyled">
                            <li>
                                <i class="fa-solid fa-phone">&nbsp;&nbsp;</i>TEL: 12345678
                            </li>
                            <li>
                                <i class="fa-solid fa-location-dot">
                                    &nbsp;&nbsp;
                                </i>
                                DIRECCION: San Martin
                            </li>
                            <li>
                                <i class="fa-solid fa-clock">&nbsp;&nbsp;</i>
                                Lunes a Viernes: 9 AM- 6 PM
                            </li>
                        </ul>
                    </div>
                    {/* Columna Productos */}
                    <div className="col">
                        <h4 className="list-title">
                            <a href="/productos">
                                <i class="fa-solid fa-bag-shopping"></i>
                                &nbsp;&nbsp;Productos
                            </a>
                        </h4>
                        <hr className="hr-footer" noshade="noshade" />
                        <ul className="list-unstyled">
                            <li>
                                <a href="/productos-perros">Perros</a>
                            </li>
                            <li>
                                <a href="/productos-gatos">Gatos</a>
                            </li>
                            <li>
                                <a href="/indumentaria">Indumentaria</a>
                            </li>
                            <li>
                                <a href="/accesorios">Accesorios</a>
                            </li>
                        </ul>
                    </div>
                    {/* Columna Servicios */}
                    <div className="col">
                        <h4 className="list-title">
                            <a href="/servicios">
                                <i class="fa-solid fa-paw"></i>
                                &nbsp;&nbsp;Servicios
                            </a>
                        </h4>
                        <hr className="hr-footer" noshade="noshade" />
                        <ul className="list-unstyled">
                            <li>
                                <a href="/servicios">Solicitar turnos</a>
                            </li>
                        </ul>
                    </div>
                    {/* Columna Contacto */}
                    <div className="col">
                        <h4 className="list-title">
                            <a href="/contacto">
                                <i class="fa-regular fa-comment"></i>
                                &nbsp;&nbsp;Contacto
                            </a>
                        </h4>
                        <hr className="hr-footer" noshade="noshade" />
                        <ul className="list-unstyled">
                            <li>
                                <a href="/contacto">Quienes somos</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                &nbsp;&nbsp;
                                <a href="#">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="info-footer">
                      <div className="pagos">
                          <img
                              className="img-pagos"
                              src="https://patchspetsupplies.co.uk/wp-content/themes/patches2021/images/paypal-credit-card-logos-png-40ph.png"
                              alt="Pagos seguros con PayPal | Mastercard | VISA | Amercian Express - Logo lockup"
                          />
                      </div>
                      <div className="copyright-footer">
                          <p>Almacén para Mascotas ©2023</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

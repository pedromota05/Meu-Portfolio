export const Body =() => {
  var perfil=require('./img/about.jpg');
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,400italic"></link>
          
          <section className="py-5">
            <div className="container py-5" style={{marginTop: '50px'}}>
              <div className="row">
                <div className="col-lg-10">
                  <h1 style={{fontWeight: 'bold', fontSize: '2.8rem'}}>HELLO, WORLD.<br/>Sou <span style={{color: '#1488D4'}}>Pedro Mota</span>, tenho experiência em Front-end Designer +<span style={{color: '#1488D4'}}> Developer</span>, que mora em Dourados-MS/Brasil</h1>
                </div>
              </div>
            </div>
          </section> 
        
          <section id="about">
            <div className="container">
              <h2 className="text-md lined" style={{fontWeight: 'bold'}}>About me</h2>
              <div className="row">
                <div className="col-lg-6">
                  <p className="mb-4">Eu sou um programador, com experiência maior em front-end e um conhecimento relevante em back-end. Para o front-end, geralmente trabalho com <strong>Javascript, independente ou incluindo frameworks populares como ReactJS e NextJS</strong>. Eu também deixo o front-end bonito usando o <strong>framework Bootstrap</strong>, mas também utilizando os meus conhecimentos de CSS puro.
                  Para o back-end também trabalho com Javascript <strong>(NodeJS, Express, MySQL, MongoDB)</strong>.
                  </p>
                  <img src={perfil} alt="Minha foto" className="img-fluid rounded-circle" style={{marginTop: '60px'}}></img>
                </div>
                <div className="col-lg-6">
                  <p className="mb-4 personal">
                    <strong>• HABILIDADES PESSOAIS</strong><br/>
                    Não tenho dificuldades para o trabalho em equipe;<br/>
                    Tenho facilidade em aprender o que me for designado;<br/>
                    Tenho habilidades em Hardware;</p>
                  <p className="mb-4">
                    <strong className="profiss">• HABILIDADES PROFISSIONAIS</strong><br/>
                    Estágio Supervisionado no Centro de Recondicionamento de Computadores Dourados<br/>
                    Instituição: Instituto Federal de Mato Grosso do Sul – Campus Dourados – IFMS<br/>
                    C.H: 120 horas<br/>
                    Período: de março a agosto de 2022
                  </p>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>HTML Coding</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}} className="progress-bar progress-primary-4"></div>
                    </div>
                  </div>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>CSS</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}} className="progress-bar progress-primary-1"></div>
                    </div>
                  </div>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>Javascript</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}} className="progress-bar progress-primary-2"></div>
                    </div>
                  </div>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>Bootstrap</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}} className="progress-bar progress-primary-3"></div>
                    </div>
                  </div>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>React.JS and Next.JS</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}} className="progress-bar progress-primary-3"></div>
                    </div>
                  </div>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>MySQL</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}} className="progress-bar progress-primary-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5 border-top border-bottom bg-light" style={{marginTop: '30px'}}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 1" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 2" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 3" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 4" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 5" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
              </div>
            </div>
          </section>

          <section className="py-4" id="contato">
            <div className="container py-4">
              <h2 className="text-md lined mb-5" style={{fontWeight: 'bold'}}>Contact</h2>
              <div className="row">
                <div className="col-lg-6">
                  <div className="col-lg-12" style={{marginBottom: '20px'}}>
                    <div className="info">
                      <div className="address"> 
                        <i className="fas fa-map-marker-alt"></i>
                        <h4>
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontWeight: 'bold'}}>Localização:</font></font>
                        </h4>
                        <p>
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Rua Eulália Pires, Nº 245 - Vila Cachoeirinha/MS</font></font>
                        </p>
                      </div>
                      <div className="email"> 
                        <i className="far fa-envelope"></i>
                        <h4>
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontWeight: 'bold'}}>E-mail:</font></font>
                        </h4>
                        <p>
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>pedro.hmota.goncalves@gmail.com</font></font>
                        </p>
                      </div>
                      <div className="phone"> 
                        <i className="fas fa-mobile-alt"></i>
                        <h4>
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontWeight: 'bold'}}>Telefone:</font></font>
                        </h4>
                        <p>
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>+55 (67) 99847-6824</font></font>
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <form id="contact-form" method="post" className="contact-form form">
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label htmlFor="name" className="font-weight-normal first-name">Seu primeiro nome *</label>
                        <input id="name" type="text" name="name" placeholder="Digite seu primeiro nome" required className="form-control" style={{marginTop: '10px'}}/>
                      </div>
                      <div className="form-group col-lg-6">
                        <label htmlFor="surname" className="font-weight-normal last-name">Seu último nome *</label>
                        <input id="surname" type="text" name="surname" placeholder="Digite seu sobrenome" required className="form-control" style={{marginTop: '10px'}}/>
                      </div>
                      <div className="form-group col-lg-12">
                        <label htmlFor="email" className="font-weight-normal" style={{marginTop: '15px'}}>Seu e-mail *</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required className="form-control" style={{marginTop: '10px'}}/>
                      </div>
                      <div className="form-group col-lg-12">
                        <label htmlFor="message" className="font-weight-normal" style={{marginTop: '15px'}}>Sua mensagem para mim *</label>
                        <textarea id="message" rows="4" name="message" placeholder="Digite sua mensagem" required className="form-control" style={{marginTop: '10px'}}></textarea>
                      </div>
                      <div className="form-group col-lg-12" style={{marginTop: '20px'}}>
                        <button type="submit" className="btn btn-block border-radius-none">Enviar Mensagem</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          
            <div id="map" className=" d-flex justify-content-center">
              <iframe width="1200" height="400" frameBorder="0" style={{border: '0', marginBottom: '60px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59083.19631514997!2d-54.86377000808715!3d-22.25146727704577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a866a3f95cb5%3A0x1ed5e53795bad8cc!2sR.%20Eul%C3%A1lia%20Pires%2C%20245%20-%20Vila%20Cachoeirinha%2C%20Dourados%20-%20MS%2C%2079814-250!5e0!3m2!1spt-PT!2sbr!4v1673104874099!5m2!1spt-PT!2sbr" title="Rodoviária de Dourados, Av. Marcelino Píres - Vila Maxwell, Dourados " aria-label="Rodoviária de Dourados, Av. Marcelino Píres - Vila Maxwell, Dourados"></iframe>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
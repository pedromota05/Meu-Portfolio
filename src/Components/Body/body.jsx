import { useState } from 'react';
import emailjs from '@emailjs/browser'

export const Body =() => {
  var perfil=require('./img/about.jpg');

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
        alert('Preencha todos os campos');
        return;
    }

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }
    emailjs.send("service_8m48wwm", "template_5qjf03p", templateParams, "XUMrLYGY33XfL1lin")
    .then((response) => {
        console.log("Email enviado", response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')
    }, (error) => {
        console.log("Erro: ", error);
    })
  }
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,400italic"></link>
          
          <section className="py-site">
            <div className="container py-5 body-site">
              <div className="row">
                <div className="col-lg-10">
                  <h1 style={{fontWeight: 'bold', fontSize: '2.7rem'}}>HELLO, WORLD!<br/>Me chamo <span style={{color: '#1488D4'}}>Pedro Mota</span> e sou um Front-end Designer + <span style={{color: '#1488D4'}}> Developer</span> com experiência, residente em Dourados, MS, Brasil.</h1>
                </div>
              </div>
            </div>
          </section> 
        
          <section id="about">
            <div className="container">
              <h2 className="text-md lined" style={{fontWeight: 'bold'}}>About me</h2>
              <div className="row">
                <div className="col-lg-6">
                    <p className="mb-1" style={{textAlign: 'justify'}}>Sou formado em Técnico em Informática para Internet pelo <strong>IFMS - Campus Dourados</strong> e cursando Sistemas de Informação na <strong>UFGD</strong>.</p>
                  <p className="mb-4" style={{textAlign: 'justify'}}>Eu sou um programador com ampla experiência em front-end e um conhecimento sólido em back-end. No front-end, tenho expertise em <strong>Javascript, frequentemente utilizando frameworks populares como React.js, Next.js, Vue.js</strong>. Além disso, utilizo os <strong>frameworks Bootstrap e Quasar</strong> para criar interfaces visualmente atraentes e também aplico meus conhecimentos em CSS puro para personalizar ainda mais os projetos.
                  Para o back-end, tenho proficiência em Javascript, trabalhando com tecnologias como <strong>(Node.js, Express e Strapi)</strong> para desenvolver APIs robustas e escaláveis. Além disso, tenho experiência em bancos de dados relacionais, como <strong>MySQL</strong>, e não relacionais, como <strong>MongoDB</strong>, garantindo que as aplicações tenham acesso eficiente e seguro aos dados, independentemente do modelo de banco de dados utilizado.
                  </p>
                  <img src={perfil} alt="Minha foto" className="img-fluid rounded-circle"></img>
                </div>
                <div className="col-lg-6">
                    <div className="mb-2">
                        <strong className="profiss">•• HABILIDADES PROFISSIONAIS</strong>
                    </div>
                    <div className="mb-4" style={{textAlign: 'justify'}}>
                        <p style={{fontWeight: '600'}} className="mb-1">• Estágio Supervisionado no Centro de Recondicionamento de Computadores Dourados</p>
                        <p className="mb-1"><strong>Instituição:</strong> Instituto Federal de Mato Grosso do Sul – Campus Dourados – IFMS</p>
                        <p className="mb-1"><strong>C.H:</strong> 120 horas</p>
                        <p className="mb-1"><strong>Período:</strong> de março a agosto de 2022</p>
                    </div>
                    <div className="mb-4" style={{textAlign: 'justify'}}>
                        <p style={{fontWeight: '600'}} className="mb-1">• Estágio na Embrapa Agropecuária Oeste</p>
                        <p className="mb-1"><strong>Função:</strong> Desenvolvimento de aplicações PWA para utilização no campo de forma offline</p>
                        <p className="mb-1"><strong>Link da aplicação:</strong> <a className="link-site" href="https://tecnofamapp.cpao.embrapa.br/" target="_blank" rel="noopener noreferrer">Tecnofam App <i className="fas fa-external-link-alt"></i></a></p>
                        <p className="mb-1"><strong>Período:</strong> de Julho 2023 até o momento</p>
                    </div>
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
                      <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}} className="progress-bar progress-primary-3"></div>
                    </div>
                  </div>
                  <div className="py-2 mb-2">
                    <p className="small text-muted text-uppercase mb-0" style={{fontWeight: 'bold'}}>MySQL and Strapi</p>
                    <div className="progress">
                      <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}} className="progress-bar progress-primary-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5 border-top border-bottom bg-light" style={{marginTop: '30px'}}>
            <div className="container py-4">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 1" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 2" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 3" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 4" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 5" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 2" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://www.svgrepo.com/show/354398/strapi.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
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
                          <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Vila Cachoeirinha Dourados / MS</font></font>
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
                  <form id="contact-form" className="contact-form form" onSubmit={sendEmail}>
                    <div className="row">
                      <div className="form-group col-lg-12">
                        <label htmlFor="name" className="font-weight-normal first-name">Seu nome *</label>
                        <input id="name" type="text" placeholder="Digite o seu nome" required className="form-control input" onChange={(e) => setName(e.target.value)} value={name} style={{marginTop: '10px'}}/>
                      </div>
                      <div className="form-group col-lg-12">
                        <label htmlFor="email" className="font-weight-normal" style={{marginTop: '15px'}}>Seu e-mail *</label>
                        <input id="email" type="email" placeholder="Digite seu e-mail" required className="form-control input" onChange={(e) => setEmail(e.target.value)} value={email} style={{marginTop: '10px'}}/>
                      </div>
                      <div className="form-group col-lg-12">
                        <label htmlFor="message" className="font-weight-normal" style={{marginTop: '15px'}}>Sua mensagem para mim *</label>
                        <textarea id="message" rows="4" placeholder="Digite sua mensagem" required className="form-control textarea" onChange={(e) => setMessage(e.target.value)} value={message} style={{marginTop: '10px'}}></textarea>
                      </div>
                      <div className="form-group col-lg-12" style={{marginTop: '20px'}}>
                        <button type="submit" className="btn btn-block border-radius-none" value="Enviar">Enviar Mensagem</button>
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
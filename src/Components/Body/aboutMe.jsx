export const AboutMe = () => {
    var perfil=require('./img/about.jpg');
    return (
        <section id="about">
            <div className="container">
                <h2 className="text-md lined" style={{fontWeight: 'bold'}}>About me</h2>
                <div className="row">
                    <div className="col-lg-6" style={{textAlign: 'justify', lineHeight: 1.8}}>
                        <p className="mb-4">Sou um profissional com formação em Técnico em Informática para Internet pelo <strong>IFMS - Campus Dourados</strong> e atualmente cursando Sistemas de Informação na <strong>UFGD</strong>.
                        Minha experiência abrange tanto front-end quanto back-end, com especialização em Javascript. No front-end, utilizo frameworks populares como <strong>React.js, Next.js e Vue.js</strong>, além dos frameworks <strong>Bootstrap e Quasar</strong> para criar interfaces visualmente atrativas. Também aplico CSS puro para personalização adicional.
                        No back-end, tenho proficiência em tecnologias como <strong>(Node.js, Express e Strapi)</strong> para desenvolver APIs robustas e escaláveis. Além disso, tenho experiência em bancos de dados relacionais, como <strong>MySQL</strong>, e não relacionais, como <strong>MongoDB</strong>, garantindo que as aplicações tenham acesso eficiente e seguro aos dados.
                        </p>
                        <img src={perfil} alt="Minha foto" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-2">
                            <strong className="profiss">HABILIDADES PROFISSIONAIS</strong>
                        </div>
                        <div className="mb-4">
                            <p style={{fontWeight: '600'}} className="mb-1">• Estágio Supervisionado no Centro de Recondicionamento de Computadores Dourados</p>
                            <p className="mb-1"><strong>Instituição:</strong> Instituto Federal de Mato Grosso do Sul – Campus Dourados – IFMS</p>
                            <p className="mb-1"><strong>C.H:</strong> 120 horas</p>
                            <p className="mb-1"><strong>Período:</strong> de março a agosto de 2022</p>
                        </div>
                        <div className="mb-4">
                            <p style={{fontWeight: '600'}} className="mb-1">• Estagiário na Embrapa Agropecuária Oeste</p>
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
    )
}
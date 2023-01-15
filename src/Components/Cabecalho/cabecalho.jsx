export const Cabecalho =() => {
  var logo=require('./img/logo-01.png');
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,400italic"></link>

          <nav className="navbar navbar-expand-lg bg-light border-bottom fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#!"><img src={logo} alt="Logo Pedro Mota"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none" aria-current="page" href="#!">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none" href="#about">About me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none" href="#contato">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
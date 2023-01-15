export const Footer =() => {
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,400italic"></link>
  
          <footer className="text-center text-white" style={{backgroundColor: '#ffffff'}}>
            <div className="container pt-4">
              <section className="mb-4">
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/pedro.mota.14811" role="button" data-mdb-ripple-color="dark" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://twitter.com/PedroMo86619622" role="button" data-mdb-ripple-color="dark" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark" target="_blank" rel="noreferrer">
                  <i className="fab fa-google"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/pedro_mota5/" role="button" data-mdb-ripple-color="dark" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/pedro-mota-107223201/" role="button" data-mdb-ripple-color="dark" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/pedromota05" role="button" data-mdb-ripple-color="dark" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </section>
            </div>
            <div className="text-center text-muted p-3 border-top" style={{backgroundColor: 'rgba(189, 189, 189, 0.2)'}}>
              © 2022 Copyright:
              <a className="text-muted" href="/"> Pedro Mota</a>
            </div>
          </footer>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
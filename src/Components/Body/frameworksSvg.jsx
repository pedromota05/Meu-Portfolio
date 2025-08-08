import next from './img/nextjs.svg';

export const FrameworksSvg = () => {
    return (
        <section className="padding-framework border-top border-bottom bg-light" style={{marginTop: '30px'}}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" data-toggle="tooltip" data-placement="bottom" title="Customer 1" className="customer img-fluid d-block mx-auto p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" data-toggle="tooltip" data-placement="bottom" title="Customer 2" className="customer img-fluid d-block mx-auto p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg" alt="Javascript" data-toggle="tooltip" data-placement="bottom" title="Customer 3" className="customer img-fluid d-block mx-auto p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" data-toggle="tooltip" data-placement="bottom" title="Customer 4" className="customer img-fluid d-block mx-auto p-4 p-md-0 image-bottom"/></div>
                    <div className="col-lg-2 col-md-4 col-6"><img src={next} alt="Framework Next.js" data-toggle="tooltip" data-placement="bottom" title="Customer 5" className="customer img-fluid d-block mx-auto p-4 p-md-0 image-bottom"/></div>
                    <div className="col-lg-2 col-md-4 col-6"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" data-toggle="tooltip" data-placement="bottom" title="Customer 6" className="customer img-fluid d-block mx-auto p-4 p-md-0 image-bottom"/></div>
                    {/* <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 7" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 8" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 9" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 10" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 11" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4"><img src="https://www.svgrepo.com/show/354398/strapi.svg" alt="something" data-toggle="tooltip" data-placement="bottom" title="Customer 12" className="customer img-fluid d-block mx-auto m-2 p-4 p-md-0"/></div> */}
                </div>
            </div>
        </section>
    )
}
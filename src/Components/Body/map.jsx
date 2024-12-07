export const Map = () => {
    return (
        <div id="map" className="d-flex justify-content-center" style={{ padding: '0 20px' }}>
            <iframe 
                width="1200" 
                height="400" 
                frameBorder="0" 
                style={{ border: '0', marginBottom: '60px' }} 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Dourados&zoom=10&maptype=roadmap" 
                title="Rodoviária de Dourados, Av. Marcelino Píres - Vila Maxwell, Dourados " 
                aria-label="Rodoviária de Dourados, Av. Marcelino Píres - Vila Maxwell, Dourados">
            </iframe>
        </div>
    );
};

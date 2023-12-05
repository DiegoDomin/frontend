function Body_instructivo() {
  return (
    <>
      <div className="container-body-instructivo">
        <h1 className="title"> INSTRUCTIVO PARA CREACIÓN DE CUENTA Y CREACIÓN DE REPORTE EN CASO DE UNA DESAPARICION</h1>

        <p className="text-instructivo">
          En el siguiente video te guiaremos paso a paso la manera de crear
          una cuenta en nuestro sitio web, seguidamente te mostraremos como
          puedes realizar el reporte en caso de desaparición
        </p>
        <div className="video">
        <iframe
          style={{ width: '70%', height: '70%' }}
          src="https://www.youtube.com/embed/jxVsOxZT_pM?si=Mx2xyxDZ4T87sWTp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        </div>
        
      
      </div>
    </>
  );
}

export default Body_instructivo;

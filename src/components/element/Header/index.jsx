const Header = ({clasImage}) => {
    return(
        <>
        <header className={clasImage} style={{marginTop: 100}}>
            <div className="container">
                {clasImage === "masthead2" ? (
                    <>
                    <div className="masthead-subheading"></div>
                <div className="masthead-heading text-uppercase"></div>
                    </>
                ) : 
                clasImage === "masthead3" ? (
                    <>
                    <div className="masthead-subheading chageFont">Bienvenidos a Nuestros Eventos</div>
                <div className="masthead-heading text-uppercase chageFont">No es sobre las ideas. Sino sobre hacer que estas se vuelvan realidad.</div>
                    </>
                )
                :
                (
                    <>
                    <div className="masthead-subheading chageFont">Bienvenidos a IBSER</div>
                <div className="masthead-heading text-uppercase chageFont">No importa si empieza pequeño. De poco a poco se hacen realidad los sueños</div>
                    </>
                )}
                
                {/* <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a> */}
            </div>
        </header>
        </>
    )
}

export default Header;
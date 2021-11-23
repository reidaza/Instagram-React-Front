import './Aside.css';

export const Aside = () => {
    return(
        <aside className="aside">
            <div className="contenedoraside">
                <div className="user"> 
                    <img src="img/estado.jpg" className="imagen" alt="" /> 
                    <div className="contuser"><p className="usuario">dres_db</p><p className="nombreuser">Andres Daza</p> </div>
                    <p className="txtcambiar">Cambiar</p>
                </div>
                <div className="sugerencias">
                    <p className="txtsuge"> Sugerencias para ti </p> <p className="txtvertodo">Ver todo</p> 
                </div>
                <div className="ContSugUsu"> 
                    <div className="otheruser"> 
                        <img src="img/estado.jpg" className="SugImagen" alt="" /> 
                        <div className="Sugcontuser"><p className="Sugusuario">dres_db</p><p className="Sugnombreuser">abcd_123 sigue esta cuenta</p></div>
                        <p className="Sugseguir">Seguir</p>
                    </div>
                    <div className="otheruser"> 
                        <img src="img/estado.jpg" className="SugImagen" alt="" /> 
                        <div className="Sugcontuser"><p className="Sugusuario">dres_db</p><p className="Sugnombreuser">abcd_123 sigue esta cuenta</p></div>
                        <p className="Sugseguir">Seguir</p>
                    </div>
                    <div className="otheruser"> 
                        <img src="img/estado.jpg" className="SugImagen" alt="" /> 
                        <div className="Sugcontuser"><p className="Sugusuario">dres_db</p><p className="Sugnombreuser">abcd_123 sigue esta cuenta</p></div>
                        <p className="Sugseguir">Seguir</p>
                    </div>
                </div>
                <div className="footer"> 
                    <p className="Info">Información ∙ Ayuda ∙ Prensa ∙ API ∙ Empleo ∙ Privacidad ∙ Condiciones ∙ Ubicaciones ∙ Cuentas destacadas ∙ Hashtags ∙ Idioma</p>
                    <p className="Meta"> © 2021 INSTAGRAM FROM META </p>
                </div>
            </div>
        </aside>
    )
}
import './Article.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export const Article = ({last_name,avatar,first_name}) => {
    return(
        <article>
            <div className="Cabecera"><img src={avatar} className="fotouser"alt=""  /><p className="usuario">{last_name}</p> <MoreHorizIcon fontSize="small" className="IconMore"/> </div>
            <div className="Publicidad"> <img src="https://picsum.photos/600" className="FotoPubli"  alt="" /> </div>
            <div className="Interaccion"> 
                <div className="Iconos"><FavoriteBorderIcon className="IconoLike" fontSize="large"/> <ChatBubbleOutlineIcon className="IconoComent" fontSize="large"/> <IosShareIcon className="IconShare" fontSize="large"/> <BookmarkBorderIcon fontSize="large" className="IconBook"/> </div>
                <div className="Like"> 
                    <div> <img src={avatar} className="likeuser"alt=""  /> </div>
                    <div className="likecoment"> Les gusta a {first_name} y 456 mas  </div>
                </div>
                <div className="ContComent"> 
                    <div className="Descrip"><p className="DesUser">{last_name} </p><p className="DesDescrip">The best city in the world</p></div>
                    <div className="NumComent"> Ver los 230 comentarios</div>
                    <div className="Coment"> 
                        <div className="PriComent"> <p className="DesUser">{first_name}</p> <p className="DesDescrip">Nice Place❤</p> </div>
                        <div className="SecComent"> <p className="DesUser">{last_name}</p> <p className="DesDescrip">🌇It´s Beautiful🌃</p> </div>
                    </div>
                </div>
                <div className="tiempo"> <p>HACE 16 HORAS</p> </div>
                <div className="comentario"> <SentimentSatisfiedAltIcon fontSize="large" className="happyface" /><input type="comentbox" className="comentbox" placeholder="Agrega un comentario..."/> <p className="publicar">Publicar</p> </div>
            </div>
        </article>
    )
}
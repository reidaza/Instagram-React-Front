import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

export const Header = () => {
    return (
        <header className="Header">
            <div className="Logo"> <img src="img/LogoInsta.png" alt="" /> </div>
            <div className="Search"><SearchIcon fontSize="smaller" className="IconSearch"/><input type='search' className="TextBox"  placeholder='Busca'/> </div>
            <div className="Icons"> <HomeIcon className="IconHome"/> <div className="IconMessage"><MessageIcon/></div> <ExploreIcon/> <FavoriteBorderIcon/> <AccountCircleIcon/></div>
        </header>
    )
}

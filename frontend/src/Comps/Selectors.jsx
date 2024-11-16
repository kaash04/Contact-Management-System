import Selector from './Selector.jsx';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useNavigate } from 'react-router-dom';

function Selectors() {
    const nav = useNavigate();

    const exitTransition = () => {
        document.querySelectorAll('.centralSelector')
            .forEach(element => {
                element.style.opacity = '0';
                element.style.height = '0';
                element.style.width = '0';
            });
    }

    const addContactClick = () => {
        exitTransition();
        setTimeout(() => {
            nav("/newcontact");
        }, 1000);
    }
    const viewContact = () => {
        exitTransition();
        setTimeout(() => {
            nav("/view");
        }, 1000);
    }
    const searchContact = () => {
        exitTransition();
        setTimeout(() => {
            nav("/search");
        }, 1000);
    }

    const ico = [
        {
            icon: <AddIcCallIcon sx={{
                height: '60%', width: '60%', color: '#1a1a1a'
            }} />,
            func: addContactClick
        },
        {
            icon: <ContactPageIcon sx={{
                height: '60%', width: '60%', color: '#1a1a1a'
            }} />,
            func: viewContact
        },
        {
            icon: <PersonSearchIcon sx={{
                height: '60%', width: '60%', color: '#1a1a1a'
            }} />,
            func: searchContact
        }
    ]

    return (
        <>
            {ico.map((element) => {
                return <Selector onClick={element.func} innerElement={element.icon} />
            })}
        </>
    )
}
export default Selectors
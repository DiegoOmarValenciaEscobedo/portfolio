import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import SchoolTwoOneIcon from '@mui/icons-material/SchoolTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';

const Links = [
  {
    id: 'about',
    text: 'About me',
    icon: <InfoTwoToneIcon sx={{color:'#fff'}}/>,
  },
  {
    id: 'skills',
    text: 'My Skills',
    icon: <EmojiObjectsTwoToneIcon sx={{color:'#fff'}}/>,
  },
  {
    id: 'education',
    text: 'Education',
    icon: <SchoolTwoOneIcon sx={{color:'#fff'}}/>,
  },
  {
    id: 'work',
    text: 'My Work',
    icon: <BuildTwoToneIcon sx={{color:'#fff'}}/>,
  },
  {
    id: 'contact',
    text: 'Get in touch',
    icon: <ContactMailTwoToneIcon sx={{color:'#fff'}}/>,
  },
]

export default Links;
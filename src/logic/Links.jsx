import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import SchoolTwoOneIcon from '@mui/icons-material/SchoolTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';

const Links = [
  {
    id: 'about',
    text: 'About me',
    icon: <InfoTwoToneIcon/>,
  },
  {
    id: 'skills',
    text: 'My Skills',
    icon: <EmojiObjectsTwoToneIcon/>,
  },
  {
    id: 'education',
    text: 'Education',
    icon: <SchoolTwoOneIcon/>,
  },
  {
    id: 'experience',
    text: 'Experience',
    icon: <TimelineTwoToneIcon/>,
  },
  {
    id: 'work',
    text: 'My Work',
    icon: <BuildTwoToneIcon/>,
  },
  {
    id: 'contact',
    text: 'Get in touch',
    icon: <ContactMailTwoToneIcon/>,
  },
]

export default Links;
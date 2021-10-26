
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const ButtonUI = styled(Button)(() => ({
    color: '#000000',
    padding: '6px 16px',
    minWidth: '100px',
    textTransform: 'none',
    borderColor: '#000000',
    backgroundColor: '#89dc9f',
   
    '&:hover': {
        backgroundColor: '#89dc9f',
    },
  }));


 
export default ButtonUI;
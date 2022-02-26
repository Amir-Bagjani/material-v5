import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const CommonCard = ({header, content}) => {
    const cardStyle = {
        width: '85%',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '8px',
    }
  return (
    <Card sx={cardStyle} >
        {header}
        <CardContent>
            {content}
        </CardContent>
    </Card>
  )
}

export default CommonCard;
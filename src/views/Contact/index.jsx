import { Box, Grid, Typography } from "@mui/material"
import contact from '../../assets/contact.jpg'
import text from '../../configs/Text'
import OverlayHeader from "../../components/OverlayHeader"
const staticServicesL = 'If you are a company looking for Top IT Talent or IT Services to optimize your business processes and strengthen your IT infrastructure, please email us at clients@nirvanaenterprises.com or simply call us at 732.889.4242.'
const staticServicesR =  '1581 Route 27,Suite 107,Edison'


const Contact = () => {
  return (
    <>
    <OverlayHeader overlayImage={contact} mainText={text.contact.main} subText={text.contact.sub} ></OverlayHeader>
      <Grid className='find' container sx={{backgroudColor:'red'}}>
        <Grid item sm={8} md={8} >
          <Typography>{text.contact.Body.First.Title}</Typography>
          <Box>{text.contact.Body.First.Body}</Box>
          <Typography>{text.contact.Body.Second.Title}</Typography>
          <Box>{text.contact.Body.First.Body}</Box>
        </Grid>
        <Grid item sm={4} md={4}>
        <Typography>{text.contact.Body.Third.Title}</Typography>
          <Box>{staticServicesR}</Box>
        </Grid>
        
      </Grid>
    
    </>
  )
}

export default Contact
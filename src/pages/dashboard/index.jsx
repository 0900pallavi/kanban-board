import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { mockTransactions } from "../../data/mockData";
import { InnerCol } from "../../data/mockData";
import Header from "../../components/Header";
import './dashboard.css'
import img from "../../assets/img";
import Search from '../search/Search'
import Calender from "../calender/Calender";
import Share from '../share/Share'
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import { useProSidebar } from "react-pro-sidebar";




const Dashboard = () => {
  const theme = useTheme();
  const { toggleSidebar, broken, rtl, collapsed } = useProSidebar();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  
  return (
    <Box className="banner_heading" overflow={'scroll'} m="20px" maxHeight={'100vh'}>
      {/* HEADER */}

      <Box
        maxHeight={'100vh'}
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 10px 0 10px"
      >
        <Box className="dashbord_head">
          <Header
            
          title="Mobile App" subtitle="" />
          <img src={img.arrowSquare} alt="" />
          <img src={img.link} alt="" />
        </Box>
        <Box mb={3} 
          margin={broken ? "0 auto 20px auto" : "0 0 0px auto"}
        className="right_dashbord_profile">
          <Typography
            variant="h5"
            fontWeight="600"
            color="#141414"
          >
            Invite
          </Typography>
          <Typography>
            <img src={img.image2} alt=""
            />
            <img
              src={img.image3} alt=""
            />
            <img
              src={img.image4} alt=""
            />
            <img
              src={img.image5} alt=""
            />
            <img
              src={img.image6} alt=""
            />
            <span>+2</span>
          </Typography>
        </Box>
      </Box>

      <Box
      // display={broken? "block": "flex"} 
      style={{display:'flex', alignItems:'center', padding:'0px 20px 40px 20px'}}
      >
        <Box style={{display:'flex'}}>
          <Search/>
          <Calender />
        </Box>
        <Box 
        justifyContent={broken? "flex-start" : "flex-end"}
        style={{display:'flex', fontSize:'25px', color:'#a19f9f'}} className="share_div">
          <Share />
          <Typography className="share_icon">|</Typography>
          <div className="share_icon">
            <img src={img.icon7} alt="" />
          </div>
          <div  className="share_icon">
            <img src={img.menu} alt="" />
          </div>
        </Box>
      </Box>
      <KanbanBoard/>
      <Box style={{'marginBottom':'100px'}}>
      </Box>
    </Box>
  );
};

export default Dashboard;

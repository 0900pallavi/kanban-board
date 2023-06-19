// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from "react-router-dom";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import './sidebar.css'
import img from '../../../assets/img'
const Item = ({ title, to, icon, selected, setSelected }) => {


  return (
    <MenuItem
      active={selected === title}
      style={{ color: "#141414" }}
      onClick={() => setSelected(title)}
      routerLink={<Link to={to} />}
    >

      <Typography>
        <img
          className="main_logo"
          src={img[icon]}
        />
        {title}
      </Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  const [collapsedA, setCollapsedA] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    // setCollapsedA(!collapsedA);
  };
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `#6870fa !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `#4cceac !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        className="Main_sidebar_div"
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor="#fff"
        image={sidebarImage}
      >
        <Menu iconshape="square">
          
          {collapsedA ? (
            <MenuItem className="collapse_menu"
              icon={<KeyboardDoubleArrowLeftIcon />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem className="noncollapse_menu"
              suffix={<KeyboardDoubleArrowRightIcon />}
              onClick={handleCollapsedChange}
            >
              <Box className="Main-left-col">
                <Box className="head_section"
                  display="flex"
                  alignItems="center"
                >
                  <img
                    className="main_logo"
                    alt="profile user"
                    src={img.colorfilter}
                  />
                  <Typography
                    className="main_heading"
                    variant="h4"
                  >
                    Project M.
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          )
          }
          <Box
            className="sidebar_icon collapse_items">
            <Item className="sidebar_content"
              title="Home"
              to=""
              icon="dashboard"
              selected={selected}
              setSelected={setSelected}
            />
            <Item className="sidebar_content"
              title="Messages"
              to=""
              icon="message"
              selected={selected}
              setSelected={setSelected}
            />
            <Item className="sidebar_content"
              title="Tasks"
              to=""
              icon="task"
              selected={selected}
              setSelected={setSelected}
            />
            <Item className="sidebar_content"
              title="Members"
              to=""
              icon="profile"
              selected={selected}
              setSelected={setSelected}
            />
            <Item className="sidebar_content"
              title="Settings"
              to=""
              icon="setting"
              selected={selected}
              setSelected={setSelected}
            />
            <p className="divider"></p>
            <Box className="project_content">
              <Typography
                variant="h6"
                color="#a3a3a3"
                sx={{ m: "6px 20px 5px 10px" }}
              >
                MY PROJECTS
              </Typography>
              <img src={img.plus} alt="" />
            </Box>
            <Box display="#flex" alignItems="center" position="relative">
              <Item className="sidebar_content sidebar_inner_content"
                title="Mobile App"
                to="/"
                icon="ellipse1"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography className="task_projects">...</Typography>
            </Box>
            <Item className="sidebar_content"
              title="WEbsite Redesign"
              to="/team"
              icon="ellipse2"
              selected={selected}
              setSelected={setSelected}
            />
            <Item className="sidebar_content"
              title="Design System"
              to="/team"
              icon="ellipse3"
              selected={selected}
              setSelected={setSelected}
            />
            <Item className="sidebar_content"
              title="Wireframes"
              to="/team"
              icon="ellipse4"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          <Box className="sidebar_last_content" style={{ 'background-image': 'url(' + require('../../../assets/images/Union.png') + ')' }}
          >
            <div>
            <img src={img.Round}/>
            </div>
            <div class="last_content_inner">
            <h4>Thoughts Time</h4>
            <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p> 
            <input type="text" name="" placeholder="Write a message"/>
            </div>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;

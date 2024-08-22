import React from 'react';
import { Box, Avatar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ListItemIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
const Dashboard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ flexGrow: 1, padding: '16px',marginLeft :'10px' }}>
               
            </Box>
            <Box sx={{ padding: '16px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f0f0f0',
                        padding: '8px',
                        borderRadius: '8px',
                        width: 'fit-content',
                    }}
                >
                    <Typography variant="body2" sx={{ marginRight: '8px', alignItems: 'center' }}>
                        00:03:20
                    </Typography >
                    <PauseCircleFilledIcon  sx={{color:'red'}}/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                    <Avatar src="/imgs/icon.png" alt="himanshu" />

                    <Box sx={{ marginLeft: '8px' }}>
                        <Typography variant="subtitle1">Himanshu </Typography>
                        <Typography variant="body2" color="textSecondary">React developer</Typography>
                    </Box>
                    <IconButton onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                width: '200px',
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            Account Setting
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: 'red' }}>
                            <ListItemIcon>
                                <LogoutIcon sx={{ color: 'red' }} />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;

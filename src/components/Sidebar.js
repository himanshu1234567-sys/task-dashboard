import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    TextField,
    Divider,
    Box,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LeaveIcon from '@mui/icons-material/EventAvailable';
import AttendanceIcon from '@mui/icons-material/AccessTime';
import TimesheetIcon from '@mui/icons-material/Timer';
import WorkLogIcon from '@mui/icons-material/Work';
import ReimbursementIcon from '@mui/icons-material/MonetizationOn';
import ReportIcon from '@mui/icons-material/Assessment';
import ExpenseIcon from '@mui/icons-material/AccountBalanceWallet';
import IncomeIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const DashboardSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // Function to toggle the sliding sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItemsTop = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Feedbacks', icon: <FeedbackIcon /> },
        { text: 'Leaves', icon: <LeaveIcon /> },
        { text: 'Attendance', icon: <AttendanceIcon /> },
        { text: 'Daily Timesheet', icon: <TimesheetIcon /> },
        { text: 'Work Log', icon: <WorkLogIcon /> },
        { text: 'Reimbursements', icon: <ReimbursementIcon /> },
    ];

    const menuItemsBottom = [
        { text: 'Reports', icon: <ReportIcon /> },
        { text: 'My Expenses', icon: <ExpenseIcon /> },
        { text: 'Income', icon: <IncomeIcon /> },
        { text: 'Categories', icon: <CategoryIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> },
    ];
    const allMenuItems = [...menuItemsTop];
    const filteredItems = allMenuItems.filter(item =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
   
    return (
        <div style={{ display: 'flex' }}>
            {/* Fixed Sidebar */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    '& .MuiDrawer-paper': { width: '80px', boxSizing: 'border-box' },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
                    <img src="/imgs/images.png" alt="Logo" style={{ height: '40px', width: 'auto', borderRadius: '20px' }} />
                </Box>
                <List>
                    <ListItem button onClick={toggleSidebar}>
                        <ListItemIcon>
                            <GridViewIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FeedbackIcon />
                        </ListItemIcon>
                    </ListItem>
                    {/* Spacer to push the logout button to the bottom */}
                    <Box sx={{ flexGrow: 1 }} />
                    <ListItem button sx={{ marginTop: '400px' }}>
                        <ListItemIcon>
                            <LogoutIcon sx={{ color: 'red' }} />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>

            {/* Sliding Sidebar - Positioned to the Right of the Fixed Sidebar */}
            <Drawer
                variant="persistent"
                anchor="left"
                open={isSidebarOpen}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '250px',
                        marginLeft: '80px', // Offset by the width of the fixed sidebar
                        boxSizing: 'border-box',
                    },
                }}
            >
                <div style={{ padding: '10px' }}>
                    {/* Search Bar */}
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search"
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: <SearchIcon style={{ marginRight: '8px' }} />,
                        }}
                    />
                </div>
                <Divider />
                <List>
                    <List>
                        {filteredItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {menuItemsBottom.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Content Area */}
            <div style={{ flex: 1, padding: '20px' }}>
                {/* Your main content goes here */}
            </div>
        </div>
    );
};

export default DashboardSidebar;

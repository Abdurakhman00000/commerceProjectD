import { AdminPanelSettings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

    const navigate = useNavigate();
    
    return (
        <IconButton onClick={() => {navigate("/admin")}}>
            <AdminPanelSettings sx={{color: 'white'}}/>
        </IconButton>
    );
};

export default AdminPanel;
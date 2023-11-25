import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewRecipe from '../page/newRecipe/NewRecipe';
import Recepies from '../page/recepies/recepies';

export default function ButtonAppBar() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            recipes 
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Recepies
            </Button>
            <Button color="inherit" component={Link} to="/new-recipe">
              New Recipe
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Recepies />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
        </Routes>
      </Box>
    </Router>
  );
}

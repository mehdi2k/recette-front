import React, { useState } from 'react';
import { Recipe } from '../newRecipe/NewRecipe';
import { Table, TableCell, Button } from '@mui/material';
import { PageContainer, StyledTableContainer } from './recepies.style';

const Recepies: React.FC = () => {
  const [data, setData] = useState<Recipe[]>([]);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/recette/all');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/recette/delette/${id}`, {
        method: 'DELETE',
      });
      setData((prevData) => prevData.filter((recipe) => recipe.id !== id));
      setEditingRecipe(null); 
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleUpdate = async (id: number) => {

    setEditingRecipe(null); 
  };

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
  };


  
  return (
    <PageContainer>
      <h1>Recipes</h1>
      <StyledTableContainer>
        <Table>
          <thead>
            <tr>
              <TableCell>nom</TableCell>
              <TableCell>ingredient</TableCell>
              <TableCell>preparation</TableCell>
              <TableCell>duree</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </thead>
          <tbody>
            {data.map((recipe) => (
              <React.Fragment key={recipe.id}>
                <tr>
                  <TableCell>{recipe.nom}</TableCell>
                  <TableCell>{recipe.ingredient}</TableCell>
                  <TableCell>{recipe.preparation}</TableCell>
                  <TableCell>{recipe.duree}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(recipe)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </tr>
                {editingRecipe && editingRecipe.id === recipe.id && (
                  <tr>
                    <td colSpan={4}>
                   
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleUpdate(recipe.id);
                        }}
                      >
                        <Button type="submit">Update</Button>
                      </form>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </StyledTableContainer>
    </PageContainer>
  );
};

export default Recepies;

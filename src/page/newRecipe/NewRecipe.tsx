import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormulaireContainer, InputForm, PageContainer } from "./NewRecipe.style";
import axios from "axios";

export interface Recipe {
  id: number;
  nom: string;
  ingredient: string;
  preparation: string;
  duree: number;
}

const NewRecipe: React.FC = () => {
  const { register, formState, handleSubmit, reset } = useForm<Recipe>();

  const onSubmit = async (data: Recipe) => {
    try {
      await axios.post("http://localhost:8080/recette/save", data);
      
      reset();
    } catch (error) {
    }
  };

  return (
    <PageContainer>
      <h1>New Recipes</h1>
      <FormulaireContainer onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent={"center"} spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <label>nom de repas:</label>
            <InputForm {...register("nom")} />
          </Grid>
        </Grid>

        <label> ingredient: </label>
        <InputForm {...register("ingredient")} />

        <label>etape de preparation: </label>
        <InputForm {...register("preparation")} />

        <label>duree: </label>
        <InputForm {...register("duree")} />

        <Button type="submit" disabled={formState.isSubmitting}>
          {formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormulaireContainer>
    </PageContainer>
  );
};

export default NewRecipe;

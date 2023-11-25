import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { ErrorSpan, FormulaireContainer, InputForm, PageContainer } from "./NewRecipe.style";
import axios from "axios";

export interface Recipe {
  id: number;
  nom: string;
  ingredient: string;
  preparation: string;
  duree: number;
}

const NewRecipe: React.FC = () => {
  const { register, formState, handleSubmit, reset, formState: { errors } } = useForm<Recipe>();

  const onSubmit = async (data: Recipe) => {
    try {
      await axios.post("http://localhost:8080/recette/save", data);
      alert("bien enregistrer");
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
            <InputForm {...register("nom",{ required: true })} />
            {errors.nom && errors.nom.type === "required" && (
        <ErrorSpan>This is required</ErrorSpan>
      )}
          </Grid>
        </Grid>

        <label> ingredient: </label>
        <InputForm {...register("ingredient",{ required: true })} />
        {errors.ingredient && errors.ingredient.type === "required" && (
        <ErrorSpan>This is required</ErrorSpan>)}

        <label>etape de preparation: </label>
        <InputForm {...register("preparation",{ required: true })} />
        {errors.preparation && errors.preparation.type === "required" && (
        <ErrorSpan>This is required</ErrorSpan>)}

        <label>duree: </label>
        <InputForm {...register("duree",{ required: true  })}  type="number"  />
        {errors.duree && errors.duree.type === "required" && (
        <ErrorSpan>This is required</ErrorSpan>)}

        <Button type="submit" disabled={formState.isSubmitting}>
          {formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormulaireContainer>
    </PageContainer>
  );
};

export default NewRecipe;

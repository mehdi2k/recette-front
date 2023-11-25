import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 17px;
`;
PageContainer.displayName = 'PageContainer';

export const FormulaireContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid gey;
  box-shadow: 0px 10px shadow;
  border-radius: 8px;
  width: 100%;
  padding: 28px;
  box-sizing: border-box;
  background-color: white;
  margin-top: 16px;
`;
FormulaireContainer.displayName = 'FormulaireContainer';

export const InputForm = styled.input`
border: 1px solid;
  color: grey;
  width: 100%;
  padding: 9px;
  font-style: normal;
  line-height: 17px;
  box-sizing: border-box;
  border-radius: 6px;
  height: 100%;
  &:focus {
    border: blue;
    // outline: none;
  }
`;
InputForm.displayName = 'InputForm';
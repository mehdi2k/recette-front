import { Table, TableCell, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 17px;
`;
PageContainer.displayName = 'PageContainer';

export const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
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
StyledTableContainer.displayName = 'StyledTableContainer';











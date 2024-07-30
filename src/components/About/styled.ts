import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Description = styled(Typography)(
	({ theme }) => `
  line-height: 1.9;
 
  a {
    text-decoration: none;
    padding: 2px 5px;
    font-weight: 500;
    margin: 0 3px;
    color: ${theme.palette.mode === "light" ? "black" : "white"}
  }
`,
);

export const Animation = styled("span")`
	display: block;
	font-size: 50%;
	font-weight: 400;
`;

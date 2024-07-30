import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Description = styled(Typography)`
	em {
		display: block;
		margin-bottom: 10px;
	}
	small {
		display: block;
	}

	ol,
	li,
	ul {
		margin: 0;
		padding: 0;
		list-style: square;
	}

	ol {
		margin: 0 0 15px 0;
		padding-left: 16px;
	}
`;

import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

 function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/oussama-alouache-472874140/">
        oussama alouache
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default Copyright
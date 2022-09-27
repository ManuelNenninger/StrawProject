import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Link from "next/link";

export default function ContainedActionButton(props){
  const theme = useTheme();
  let variant = props.variant;

    const BootstrapButton = styled(Button)({
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '3px 12px',
      margin: "0 10px 0 10px",
      border: '2px solid',
      lineHeight: 1.5,
      backgroundColor: variant == "outlined" ? "none" : theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      color: variant == "outlined" ? theme.palette.secondary.main : "#ffffff",
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover':
        variant == "outlined" ?
        {
          border: '2px solid',
          backgroundColor: theme.palette.secondary.light,
          borderColor: theme.palette.secondary.light,
          boxShadow: 'none',
        } :
        {
          backgroundColor: theme.palette.secondary.light,
          borderColor: theme.palette.secondary.light,
          boxShadow: 'none',
        },
      '&:active': {
        backgroundColor: theme.palette.secondary.light,
        borderColor:  theme.palette.secondary.light,
        boxShadow: 'none',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(97, 53, 38, 0.5)',
      },
    });
  return(
    <>
      <BootstrapButton {...props}>
        {props.href ? <Link href={props.href}>
          {props.text}
        </Link> : props.text}
      </BootstrapButton>
    </>
  )
}

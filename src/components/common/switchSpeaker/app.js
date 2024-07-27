import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme, Mob }) => ({
  width: Mob ? 130 : 200,
  height: Mob ? 56 : 80,
  padding: 1,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: Mob ? 5 : 7,
    transform: `translateX(${Mob ? "74px" : "120px"})`,
    // headphone
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(1px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg  width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
          "#0093FF"
        )}" d="M9.33398 16H12.0007V26.6667H9.33398V16ZM20.0007 16H22.6673V26.6667H20.0007V16Z M26.666 15.9999V13.7239C26.666 7.80126 22.0273 2.84259 16.326 2.67059C13.3873 2.60259 10.658 3.65192 8.57135 5.67859C7.5426 6.66968 6.72526 7.85889 6.16864 9.17448C5.61202 10.4901 5.32765 11.9048 5.33268 13.3333V15.9999C3.86202 15.9999 2.66602 17.1959 2.66602 18.6666V23.9999C2.66602 25.4706 3.86202 26.6666 5.33268 26.6666H7.99935V13.3333C7.99542 12.2619 8.20853 11.2009 8.62582 10.2141C9.04311 9.22738 9.65594 8.33538 10.4273 7.59192C11.1955 6.84416 12.1066 6.25906 13.1062 5.87165C14.1058 5.48424 15.1732 5.30248 16.2447 5.33725C20.522 5.46525 23.9993 9.22792 23.9993 13.7239V26.6666H26.666C28.1367 26.6666 29.3327 25.4706 29.3327 23.9999V18.6666C29.3327 17.1959 28.1367 15.9999 26.666 15.9999Z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#0093FF" : "#0093FF",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
    width: Mob ? 43 : 64,
    height: Mob ? 43 : 64,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      // speaker
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg  width="32"      height="32"          viewBox="0 0 32 32"           xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
        "#FFA616  "
      )}" d="M16 24C18.2091 24 20 22.2091 20 20C20 17.7909 18.2091 16 16 16C13.7909 16 12 17.7909 12 20C12 22.2091 13.7909 24 16 24Z M24.0007 2.66675H8.00065C7.29341 2.66675 6.61513 2.9477 6.11503 3.4478C5.61494 3.94789 5.33398 4.62617 5.33398 5.33341V26.6667C5.33398 27.374 5.61494 28.0523 6.11503 28.5524C6.61513 29.0525 7.29341 29.3334 8.00065 29.3334H24.0007C24.7079 29.3334 25.3862 29.0525 25.8863 28.5524C26.3864 28.0523 26.6673 27.374 26.6673 26.6667V5.33341C26.6673 4.62617 26.3864 3.94789 25.8863 3.4478C25.3862 2.9477 24.7079 2.66675 24.0007 2.66675ZM16.0007 5.33341C16.5281 5.33341 17.0436 5.48981 17.4822 5.78283C17.9207 6.07585 18.2625 6.49232 18.4643 6.97959C18.6662 7.46686 18.719 8.00304 18.6161 8.52032C18.5132 9.0376 18.2592 9.51276 17.8863 9.8857C17.5133 10.2586 17.0382 10.5126 16.5209 10.6155C16.0036 10.7184 15.4674 10.6656 14.9802 10.4638C14.4929 10.2619 14.0764 9.92013 13.7834 9.4816C13.4904 9.04307 13.334 8.5275 13.334 8.00008C13.334 7.29284 13.6149 6.61456 14.115 6.11446C14.6151 5.61437 15.2934 5.33341 16.0007 5.33341ZM16.0007 26.6667C14.6821 26.6667 13.3932 26.2758 12.2968 25.5432C11.2005 24.8107 10.346 23.7695 9.84145 22.5513C9.33687 21.3331 9.20485 19.9927 9.46208 18.6995C9.71932 17.4063 10.3543 16.2184 11.2866 15.286C12.219 14.3537 13.4068 13.7187 14.7 13.4615C15.9933 13.2043 17.3337 13.3363 18.5519 13.8409C19.77 14.3455 20.8112 15.2 21.5438 16.2963C22.2763 17.3926 22.6673 18.6815 22.6673 20.0001C22.6673 21.7682 21.9649 23.4639 20.7147 24.7141C19.4645 25.9644 17.7688 26.6667 16.0007 26.6667Z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#FFA616" : "#FFA616",
    borderRadius: 100,
  },
}));

export default function CustomizedSwitches({ checked, change, Mob }) {
  return (
    <FormGroup>
      <MaterialUISwitch checked={!checked} onChange={change} Mob={Mob} />
    </FormGroup>
  );
}

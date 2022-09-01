import React from "react";
import {
  Typography,
  Box,
  Stack,
  List,
  ListItem,
  Link,
  ButtonGroup,
  Button,
  Input,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

let Colors = {
  primaryColor: "#F7AC08",
  secondaryColor: "#062347",
  textColor: "#7B838A",
  cardBackgroundColor: "#F9F9FF",
};

function Footer() {
  return (
    <Stack
      direction={{ xs: "column" }}
      spacing={{ xs: 1, sm: 2, md: 5 }}
      sx={{ padding: "3rem 1rem", backgroundColor: Colors.secondaryColor }}
    >
      <div className="container">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 5 }}
        >
          <Box>
            <Typography
              variant="h2"
              fontWeight="600"
              sx={{
                color: "white",
                fontSize: "1.3rem",
                paddingBottom: (theme) => theme.spacing(3),
              }}
            >
              Top Products
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Managed Website
                </Link>
              </ListItem>

              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Manage Reputation
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Power Tools
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Marketing Service
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography
              variant="h2"
              fontWeight="600"
              sx={{
                color: "white",
                fontSize: "1.3rem",
                paddingBottom: (theme) => theme.spacing(3),
              }}
            >
              Quick Links
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Jobs
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Brand Assets
                </Link>
              </ListItem>

              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Investor Relations
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Terms of Service
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography
              variant="h2"
              fontWeight="600"
              sx={{
                color: "white",
                fontSize: "1.3rem",
                paddingBottom: (theme) => theme.spacing(3),
              }}
            >
              Features
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Jobs
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Brand Assets
                </Link>
              </ListItem>

              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Investor Relations
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Terms of Service
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography
              variant="h2"
              fontWeight="600"
              sx={{
                color: "white",
                fontSize: "1.3rem",
                paddingBottom: (theme) => theme.spacing(3),
              }}
            >
              Resources
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Guides
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Research
                </Link>
              </ListItem>

              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Experts
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: Colors.textColor,
                    transition: "500ms ease-in-out",
                    "&:hover": { color: "white" },
                  }}
                  fontSize={"1.1rem"}
                  fontFamily='"Roboto","Helvetica","Arial",sans-serif'
                >
                  Agencies
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography
              variant="h2"
              fontWeight="600"
              color={"white"}
              sx={{
                fontSize: "1.3rem",
                paddingBottom: (theme) => theme.spacing(3),
              }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body1"
              color={Colors.textColor}
              fontSize={"1.1rem"}
              fontFamily='"Roboto","Helvetica","Arial",sans-serif'
            >
              You can trust us. we only send promo offers,
            </Typography>
            <Input
              id="outlined-basic"
              placeholder="Your Email Address"
              sx={{
                backgroundColor: "rgb(51,79,108)",
                width: "78%",
                outline: "transparent",
                marginTop: "1rem",
                position: "relvative",
                padding: "0.3rem 1rem",
                color: "white",
              }}
            />
            <Button
              sx={{
                backgroundColor: "rgb(253,198,50)",
                fontWeight: "600",
                color: "black",
                position: "absolute",
                marginTop: "1.2rem",
                marginLeft: "-3rem",
                borderRadius: "0",
                padding: "0.3rem 1.1rem",
                "&:hover": {
                  backgroundColor: "rgb(253,198,50)",
                  color: "black",
                },
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          paddingTop={"2.5rem"}
          alignItems="center"
        >
          <Typography
            fontWeight="500"
            fontSize="medium"
            color={"white"}
            display="flex"
            sx={{ "@ media print": { display: "flex" } }}
          >
            Copyright © 2022 All rights reserved by{" "}
            <Typography
              variant="body1"
              color={Colors.primaryColor}
              fontWeight="400"
            >
              HomeTutor
            </Typography>
          </Typography>

          <ButtonGroup>
            <Button
              variant="contained"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "0",
                backgroundColor: "rgb(51,79,108)",
                color: "white",
                marginRight: "1rem",
                transition: "1s ease-in",
                "&:hover": {
                  backgroundColor: Colors.primaryColor,
                  color: "black",
                  transform: "scale(1.1)",
                },
              }}
            >
              <FacebookIcon
                fontSize="medium"
                sx={{ "&:hover": { fontSize: "1.6rem" } }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "0",
                backgroundColor: "rgb(51,79,108)",
                marginRight: "1rem",
                transition: "1s ease-in-out",
                "&:hover": {
                  backgroundColor: Colors.primaryColor,
                  color: "black",
                  transform: "scale(1.1)",
                },
              }}
            >
              <TwitterIcon
                fontSize="medium"
                sx={{ "&:hover": { fontSize: "1.6rem" } }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "0",
                backgroundColor: "rgb(51,79,108)",
                marginRight: "1rem",
                transition: "1s ease-in-out",
                "&:hover": {
                  backgroundColor: Colors.primaryColor,
                  color: "black",
                  transform: "scale(1.1)",
                },
              }}
            >
              <SportsBasketballIcon
                fontSize="medium"
                sx={{ "&:hover": { fontSize: "1.6rem" } }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "0",
                backgroundColor: "rgb(51,79,108)",
                marginRight: "1rem",
                transition: "500ms ease-in-out",
                "&:hover": {
                  backgroundColor: Colors.primaryColor,
                  color: "black",
                  transform: "scale(1.1)",
                },
              }}
            >
              <LinkedInIcon
                fontSize="medium"
                sx={{ "&:hover": { fontSize: "1.6rem" } }}
              />
            </Button>
          </ButtonGroup>
        </Stack>
      </div>
    </Stack>
  );
}

export default Footer;

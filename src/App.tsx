import React from "react";
import { connect } from "react-redux";
import RoutesCom from "./routes/Routes";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./styles/main.scss";

import { updateAlertInfo } from "./redux/reducers/userSlice";

const alertTheme = createTheme({
  palette: {
    success: {
      main: "#f0f2f4",
      contrastText: "#46596a",
    },
    info: {
      main: "#f0f2f4",
      contrastText: "#46596a",
    },
    error: {
      main: "#f0f2f4",
      contrastText: "#46596a",
    },
  },
});

function App(props: any) {
  const { userInfo, updateAlertInfo } = props;
  return (
    <>
      <RoutesCom />
      <ThemeProvider theme={alertTheme}>
        <Snackbar
          open={userInfo.alertInfo.open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={30}
          onClose={() => {
            updateAlertInfo({ open: false, message: "" });
          }}
          style={{ maxWidth: "600px", minWidth: "400px" }}
        >
          <Alert
            onClose={() => {}}
            icon={false}
            severity="success"
            style={{
              maxWidth: "600px",
              minWidth: "400px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {userInfo.alertInfo.message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = {
  updateAlertInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

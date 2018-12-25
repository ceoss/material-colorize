const dropdownButtonPadding = "20px";

export default theme => ({
  dropdownButton: {
    paddingTop: dropdownButtonPadding,
    paddingBottom: dropdownButtonPadding,
    [theme.breakpoints.down("sm")]: {
      paddingTop: `calc(${dropdownButtonPadding} / 2)`,
      paddingBottom: `calc(${dropdownButtonPadding} / 2)`,
    },
    paddingLeft: "calc(var(--fullScreenBorderPadding) * 2)",
    paddingRight: "calc(var(--fullScreenBorderPadding) * 2)",
    borderRadius: "0 0 var(--borderRadiusSize) var(--borderRadiusSize)"
  },
  dropdownArrow: {
    transition: "transform 200ms ease-in-out"
  },
  colorFormatDisplay: {
    [theme.breakpoints.up("md")]: {
      marginRight: "30px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "10px"
    }
  },
  numbersList: {
    width: "120px"
  },
  colorListDiv: {
    paddingLeft: "var(--fullScreenBorderPadding)",
    paddingRight: "var(--fullScreenBorderPadding)"
  }
})

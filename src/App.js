import React from "react";
import Tabs from "./components/Tabs";
import PaletteListView from "./views/PaletteListView";
import MatchColorView from "./views/MatchColorView";
import ImageExtractView from "./views/ImageExtractView";
import Colorize from "@material-ui/icons/ColorizeOutlined";
import CompareArrows from "@material-ui/icons/CompareArrowsOutlined";
import Palette from "@material-ui/icons/PaletteOutlined";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {useNextVariants: true},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tabs>
        <ImageExtractView tabLabel="Extract" path="/" tabIcon={<Palette/>} showOverflow={true}/>
        <PaletteListView tabLabel="Palette" path="/palette" tabIcon={<Colorize/>}/>
        <MatchColorView tabLabel="Match" path="/match" tabIcon={<CompareArrows/>} showOverflow={true}/>
      </Tabs>
    </ThemeProvider>
  );
}

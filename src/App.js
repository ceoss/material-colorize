import React from 'react';
import Tabs from './components/Tabs';
import PaletteListView from './views/PaletteListView';
import MatchColorView from "./views/MatchColorView";
import ImageExtractView from "./views/ImageExtractView";
import Colorize from '@material-ui/icons/ColorizeOutlined';
import CompareArrows from '@material-ui/icons/CompareArrowsOutlined';
import Palette from '@material-ui/icons/PaletteOutlined';

export default function App() {
  return (
    <Tabs>
      <ImageExtractView tabLabel="Extract" path="/" tabIcon={<Palette/>}/>
      <PaletteListView  tabLabel="Palette" path="/palette" tabIcon={<Colorize/>}/>
      <MatchColorView tabLabel="Match" path="/match" tabIcon={<CompareArrows/>} showOverflow={true}/>
    </Tabs>
  );
}

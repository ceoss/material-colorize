import React from 'react';
import Tabs from './components/Tabs';
import PalleteListView from './views/PalleteListView';
import ConvertColorView from "./views/ConvertColorView";
import ImageExtractView from "./views/ImageExtractView";
import Colorize from '@material-ui/icons/ColorizeOutlined';
import CompareArrows from '@material-ui/icons/CompareArrowsOutlined';
import Palette from '@material-ui/icons/PaletteOutlined';

export default function App() {
  return (
    <Tabs title="Title">
      <PalleteListView tabLabel="Pick" tabIcon={<Colorize/>}/>
      <ConvertColorView tabLabel="Match" tabIcon={<CompareArrows/>}/>
      <ImageExtractView tabLabel="Image" tabIcon={<Palette/>}/>
    </Tabs>
  );
}

import {borderStyle} from "../../shared/shared-style";

const listPadding = '10px';

export default () => ({
  borderedList: {
    borderRadius: '10px',
    padding: listPadding,
    borderTop: borderStyle,
    borderLeft: borderStyle,
    borderRight: borderStyle,
    height: `calc(100% - (${listPadding} * 2))`
  },
  filterButton: {
    transition: 'transform 200ms ease-in-out'
  }
})

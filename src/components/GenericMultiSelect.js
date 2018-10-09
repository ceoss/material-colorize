import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const GenericMultiSelect = (props) => {
  return <FormControl>
      <InputLabel htmlFor={props.inputId}>{props.label}</InputLabel>
      <Select
        multiple
        value={props.value}
        onChange={props.handleChange}
        input={<Input id={props.inputId}/>}
        renderValue={selected => selected.join(', ')}
      >
        {props.options.map(option =>
          <MenuItem key={option} value={option}>
            <Checkbox checked={props.value.includes(option)}/>
            <ListItemText primary={option}/>
          </MenuItem>
        )}
      </Select>
    </FormControl>;
};

GenericMultiSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default GenericMultiSelect;
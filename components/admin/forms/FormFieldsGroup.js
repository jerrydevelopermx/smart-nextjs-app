import React from "react";
import {
  TextField,
  Checkbox,
  Grid,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@material-ui/core";

/*let fields = [
  {
    id: "id",
    name: "name",
    value: "value",
    label: "label",
    required: false,
    onChange,
    grid: { xs: 6, sm: 3, md: 4 },
  },
]; */
function FormFieldsGroup(props) {
  console.log(props);
  return (
    <Grid container spacing={1}>
      {props.fields.map((field, index) => {
        return {
          undefined: (
            <Grid
              key={`fieldEdit${index}`}
              item
              xs={field.grid.xs}
              sm={field.grid.sm}
              md={field.grid.md}
            >
              <TextField
                className={props.css}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={field.id}
                label={field.label}
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                multiline={field.isTextarea}
                rows={4}
              />
            </Grid>
          ),
          subtitle: (
            <Grid
              item
              key={`fieldsSubtitle${index}`}
              width={1}
              xs={field.grid.xs}
              sm={field.grid.sm}
              md={field.grid.md}
            >
              <h4 style={{ margin: "3px" }}>{field.label}</h4>
            </Grid>
          ),
          dropdown: (
            <Grid
              key={`catDropdown${index}`}
              item
              xs={field.grid.xs}
              sm={field.grid.sm}
              md={field.grid.md}
            >
              <FormControl
                className={props.css}
                variant="outlined"
                style={{ marginTop: "15px" }}
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  {field.label}
                </InputLabel>
                <Select
                  native
                  label={field.label}
                  inputProps={{
                    name: field.name,
                    id: field.id,
                  }}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <option aria-label="None" value="" />
                  {field.options &&
                    field.options.map((option, index) => (
                      <option
                        key={`option${index}`}
                        value={option[field.valueKey]}
                      >
                        {option[field.labelKey]}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          ),
          checkbox: (
            <Grid
              key={`checkbox${index}`}
              item
              xs={field.grid.xs}
              sm={field.grid.sm}
              md={field.grid.md}
              style={{ marginTop: "20px" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    className={props.cssCheckbox}
                    checked={Boolean(field.value)}
                    onChange={field.onChange}
                    color="default"
                    name={field.name}
                  />
                }
                label={field.label}
              />
            </Grid>
          ),
          radiogroup: (
            <FormControl component="fieldset" key="radioGroupFormCtrl">
              <RadioGroup
                key={`checkbox-grp`}
                aria-label="userType"
                name="usertType"
                row
                value={"corporate"}
                //onChange={handleTypeChange}
              >
                {field.options &&
                  field.options.map((option, index) => (
                    <FormControlLabel
                      key={`checkbox-grp-${index}`}
                      control={
                        <Radio
                          key={`checkbox-${index}`}
                          className={props.cssRadio}
                          color="default"
                        />
                      }
                      label={option.label}
                      value={option.value}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
          ),
        }[field.type];
      })}
    </Grid>
  );
}

export default FormFieldsGroup;

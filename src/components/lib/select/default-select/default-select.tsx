import {forwardRef} from 'react';
import Select from 'react-select';
import {PublicBaseSelectProps} from 'react-select/dist/declarations/src/Select';

const DefaultSelect = forwardRef<any, PublicBaseSelectProps<any, any, any>>(
  ({className, ...rest}, ref) => {
    return (
      <Select
        ref={ref}
        {...rest}
        className={className}
        classNamePrefix="select"
      />
    );
  }
);

DefaultSelect.displayName = 'DefaultSelect';

export default DefaultSelect;

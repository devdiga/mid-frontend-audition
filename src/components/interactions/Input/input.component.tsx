/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useDebounce } from 'hooks/debounce.hook';

import { InputContainer, InputStyled } from './input.styles';

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  loading: boolean;
}
export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  loading
}) => {
  const [value, setValue] = useState('');
  const [oldValue, setOldValue] = useState('');
  const [focused, setFocused] = useState(false);

  const debounced = useDebounce(value, 600);

  useEffect(() => {
    if (debounced !== oldValue) {
      onChange(debounced);
      setOldValue(debounced);
    }
  }, [debounced]);

  return (
    <InputContainer focused={focused ? 1 : 0}>
      <i className="fa fa-search" />
      <InputStyled
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {(value !== debounced || loading) && (
        <i className="fa fa-spinner fa-pulse fa-fw" />
      )}
    </InputContainer>
  );
};

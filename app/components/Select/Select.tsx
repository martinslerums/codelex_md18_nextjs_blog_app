import { Tag } from '@/types/types';
import CreatableSelect from 'react-select/creatable';

export type SelectOption = {
  _id: string,
  value: string,
  label: string,
}

type SelectProps = {
  onChange: (selectedTag: SelectOption) => void,  
}

export const getTags = async () => {
  const response = await fetch("http://localhost:3000/api/tags", {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tags from database.");
  }

  return response.json();
}

let tagOptions: SelectOption[] = [];

const SelectOptions = async () => {
  
  const tags = await getTags();

   return ( 
    tags.map((tag: Tag) => {
      tagOptions.push({
        _id: tag._id,
        value: tag.name,
        label: tag.name,
      })
    })
  )

}

SelectOptions();

const Select = ({onChange}: SelectProps) => {

  return (
    <CreatableSelect 
      isClearable 
      options={tagOptions} 
      onChange={(selectedOption) => onChange(selectedOption as SelectOption)}
    />
  );
}

export default Select 


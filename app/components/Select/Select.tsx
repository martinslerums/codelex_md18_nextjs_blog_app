import { Tag } from '@/types/types';
import CreatableSelect from 'react-select/creatable';

export type SelectOption = {
  id: string,
  value: string,
  label: string,
}

type SelectProps = {
  onChange: (selectedTag) => void,
  
}

export const getTags = async () => {
  const response = await fetch("http://localhost:3000/api/tags", {
    // next: { revalidate: 0 },
  
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs from route-handler");
  }

  return response.json();
}

let tagOptions: SelectOption[] = [];

const SelectOptions = async () => {
  
  const tags = await getTags();
  
   return ( 
    tags.map((tag: Tag) => {
      tagOptions.push({
        id: tag._id,
        value: tag.name,
        label: tag.name,
      })
    })
  )

}

SelectOptions();

const Select = ({onChange}: SelectProps) => {

  return (
    <CreatableSelect isClearable options={tagOptions} onChange={onChange} />
  );
}

export default Select 


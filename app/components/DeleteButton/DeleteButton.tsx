"use client"

import Button from "../Button/Button";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string
}

const handleDelete = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete data: ${response.status}`);
  }
  
  return response.json();
}

const DeleteButton = ({id}: DeleteButtonProps) => {

  const router = useRouter();

  return ( 
    <Button type="button" label="Delete blog" onClick={() => { 
      handleDelete(id)
      router.refresh()
      }}/>
    )
}
 
export default DeleteButton;
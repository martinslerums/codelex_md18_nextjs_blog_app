"use client"

import Button from "../Button/Button";
import { useRouter } from "next/navigation";

type EditButtonProps = {
  id: string
}

const EditButton = ({id}: EditButtonProps) => {

  const router = useRouter();

  return ( 
    <Button
      type="button" 
      label="Edit blog" 
      onClick={() => { 
        router.push(`/protected/edit/${id}`)
      }}
    />
    )
}
 
export default EditButton;
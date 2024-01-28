"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Params } from "@/types/types";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "@/app/components/Form/Form";
import styles from "./BlogCommentsForm.module.css"

const initialFormValues = {
  author: "",
  comment: "",
};

const BlogCommentsForm = ({params: {id}}: Params) => {
  
  const router = useRouter()
  const [inputForm, setInputForm] = useState(initialFormValues);

  const handleCommentAdd = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/blogs/${id}/comments`,
      {
        method: "POST",
        body: JSON.stringify(inputForm),
      }
    );
    await response.json();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>

      <Form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          handleCommentAdd(id);
          setInputForm(initialFormValues);
          router.refresh()
        }}
      >
        <Input
          type="text"
            placeholder="Your name..."
            name="author"
            onChange={handleInputChange}
            value={inputForm.author}
            required
        />
        <Textarea
          placeholder="Your comment..."
            name="comment"
            onChange={handleInputChange}
            value={inputForm.comment}
            required
        />
        <Button type="submit" label="Post a comment" size="small"/>
      </Form>
      
    </div>
  );
};

export default BlogCommentsForm;

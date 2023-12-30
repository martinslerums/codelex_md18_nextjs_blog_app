"use client";
import { FormEvent, useEffect, useState } from "react";
import styles from "./CommentsForm.module.css";
import { useParams } from "next/navigation";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "@/app/components/Form/Form";
import { useRouter } from "next/navigation";


const initialFormValues = {
  author: "",
  comment: "",
};

const CommentsForm = () => {

  const [inputForm, setInputForm] = useState(initialFormValues);
  const { id } = useParams<{ id: string }>();
  console.log("trying to find ID: ", id);
  const router = useRouter()


  const postComment = async (id: string) => {

    const response = await fetch(
      `http://localhost:3000/api/blogs/${id}/comments`,
      {
        method: "POST",
        body: JSON.stringify(inputForm),
      }
    );

    await response.json(); // parses JSON response into native JavaScript objects
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form
        label="Add a comment"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          postComment(id);
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
            label="Author:"
          />
          <Textarea
            placeholder="Your comment..."
            name="comment"
            onChange={handleInputChange}
            value={inputForm.comment}
            required
            label="Add comment: "
          />
          <Button type="submit" label="Add Comment" />
      </Form>
    </>
  );
};

export default CommentsForm;

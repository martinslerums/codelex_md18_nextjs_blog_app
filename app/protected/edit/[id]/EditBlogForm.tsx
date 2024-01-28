"use client"

import Button from "@/app/components/Button/Button";
import Form from "@/app/components/Form/Form";
import Input from "@/app/components/Input/Input";
import Select, { SelectOption } from "@/app/components/Select/Select"
import TextEditor from "@/app/components/TextEditor/TextEditor";
import { Blog } from "@/types/types";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import styles from "./EditBlog.module.css"


type EditBlogFormProps = {
  id: string,
  data: Blog,
}

const EditBlogForm = ({ id, data }: EditBlogFormProps) => {
  const router = useRouter()  
  const [editBlogValues, setEditBlogValues] = useState(data)

  const handleBlogEdit = async (id: string) => {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({...editBlogValues})
    })

    router.push('/protected/blogs')
    router.refresh()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditBlogValues({
      ...editBlogValues,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleEditorStateChange = (editorState: any) => {
    setEditBlogValues({
      ...editBlogValues,
      body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  const handleTagChange = (selectedTag: SelectOption) => {
    setEditBlogValues({
      ...editBlogValues,
      blogTag: { name: selectedTag.value, _id: selectedTag._id }
    });
  };

  return (
    <main className={styles.container}>
      <Form onSubmit={(event: FormEvent) => {
        event.preventDefault();
        handleBlogEdit(id);
      }}>
        <Input 
          type='text' 
          placeholder='Add title' 
          required 
          name='title' 
          onChange={handleInputChange}
          value={editBlogValues.title}/>
        <Input 
          type='text' 
          placeholder='Add image URL' 
          required 
          name='imageUrl' 
          onChange={handleInputChange}
          value={editBlogValues.imageUrl}
        />
        <div style={{ width: "500px" }}>
          <TextEditor onEditorStateChange={handleEditorStateChange} initialBlogContent={editBlogValues.body} />
        </div>
        <Select
          onChange={handleTagChange}
        />

        <Button type='submit' label="Save"/>
      </Form>
    </main>
  )

};

export default EditBlogForm;

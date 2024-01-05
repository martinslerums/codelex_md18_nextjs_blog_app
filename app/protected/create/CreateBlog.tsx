"use client"

import Button from "@/app/components/Button/Button";
import Form from "@/app/components/Form/Form";
import Input from "@/app/components/Input/Input";
import Select from "@/app/components/Select/Select";
import TextEditor from "@/app/components/TextEditor/TextEditor";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";


const initialFormValues = {
  title: '', 
  imageUrl: '', 
  body: '',
  blogTag: '',
}

const CreateBlogForm = () => {

  const router = useRouter()
  const [blogForm, setBlogForm] = useState(initialFormValues)
  console.log("Select option ID:", blogForm)

  const handleBlogAdd = async () => {
    const response = await fetch(`http://localhost:3000/api/blogs/`,
      {
        method: "POST",
        body: JSON.stringify({...blogForm}),
      }
    ); 

    await response.json(); // Is this redundant since it is done on API route ?
  }

  const handleEditorStateChange = (editorState: any) => {
    setBlogForm({
      ...blogForm,
      body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogForm({
      ...blogForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form onSubmit={(event: FormEvent) => {
        event.preventDefault();
        handleBlogAdd();
        setBlogForm(initialFormValues)
        router.push('/protected/blogs')
      }}>
        <Input 
          type='text' 
          placeholder='Add title' 
          required 
          name='title' 
          onChange={handleInputChange}
          value={blogForm.title}/>
        <Input 
          type='text' 
          placeholder='Add image URL' 
          required 
          name='imageUrl' 
          onChange={handleInputChange}
          value={blogForm.imageUrl}
        />
        <div style={{ width: "500px" }}>
          <TextEditor onEditorStateChange={handleEditorStateChange} />
        </div>
        <Select onChange={(selectedTag) => setBlogForm({...blogForm, blogTag: selectedTag.id})} />

        <Button type='submit' label="Add blog"/>

      </Form>
    </>
  )

}
 
export default CreateBlogForm;
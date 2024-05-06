"use client";

import ImageInput from "@/components/FormInputs/ImageInput";
import QuillEditor from "@/components/FormInputs/QuillEditor";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewTraning() {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const categories = [
    {
      id: 1,
      title: "Traning 1",
    },
    {
      id: 2,
      title: "Traning 2",
    },
    {
      id: 3,
      title: "Traning 3",
    },
  ];
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");

  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    data.isActive = isActive;

    console.log(data);

    makePostRequest(setLoading, "api/trainings", data, "Traning", reset);
    setImageUrl("");
    setContent("");
  }

  return (
    <div>
      <FormHeader title="New Traning" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Traning Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />

          <TextareaInput
            label="Traning Description"
            name="description"
            register={register}
            errors={errors}
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
            label="Traning Thumbnail"
          />

          <QuillEditor
            label="Training Content"
            value={content}
            onChange={setContent}
          />

          <ToggleInput
            label="Publish"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Save Traning"
          loadingButtonTitle="Saving Traning"
        />
      </form>
    </div>
  );
}

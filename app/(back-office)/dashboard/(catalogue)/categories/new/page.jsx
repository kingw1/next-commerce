"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [
    {
      id: 1,
      title: "Spoutes Farmers Market",
    },
    {
      id: 2,
      title: "Carrot Farmers Market",
    },
    {
      id: 3,
      title: "Bloccori Farmers Market",
    },
  ];
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    console.log(data);

    makePostRequest(setLoading, "api/categories", data, "Category", reset);
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            label="Select Markets"
            name="marketIds"
            register={register}
            errors={errors}
            className="w-full"
            options={markets}
            multiple={true}
          />

          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Category Image"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Save Category"
          loadingButtonTitle="Saving Category"
        />
      </form>
    </div>
  );
}

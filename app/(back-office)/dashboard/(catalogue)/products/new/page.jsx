"use client";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { Plus, Search, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewProduct() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);

  const categories = [
    {
      id: 1,
      title: "Product 1",
    },
    {
      id: 2,
      title: "Product 2",
    },
    {
      id: 3,
      title: "Product 3",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer 1",
    },
    {
      id: 2,
      title: "Farmer 2",
    },
    {
      id: 3,
      title: "Farmer 3",
    },
  ];

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
    data.tags = tags;

    console.log(data);

    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price"
            name="salePrice"
            type="number"
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
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label="Product Image"
          />
          <ArrayItemInput setItems={setTags} items={tags} itemTitle="Tag" />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Save Product"
          loadingButtonTitle="Saving Product"
        />
      </form>
    </div>
  );
}

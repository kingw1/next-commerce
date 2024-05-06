"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewStaff() {
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
    data.isActive = isActive;

    console.log(data);

    makePostRequest(setLoading, "api/staff", data, "Staff", reset);
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="New Staff" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff's Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Staff's Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff's Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextareaInput
            label="Staff's Address"
            name="physicalAddress"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Save Staff"
          loadingButtonTitle="Saving Staff"
        />
      </form>
    </div>
  );
}

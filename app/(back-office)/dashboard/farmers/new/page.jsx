"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewFarmer() {
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
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/farmers");
  }

  async function onSubmit(data) {
    setLoading(true);
    const code = generateUserCode("NC", data.name);
    data.code = code;
    data.isActive = isActive;

    console.log(data);

    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset, redirect);
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="New Farmer" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Farmer's Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextareaInput
            label="Farmer's Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            isRequired={false}
          />

          <TextInput
            label="Contact Person Name"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
            isRequired={false}
          />

          <TextInput
            label="Contact Person Phone"
            name="contactPersonPhone"
            register={register}
            errors={errors}
            className="w-full"
            isRequired={false}
          />

          <TextareaInput
            label="Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
          />

          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />

          <ToggleInput
            label="Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Save Farmer"
          loadingButtonTitle="Saving Farmer"
        />
      </form>
    </div>
  );
}

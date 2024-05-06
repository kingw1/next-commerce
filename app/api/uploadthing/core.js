import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  categoryImageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "King" };
    }
  ),

  productImageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "King" };
    }
  ),

  bannerImageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "King" };
    }
  ),

  marketLogoUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "King" };
    }
  ),
};

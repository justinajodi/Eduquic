// import { generateUploadButton,generateUploadDropzone,generateUploader } from "@uploadthing/react";
 
// import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
 
// export const UploadButton = generateUploadButton<OurFileRouter>();
// export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
 
// export const UploadUploader = generateUploader<OurFileRouter>();



import { generateComponents } from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
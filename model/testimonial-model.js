import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  }
);

export const Testimonial = mongoose.models.Testimonial ?? mongoose.model("Testimonial", testimonialSchema);

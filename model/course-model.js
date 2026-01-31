import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  modules: {
    type: [Schema.Types.ObjectId], 
    required: true,
    ref: "Module"  
  },
  price: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category"
  },
  instructor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  
  },
  testimonials: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "Testimonial"
  },
  quizSet: {
    type: Schema.Types.ObjectId,
    required: true
  },
  learning: {
    type: [String],
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  modifiedOn: {
    type: Date,
    default: Date.now
  }
});

export const Course = mongoose.models.Course ?? mongoose.model('Course', courseSchema);

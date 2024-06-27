import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, //for refernce we use this
      ref: 'User',
    },
    subTodos: [
      {
        //esme dusre model ka transfer
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"

      }
    ], //array of subtodos
  },{ timestamps: true });

export const Todo = mongoose.model('Todo', TodoSchema);

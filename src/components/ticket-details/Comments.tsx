import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { getComments, addComment } from "../../services/ticket.services";

interface Comment {
    id: string;
    comment: string;
    commenter: string;
    createdAt: string;
}

interface CommentInput {
    comment: string
}

interface Props {
    ticketStatus: string | undefined
}

const Comments: React.FC<Props> = ({ticketStatus}) => {
    const { id } = useParams();

    const initialValues: CommentInput = {
        comment: ""
    }

    const handleSubmit = async (values: { comment: string }, { resetForm }: FormikHelpers<CommentInput>) => {
        const token = localStorage.getItem("token")!;
        await addComment(token, id!, values.comment);

        resetForm();
    };

    return (
        <div className="mt-4">
            <h2 className="text-md text-gray-600 font-medium mb-2">Comments</h2>
            
            {ticketStatus !== "CLOSED" ?
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field
                        as="textarea"
                        name="comment"
                        placeholder="Add a comment"
                        className="w-full border border-gray-500 rounded-md p-2 text-sm"
                    />
                    <button type="submit" className="bg-teal-700 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-teal-600">
                        Post
                    </button>
                </Form>
            </Formik> :
            <h4 className="text-center text-md text-gray-400">-- Comments Closed --</h4>
            }
        </div>
    );
};

export default Comments;
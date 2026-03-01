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
    const [comments, setComments] = useState<Comment[]>([]);
    const { id } = useParams();

    const initialValues: CommentInput = {
        comment: ""
    }

    const fetchComments = async () => {
        const data = await getComments(id!);
        setComments(data);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handleSubmit = async (values: { comment: string }, { resetForm }: FormikHelpers<CommentInput>) => {
        await addComment(id!, values.comment);
        await fetchComments();

        resetForm();
    };

    return (
        <div className="mt-4">
            <h2 className="text-md text-gray-600 font-medium mb-2">Comments</h2>

            <div className="">
                {comments.map(comment => (
                    <div key={comment.id} className="py-3 flex flex-col mb-2">
                        <div className="flex justify-between">
                            <span className="text-xs text-gray-500">{comment.commenter}</span>
                            <span className="text-xs text-gray-500">
                                {new Date(comment.createdAt).toLocaleString("en-IN", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </span>
                        </div>
                        <p className="text-sm text-gray-700">{comment.comment}</p>
                    </div>
                ))}
            </div>
            
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
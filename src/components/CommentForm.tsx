import { useState } from 'react';
import style from '@/styles/inputForm.module.css'

type AddCommentProps = {
    blogSlug: string;
    onCommentAdded: () => void;
};

const CommentForm: React.FC<AddCommentProps> = ({ blogSlug, onCommentAdded }) => {
    const [userName, setUserName] = useState('');
    const [commentText, setCommentText] = useState('');

    const submitComment = async (event: React.FormEvent) => {
        event.preventDefault();
        const commentData = {
            user: userName,
            comment: commentText,
        };

        const response = await fetch(`/api/blog/${blogSlug}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });

        if (response.ok) {
            setUserName('');
            setCommentText('');
            onCommentAdded();
        } else {
            //handle errors if needed 
        }
    };

    return (
        <form onSubmit={submitComment} className={style.inputFormContainer}>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Name"
                required
            />
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Leave a comment"
                required
            />
            <button type="submit" className="button">Submit Comment</button>
        </form>
    );
};

export default CommentForm;
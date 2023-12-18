import { IComment } from "@/database/blogSchema";

type CommentProps = {
    comment: IComment;
};

function parseCommentTime(time: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Intl.DateTimeFormat('default', options).format(time);
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(new Date(comment.time))}</span>
        </div>
    );
}

export default Comment;
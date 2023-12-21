import { IComment } from "@/database/blogSchema";
import style from '@/styles/comment.module.css';

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
        <div className={style.comment}>
            <h4>{comment.user}</h4>
            <span>{parseCommentTime(new Date(comment.time))}</span>
            <p>{comment.comment}</p>
            <div className={style.commentLine}></div>
        </div>
    );
}

export default Comment;
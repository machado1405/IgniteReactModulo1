import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const isNewCommentEmpty = newCommentText.length === 0;

  
  function handeCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Este campo é obrigatório, preencha-o por favor!");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }


  const publishedDateFomatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSufix: true,
  });

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar img={author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time 
            title={publishedDateFomatted}
            dateTime={publishedAt.toISOString()}>
              {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {
            content.map(line => {

              if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>
              } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
              }

            })
          }
        </div>

        <form onSubmit={handeCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button 
              type='submit'
              disabled={isNewCommentEmpty}
            >
                Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment} 
              />
            );
          })}
        </div>

      </article>
    </>
  );
}
/* eslint-disable react/prop-types */
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar img="https://avatars.githubusercontent.com/u/76964434?v=4" />

            <div className={styles.authorInfo}>
              <strong>Matheus Machado</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="25 de Outubro as 08:15" dateTime="2023-10-25 08:15:28">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto </p>que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

        <p><a href="">👉{' '}jane.design/doctorcare</a></p>

        <p>{' '}
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe um comentário" />

          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>

      </article>
    </>
  );
}
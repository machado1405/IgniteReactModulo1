import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, img }) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
            src={img}
            alt="Avatar Usuário" 
        />
    );
}
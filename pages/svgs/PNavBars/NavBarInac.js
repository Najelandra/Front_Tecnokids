import styles from "../../../styles/components/LessonNav.module.css"

/**
 * @version 1.0
 * @author Creatvra
 * Navigation Bar Inactive
 * @function NavBarInac
 *
 */

function NavBarInac(props) {
    return (
        <div>
            <div className={styles.barra}>
                <Web></Web>
            </div>
            <div className={styles.barrita}>
                <Mobile></Mobile>
            </div>
        </div>
    )
}

export default NavBarInac

function Web() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.3 32.5">
            <path
                d="M345.7 4.7H20.8c-1 0-2 .2-3 .5L15.7 3c-1-1.1-2.5-1.4-3.9-.9-.4.1-.7.3-1 .5-.9.5-1.4 1.4-1.6 2.5l-.7 4.8c0 .3-.2.5-.4.7-.1.1-.1.1-.2.1L3.7 13c-.2.1-.3.2-.5.3-1 .7-1.6 1.9-1.6 3.1 0 1.5.8 2.8 2.1 3.4l4.3 2c.4.2.6.6.7.9l.7 4.8c.2 1.1.9 2 1.7 2.5.6.4 1.3.6 2 .6.4 0 .8-.1 1.2-.2.4-.1.7-.2 1-.4.3-.2.5-.4.7-.6l1.1-1.2c1.2.5 2.4.8 3.8.8h324.8c6.1 0 11-5.5 11-12.2-.1-6.7-5-12.1-11-12.1zm5.3 11.9s0-.1 0 0c0-.1 0-.1 0 0 0-.1 0 0 0 0z"
                fill="#e5e5e5"/>
        </svg>
    )
}

function Mobile() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 38">
            <path
                d="M195.1 4.7h-169c-.9 0-1.8.1-2.6.3l-2-2c-1.3-1.3-3-1.7-4.7-1.1-.4.1-.8.3-1.2.5-1 .7-1.8 1.8-2 3.2l-.8 5.8c0 .3-.2.7-.5.9-.1.1-.2.1-.3.2l-5 2.6c-.2.1-.4.2-.6.4-1.2.9-2 2.3-2 3.8 0 1.8 1 3.4 2.6 4.1l5.2 2.4c.5.2.7.7.8 1l.9 5.7c.3 1.3 1 2.4 2.1 3.1.7.5 1.5.7 2.4.7.5 0 .9-.1 1.4-.2.5-.1.8-.3 1.2-.5.3-.2.6-.5.8-.7l1.8-1.9c.8.2 1.6.3 2.5.3H195c7.1 0 12.9-6.4 12.9-14.3.1-7.9-5.7-14.3-12.8-14.3zm6.2 14s0-.1 0 0c0-.1 0-.1 0 0 0-.1 0 0 0 0z"
                fill="#e5e5e5"/>
        </svg>
    )
}
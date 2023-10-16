import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = (e) => {
        console.log("button clicked", e);
    }

    return (
        <header className='header'>
            <h1> Task Scheduler </h1>
            <p>{props.title}</p>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Project"
}

Header.propTypes = {
    title:  PropTypes.string.isRequired,
}

export default Header;
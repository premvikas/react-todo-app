import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    const onClick = (e) => {
        console.log("button clicked", e);
    }

    return (
        <header className='header'>
            <h1> Task Scheduler </h1>
            <p>{title}</p>
            <Button color={!showAdd ? "green" : "red"} text={!showAdd ? "Add" : "Close"} onClick={onAdd}/>
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
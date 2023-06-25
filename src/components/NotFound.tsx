import { Link } from 'react-router-dom'
import '../styles/notfound.css'

interface Props {}

function NotFound(props: Props) {
    const {} = props

    return (
        <div className='not_found'>
            <h1>404</h1>
            <h3>Uh-oh</h3>
            <p>The page you are looking for does not exist</p>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default NotFound

import Buttons from './Components/Buttons/Buttons'

const DisplayPostForm = (props) => {

    

    return (
        <table>
            <tbody>
                {props.parentPost.map((post, index) => {
                    return(
                        <tr key = {index} >
                            <td>{post.name}</td>
                            <td>{post.post}</td>
                            <td>{/* buttons here */}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default DisplayPostForm
const Blog = (props) => {
    const id = props.match.params.id || 1
    return (
        <div>
            <h2>Post details - {id}</h2>
            <div>{JSON.stringify(props.match.params)}</div>
        </div>
      );
}
 
export default Blog;
export default function Note(props){
    return (
        <div className="note">
            <span className="head-5">{props.title}</span>
            <p>{props.content}</p>
        </div>
    )
}
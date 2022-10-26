const HelloUser = (props) => {

    
    
    const handleNameChange = (e) => {
        ReactDOM.render(<HelloUser username={e.target.value} />, document.getElementById('app'));
    };

    return (<div><p>Hello {props.username}</p><label>Change Name: </label><input type='text' value={props.username} onChange={handleNameChange} /></div>)
};

const init = () => {
    ReactDOM.render(<HelloUser username={"Vincent"} />, document.getElementById('app'));
}

window.onload = init;
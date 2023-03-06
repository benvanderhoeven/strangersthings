


const Create = ({posts, setPosts}) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = async (e) => {
        ev.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            description: JSON.stringify({
                title,
                description,
            })
        });

        console.log('title, description: ', title, description);

        const data = await response.json();
        console.log('data:', data);
        setPosts([data, ...posts]);
        setTitle('');
        setDescription('');
    }

    return <>
        <h3>
            Create a Posts
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange=
            {(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="description" value=
            {description} onChange={(ev) => setDescription(ev.target.value)}></input>
            <button type="submit" className="btn
            btn-outline-primary">Submit</button>"
        </form>
        
        </>
}
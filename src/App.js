import {Comments, Posts, Users} from "./components";


function App() {
    return (
        <div>
            <h1>Users</h1>
            <Users/>
            <hr/>
            <h1>Posts</h1>
            <Posts/>
            <hr/>
            <h1>Comments</h1>
            <Comments/>
        </div>
    );
}

export default App;

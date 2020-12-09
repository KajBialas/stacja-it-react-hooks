import Counter from './components/counter.components';
import PostList from './components/postList.component';
import PostDetails from './components/postDetails.component';
function App() {
  return (
    <div>
      <h1>Nazwa bloga</h1>
      <PostDetails />
      <PostList />
      <Counter />
    </div>
  );
}

export default App;

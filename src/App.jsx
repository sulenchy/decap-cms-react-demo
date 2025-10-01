import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Decap CMS React Demo</h1>
      </header>

        <hr />
      <main>
        <h1>Latest Blog</h1>
        <div id='latest-blog'>
          <div id='first-blog'>
            <h2>My First Blog Post</h2>
            <p>This is my first blog post using Decap CMS with React!</p>
          </div>
          <div id='second-blog'>
            <h2>My Second Blog Post</h2>
            <p>This is my second blog post using Decap CMS with React!</p>
          </div>
        </div>
      </main>

        <hr />
      <footer>
        <p>@copyright 2025 Decap CMS</p>
      </footer>
    </>
  )
}

export default App

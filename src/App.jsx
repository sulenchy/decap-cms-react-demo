import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const blogPosts = t('blog', { returnObjects: true }) || [];

  return (
    <>
      <header>
        <h1>Decap CMS React Demo</h1>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('fr')}>French</button>
          <button onClick={() => changeLanguage('de')}>German</button>
        </div>
      </header>

        <hr />
      <main>
        <h1>{t('home.title')}</h1>
        <p>{t('home.body')}</p>

        <h1>{t('about.title')}</h1>
        <p>{t('about.body')}</p>

        <hr />
        <h1>Latest Blog</h1>
        <div>
          {Array.isArray(blogPosts) && blogPosts.map((post) => (
            <div key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
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

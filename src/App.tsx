import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface Post {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavoalbunio.png',
      name: 'Gustavo Albunio',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'PARAGRAPH',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'PARAGRAPH',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'LINK',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-12-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat',
    },
    content: [
      {
        type: 'PARAGRAPH',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'PARAGRAPH',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-12-21 17:00:00'),
  },
] as Post[];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

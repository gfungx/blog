import { FunctionalComponent } from 'preact';
import { GetStaticProps } from 'next';

import prisma from 'lib/prisma';
import { Post } from 'prisma/generated/index.d';
import Dashboard from 'components/Posts/Dashboard';

type HomeProps = {
  posts: (Post & {
    author: {
      name: string;
    };
  })[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma().post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  });
  return { props: { posts } };
};

const Home: FunctionalComponent<HomeProps> = ({ posts }) => (
  <>
    <div className="px-24 py-24 bg-gray-100">
      <h1 className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        What's new?
      </h1>
      <div className="max-w-md">
        <p className="pt-2 text-gray-700">
          What people are talking about now, the latest posts fresh from the
          press, curated for you.
        </p>
      </div>
    </div>
    <Dashboard posts={posts} />
  </>
);

export default Home;

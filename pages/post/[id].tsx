import { FunctionalComponent } from 'preact';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { format } from 'timeago.js';

import prisma from 'lib/prisma';
import { Post as PostType } from 'prisma/generated/index.d';

type PostProps = {
  post: PostType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma().post.findMany({
    where: {
      published: true
    },
    select: {
      id: true
    }
  });

  const paths = posts.map(post => ({ params: { id: String(post.id) } }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await prisma().post.findUnique({
    where: {
      id: Number(params!.id)
    }
  });

  return {
    props: { post },
    revalidate: true
  };
};

const Post: FunctionalComponent<PostProps> = ({
  post: { title, content, photo, createdAt }
}) => {
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-100">
        <p
          className="absolute inline-flex items-center cursor-pointer text-xs text-gray-600 my-4 mx-2"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="inline-block ml-2 fill-current text-gray-600"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          BACK
        </p>
        <div className="px-24 py-24">
          <h1 className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {title}
          </h1>
          <p className="uppercase font-mono pt-1 text-gray-700 text-sm">
            Author &bull; {format(new Date(createdAt))}
          </p>
        </div>
      </div>
      <div className="mt-16 container lg:max-w-screen-md sm:max-w-screen-sm mx-auto">
        <a href={photo} target="_blank">
          <img
            src={photo}
            alt=""
            className="rounded-xl w-1/2 float-left shadow-xl mr-6 mb-2 transform transition duration-200 hover:scale-105 hover:shadow-2xl"
          />
        </a>
        <p>{content}</p>
        <button
          className="fixed bottom-0 right-0 mb-12"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            className="fill-current text-gray-400 inline-block mb-8"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
          <p className="uppercase font-mono text-xs text-gray-400 transform rotate-90">
            Scroll up
          </p>
        </button>
      </div>
    </>
  );
};

export default Post;

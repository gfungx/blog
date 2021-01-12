import { FunctionalComponent } from 'preact';
import Link from 'next/link';
import { format } from 'timeago.js';

type CardProps = {
  id: number;
  photo: string;
  title: string;
  author: { name: string };
  createdAt: Date;
};

const Card: FunctionalComponent<CardProps> = ({
  id,
  photo,
  title,
  author: { name },
  createdAt
}) => (
  <div className="max-w-xs rounded-xl overflow-hidden shadow-xl my-2 scale-95 transform transition duration-200 hover:scale-100 hover:shadow-2xl">
    <img src={photo} alt="" className="rounded-tl-xl rounded-tr-xl w-full" />
    <div className="p-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="uppercase font-mono text-sm text-gray-500">
        {name} &bull; {format(new Date(createdAt))}
      </p>
      <div className="flex justify-end">
        <Link href={`/post/${id}`}>
          <button className="inline-flex items-center bg-purple-400 text-white font-bold rounded-md p-2 pl-3 pr-3 mt-4 transform transition duration-100 hover:bg-purple-500">
            Read
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              className="w-4 h-4 inline-block ml-2"
            >
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Card;

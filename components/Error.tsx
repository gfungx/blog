import { FunctionalComponent } from 'preact';
import { useRouter } from 'next/router';

import Page from 'components/Page';

const Error: FunctionalComponent = () => {
  const router = useRouter();

  return (
    <Page title="Error" description="An unknown error has occured">
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
          <h1 className="font-extrabold text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              An error has occured, nothing could be found
            </span>{' '}
            😞
          </h1>
        </div>
      </div>
    </Page>
  );
};

export default Error;

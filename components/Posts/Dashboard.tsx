import { FunctionalComponent } from 'preact';
import Masonry from 'react-masonry-css';

import { Post } from 'prisma/generated/index.d';
import Card from 'components/Posts/Card';

type DashboardProps = {
  posts: (Post & {
    author: {
      name: string;
    };
  })[];
};

const Dashboard: FunctionalComponent<DashboardProps> = ({ posts }) => {
  return (
    <Masonry
      breakpointCols={{
        default: 6,
        400: 1,
        800: 2,
        1024: 3,
        1600: 4,
        2000: 5
      }}
      className="flex mt-8 ml-12 mr-12 mb-20"
      columnClassName=""
    >
      {posts.map(post => (
        <Card {...post} />
      ))}
    </Masonry>
  );
};

export default Dashboard;

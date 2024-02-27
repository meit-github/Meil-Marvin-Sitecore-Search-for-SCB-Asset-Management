import { useParams } from 'react-router-dom';
import { PAGE_EVENTS_ENTITY_PAGE } from '../data/constants';
import withPageTracking from '../hocs/withPageTracking.jsx';
import ArticleDetailWidget from '../widgets/ArticleDetail/index.jsx';

const ArticleDetail = () => {
  const { id } = useParams();

  console.log("Page ID:" + id)
  return (
    <div>
      <ArticleDetailWidget key={id} id={id} rfkId="rfkid_7" />
    </div>
  );
};

export default withPageTracking(ArticleDetail, PAGE_EVENTS_ENTITY_PAGE);

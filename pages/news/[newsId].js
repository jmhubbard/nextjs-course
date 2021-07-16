import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  //Send newsId to api to fetch data

  return <h1>Detail Page</h1>;
};

export default DetailPage;

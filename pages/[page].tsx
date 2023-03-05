import { useContext } from "react";
import { StoreContext } from "@/store/Store";
import { useRouter } from "next/router";
import Page from "@/components/Page/Page";

const PageComp = () => {
  const router = useRouter();
  const { page: slug } = router.query;

  const {
    state: { pages },
  } = useContext(StoreContext);
  const page = pages.find((page) => page.slug === (slug || "home"));

  if (!page)
    return (
      <div>
        404 <a href="/">Back to home</a>
      </div>
    );

  return <Page page={page} />;
};

export default PageComp;

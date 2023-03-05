import { useContext } from "react";
import { StoreContext } from "@/store/Store";
import Page from "@/components/Page/Page";

export default function Home() {
  const {
    state: { pages },
  } = useContext(StoreContext);

  const page = pages[0];
  return <Page page={page} />;
}

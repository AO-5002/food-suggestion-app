import PageLayout from "@/layouts/PageLayout";
import { BackBtn } from "./dynamic-components";
import {
  Headline,
  TextContent,
  ImageOverlay,
  VStack,
} from "./static-components";

function page() {
  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col items-center gap-4">
        <div className="w-full flex flex-row items-center justify-between">
          <BackBtn />
        </div>
        <ImageOverlay imgSrc={"pizza"}>Food Item</ImageOverlay>
        <VStack>
          <div>
            <Headline>Description</Headline>
            <TextContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              recusandae dicta possimus officia omnis expedita cum, corrupti,
              saepe itaque debitis in? Itaque, obcaecati. Labore quis minima
              quidem debitis ipsam. Quo.
            </TextContent>
          </div>
        </VStack>
      </div>
    </PageLayout>
  );
}

export default page;

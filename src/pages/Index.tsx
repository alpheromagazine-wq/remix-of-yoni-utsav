import { MobileBottomBar } from "@/components/sections/mobile-bar";
import { TopBar } from "@/components/sections/top-bar";
import { BeforeAfterResults } from "@/components/sections/before-after";
import { Hero } from "@/components/sections/Hero";
import { WhyActionNow } from "@/components/sections/why-action-now";
import { RealStories } from "@/components/sections/real-stories";
import { DrRecomendation } from "@/components/sections/dr-recomendation";
import { Problems } from "@/components/sections/problems";
import { WhyOccurs } from "@/components/sections/why-occurs";
import { WhyCommonSolutionNotWork } from "@/components/sections/why-common-solution-not-work";
import { WhyOurProductIsBetter } from "@/components/sections/why-our-product-is-better";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyReYoniVsTraditional } from "@/components/sections/why-reyoni-vs-traditional";
import { TrustSection } from "@/components/sections/trust-section";
import { FooterCta } from "@/components/sections/footer-cta";
import { Footer } from "@/components/footer";
import { OrderBlock } from "@/components/sections/order-block";
import { DetailedBenefits } from "@/components/sections/detailed-benefits";
import { WhoIsThisFor } from "@/components/sections/who-is-this-for";
import { Faqs } from "@/components/sections/faqs";
import { Ingredients } from "@/components/sections/ingredients";
import { CustomerPrivacy } from "@/components/sections/customer-privacy";
import { ResultTimeline } from "@/components/sections/result-timeline";
import { HowToUse } from "@/components/sections/how-to-use";
import { OrderDialogProvider } from "@/contexts/order-dialog-context";
import { OrderDialog } from "@/components/order-dialog";

const Index = () => {
  return (
    <OrderDialogProvider>
      <TopBar />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Hero />
        <WhyActionNow />
        <DetailedBenefits />
        <WhoIsThisFor />
        <BeforeAfterResults />
        <RealStories />
        <Problems />
        <WhyOccurs />
        <WhyCommonSolutionNotWork />
        <WhyOurProductIsBetter />
        <HowItWorks />
        <WhyReYoniVsTraditional />
        <HowToUse />
        <ResultTimeline />
        <Ingredients />
        <CustomerPrivacy />
        <TrustSection />
        <OrderBlock />
        <Faqs />
        <FooterCta />
      </div>
      <MobileBottomBar />
      <Footer />
      <OrderDialog />
    </OrderDialogProvider>
  );
};
export default Index;

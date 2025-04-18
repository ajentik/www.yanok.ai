import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Review Judge"
      description="Getting clients to leave 5-star reviews for your law firm has never been easier. Take the work out of following up with your clients with friendly automatic reminders. And don’t worry, Review Judge prevents negative reviews, too."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/review-judge.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Review Judge Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(87, 78, 174, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Getting clients to leave 5-star reviews for your law firm has never been easier. Take the work out of following up with your clients with friendly automatic reminders. And don’t worry, Review Judge prevents negative reviews, too.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Business</div>
  <div>Triggers when dynamic dropdown is selected in Add New Client Action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Campaign</div>
  <div>Triggers when clientId is selected.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Client</div>
  <div>Adds new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Campaign</div>
  <div>When user closes a case of a client this action will be performed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find and Add Client</div>
  <div>Finds a client in Review Judge.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Finds a client in Review Judge.</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Review Judge</title>
          <meta name="description" content="Getting clients to leave 5-star reviews for your law firm has never been easier. Take the work out of following up with your clients with friendly automatic reminders. And don’t worry, Review Judge prevents negative reviews, too." />
        </>
      ),
    },
  };
}

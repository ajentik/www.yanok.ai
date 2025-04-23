import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="vPlan"
      description={`vPlan is a planning tool to plan and track your work.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vplan.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        vPlan Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(141, 70, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">vPlan is a planning tool to plan and track your work.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Card</div>
  <div>Triggers when a new card is added or changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attached or Detached Label on a Card</div>
  <div>Triggers when a label is attached or detached from a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attached or Detached Resource on a Card</div>
  <div>Triggers when a resource is attached or detached from a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Collection</div>
  <div>Triggers when a new collection is added or changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Comment</div>
  <div>Triggers when a new comment is added or changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card on Backlog</div>
  <div>Triggers when a card is created on the backlog.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card on Board</div>
  <div>Creates a card on the board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card on Backlog</div>
  <div>Creates a card on the backlog</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Resource</div>
  <div>Creates a new Resource</div>
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
          <title>vPlan</title>
          <meta name="description" content={`vPlan is a planning tool to plan and track your work.`} />
        </>
      ),
    },
  };
}

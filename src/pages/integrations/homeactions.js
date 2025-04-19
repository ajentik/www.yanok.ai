import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HomeActions"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/homeactions.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HomeActions Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(43, 135, 218, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">HomeActions is a leading provider of email newsletters for real estate professionals. We deliver a simple, effective way for Real Estate professionals to consistently reach their entire group of contacts, keep referrals flowing and increase opportunities for sales.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new Opportunity is generated for your HomeActions account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new member is subscribed to your newsletter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Subscription</div>
  <div>Triggers when information on a subscribed member is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Member</div>
  <div>Adds a member to your list, and subscribes them to your newsletter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Members</div>
  <div>Searches the list of members and returns any that match</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Member</div>
  <div>Searches the list of members and returns any that match</div>
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
          <title>HomeActions</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

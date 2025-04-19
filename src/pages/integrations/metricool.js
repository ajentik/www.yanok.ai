import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Metricool"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/metricool.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Metricool Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(198, 88, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Metricool is an all-in-one social media platform for analyzing, managing, and growing your socials.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Failed Post</div>
  <div>Triggers when a new post failed to be published on any network.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New GMB Review</div>
  <div>Triggers when Metricool detects a new incoming review for your GMB location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbox Conversation (By Network)</div>
  <div>Triggers when Metricool detects a new incoming conversation for a given provider (Instagram, Facebook, or Twitter).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Draft in Planner</div>
  <div>Triggers when a new draft is added in your Metricool Planner for the next N days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Published Post</div>
  <div>Triggers when a new post is published using Metricool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scheduled Post</div>
  <div>Triggers when a new post is scheduled for the next N days (incremental). Drafts are not included.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Post to Autolist</div>
  <div>Add a new post to an existing autolist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reply Conversation</div>
  <div>Send a reply to an incoming conversation using Metricool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reply GMB Review</div>
  <div>Send a reply to an incoming GMB Review using Metricool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Post</div>
  <div>Create and schedule a new post using the Metricool\'s Planner.</div>
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
          <title>Metricool</title>
        </>
      ),
    },
  };
}

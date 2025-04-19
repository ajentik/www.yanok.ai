import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RollWorks"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rollworks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RollWorks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(91, 196, 236, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RollWorks combines lead generation with marketing and sales automation. They work with B2B companies to help them acquire new clients.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Email Clicked</div>
  <div>Triggered when a lead clicks a link in an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Opened</div>
  <div>Triggered when a lead opens an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Positive Reply Received</div>
  <div>Triggered after a lead replies positively to an email. Note: replies are processed in batches, resulting in a delay of up to an hour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">State Changed</div>
  <div>Triggered when the state of a lead changes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Move to Sequence</div>
  <div>Move a lead to a specific sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Nurturing</div>
  <div>Stop nurturing a lead with drip emails.</div>
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
          <title>RollWorks</title>
        </>
      ),
    },
  };
}

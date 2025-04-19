import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Docsify"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/docsify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Docsify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(58, 206, 122, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Docsify is a chrome extension for Gmail and G Suite that tracks email opens, link clicks, attachment downloads, and per-page document and website views that you send via email. And Docsify automates and prioritizes your sales workflow based on recipient\'s engagement with anything you emailed them</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email Opened</div>
  <div>Trigger when the email was opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document Viewed</div>
  <div>Trigger when the document was viewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File Downloaded</div>
  <div>Trigger when the file was downloaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document Opened</div>
  <div>Trigger when the document was opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Link Clicked</div>
  <div>Trigger when the link was clicked.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Docsify</title>
          <meta name="description" content={}/>s engagement with anything you emailed them' />
        </>
      ),
    },
  };
}

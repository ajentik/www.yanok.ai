import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Joomag"
      description={`Joomag is the all-in-one platform offering a suite of integrated solutions for every content marketing, digital publishing, corporate communications, and sales engagement needs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/joomag.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Joomag Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 85, 85, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Joomag is the all-in-one platform offering a suite of integrated solutions for every content marketing, digital publishing, corporate communications, and sales engagement needs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact in Awesome CRM</div>
  <div>Triggers when a new contact is added to Awesome CRM.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Issue From PDF</div>
  <div>Creates an issue from the supplied PDF file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Magazine Subscription</div>
  <div>Delivers magazine subscription to the specified contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Single Issue</div>
  <div>Delivers a single issue to the specified contact.</div>
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
          <title>Joomag</title>
          <meta name="description" content={`Joomag is the all-in-one platform offering a suite of integrated solutions for every content marketing, digital publishing, corporate communications, and sales engagement needs.`} />
        </>
      ),
    },
  };
}

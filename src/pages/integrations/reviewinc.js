import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ReviewInc"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/reviewinc.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ReviewInc Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(28, 65, 127, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ReviewInc is reputation management and customer communication software that automates the customer experience journey through forms, emails, and text messages. Our service enhances Online Reputation by monitoring, collecting, and amplifying reviews to help businesses shine.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added or Updated in Notify System</div>
  <div>Triggers when a contact achieves a notify flow stage with an Action of Launch URL set to the Method of Pre-registered Webhook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Private Review</div>
  <div>Triggers when a new private review feedback is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Public Review</div>
  <div>Triggers when there is a new public review on an online review site.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Contact Into Notify System</div>
  <div>For third party CRM’s that already have customer names, emails / SMS text numbers, it’s convenient to push the contacts into the Notify system to trigger the request review campaign message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Contact Into Reviews System</div>
  <div>For third party CRM’s that already have customer names, emails / SMS text numbers, it’s convenient to push the contacts into the Reviews system to trigger the request review campaign message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact Stage in the Notify System</div>
  <div>Update the contact stage in Notify System</div>
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
          <title>ReviewInc</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

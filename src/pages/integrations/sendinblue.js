import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sendinblue"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sendinblue.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sendinblue Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(52, 152, 219, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sendinblue powers advanced email marketing and automation. Send newsletter emails, manage your transactional emails, and send SMS on this all-in-one platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Status</div>
  <div>Triggers when the status of a SendinBlue campaign is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Added to a Specific List</div>
  <div>Triggers when a new contact is added to a Sendinblue list. This trigger will not be fired for existing contact added to specific list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when a Sendinblue contact is added or updated (either list(s) they belong to or contact data).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Contact</div>
  <div>Adds or updates a contact data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Transactional Email</div>
  <div>Sends an email from your Sendinblue account with HTML or plain text content.</div>
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
          <title>Sendinblue</title>
        </>
      ),
    },
  };
}

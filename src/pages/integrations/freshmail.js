import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FreshMail"
      description="FreshMail is a great email marketing service. Manage and update your subscribers lists easily. Create, send and track email marketing campaigns that work and get advanced reports in real time."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freshmail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FreshMail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(172, 208, 55, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FreshMail is a great email marketing service. Manage and update your subscribers lists easily. Create, send and track email marketing campaigns that work and get advanced reports in real time.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Link Was Clicked</div>
  <div>The trigger runs when customer/address is clicked in the campaign link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Was Opened</div>
  <div>The trigger runs when the campaign is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Unsubscribe</div>
  <div>The trigger runs when user unsubscribes from your list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add new contact to a list of your choosing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Contact</div>
  <div>Add or Update Contact on a list of your choosing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete contact from one of lists</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Transactional Email in FreshMail - Recommended</div>
  <div>We recommend using the new version of transactional emails, especially if you wish to enable triggers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Transactional Email in FreshMail - Deprecated</div>
  <div>The old version will no longer be developed, and it is scheduled for expiry in the coming months.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update Contact on a list of your choosing</div>
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
          <title>FreshMail</title>
          <meta name="description" content="FreshMail is a great email marketing service. Manage and update your subscribers lists easily. Create, send and track email marketing campaigns that work and get advanced reports in real time." />
        </>
      ),
    },
  };
}

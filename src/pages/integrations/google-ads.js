import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Google Ads"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/google-ads.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Google Ads Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(66, 133, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Google Ads (formerly Google AdWords) is an online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content, and generate mobile application installs within the Google ad network to web users.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign</div>
  <div>Triggers whenever a new campaign is created in Google Ads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Form Entry</div>
  <div>Triggers whenever a new lead is created from a Lead Form Extension.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Customer List With Email</div>
  <div>Adds a contact to a customer list using their email address. Note: It takes 6 to 12 hours for the customer list to be populated with contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Customer List</div>
  <div>Adds a contact to a customer list. Note: It takes 6 to 12 hours for the customer list to be populated with contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer List</div>
  <div>Creates a customer list in Google Ads Audience Manager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact From Customer List</div>
  <div>Removes a contact from a customer list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Offline Conversion</div>
  <div>Sends events from your customer systems (PoS, CRM, email service provider, etc) to connect Google Ad campaigns to offline activity and business impact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Campaign Status</div>
  <div>Sets the status of a Google Ads campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Campaign by Name</div>
  <div>Finds a Google Ads Campaign whose names matches the provided input.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer List</div>
  <div>Finds a customer list by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer List</div>
  <div>Finds a customer list by name. Optionally creates a new customer list.</div>
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
          <title>Google Ads</title>
        </>
      ),
    },
  };
}

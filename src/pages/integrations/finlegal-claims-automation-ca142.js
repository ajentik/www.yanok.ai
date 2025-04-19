import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FinLegal Claims Automation"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/finlegal-claims-automation-ca142.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FinLegal Claims Automation Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 161, 198, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FinLegal Claims Automation is a total solution for legal claims automation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Created</div>
  <div>Triggers when a document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Updated</div>
  <div>Triggers when a document is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Created or Updated</div>
  <div>Triggers when an activity is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Attribute Created or Updated</div>
  <div>Triggers when a activity attribute is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Case Attribute Created or Updated</div>
  <div>Triggers when a case attribute is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Claim Attribute Created or Updated</div>
  <div>Triggers when a claim attribute is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Claim Status Change</div>
  <div>Triggers when a claim has it\'s status updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Attribute Created or Updated</div>
  <div>Triggers when a contact attribute is created or updated.</div>
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
  <div class="font-semibold">Create Activity File</div>
  <div>Creates a file on an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Save Case Attributes</div>
  <div>Save Case Attributes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Claim</div>
  <div>Creates a Claim</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Save Claim Attributes</div>
  <div>Saves Claim Attributes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Claim File</div>
  <div>Creates a file on a Claim</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Claim Group</div>
  <div>Create Claim Group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact. Individuals are created by default if no ContactType is specified. Email is the only required attribute for individuals. CompanyName is required for organizations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Save Contact Attributes</div>
  <div>Saves Contact Attributes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Claim From Claim Group</div>
  <div>Remove Claim From Claim Group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Update an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">TypeForm: Update Activity</div>
  <div>Update an Activity via TypeForm</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Claim</div>
  <div>Update a Claim</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Claim Group</div>
  <div>Update Claim Group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Claim Group With Claim Id</div>
  <div>Update Claim Group With Claim Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download File by Url</div>
  <div>Download File by Url</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claim Activities by Claim Id</div>
  <div>Get Claim Activities by Claim Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Case Activities by Contact Id</div>
  <div>Get Case Activities by Contact Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Activity by Id</div>
  <div>Get Activity by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Activity File URLs</div>
  <div>Returns file urls to call with Casefunnel\'s \'Download File\' action followed by a \'Looping by Zapier\' action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Case Attributes</div>
  <div>Get Case Attributes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claims by Contact</div>
  <div>Get Claims by Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claim Attributes</div>
  <div>Get Claim Attributes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claim by Id</div>
  <div>Get Claim by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claim File URLs</div>
  <div>Returns file urls to call with Casefunnel\'s \'Download File\' action followed by a \'Looping by Zapier\' action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claim Group by Id</div>
  <div>Get Claim Group by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Claim Ids by Claim Group Id</div>
  <div>Get Claim Ids by Claim Group Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact Attributes</div>
  <div>Get Contact Attributes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact by Id</div>
  <div>Get Contact by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Contact by Email or Phone</div>
  <div>Search for a Contact. Provide an email address OR a phone number. Email is used if both are provided.</div>
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
          <title>FinLegal Claims Automation</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SAM.ai"
      description="SAM is a sales and marketing tool that lets you organize and manage your leads, opportunities, accounts & partners with efficient features."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sam-ai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SAM.ai Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 130, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SAM is a sales and marketing tool that lets you organize and manage your leads, opportunities, accounts & partners with efficient features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Active Accounts</div>
  <div>Triggers when new account(s) is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Active Categories</div>
  <div>Triggers when a new category(ies) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Active Contacts</div>
  <div>Triggers when new contact(s) is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Active Leads</div>
  <div>Triggers when new lead(s) is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Active Notes</div>
  <div>Triggers when new note(s) is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Active Opportunities</div>
  <div>Triggers when new opportunity(s) is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Active Tasks</div>
  <div>Triggers when new task(s) is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contacts</div>
  <div>Triggers when contact(s) is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Leads</div>
  <div>Triggers when lead(s) is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Action Account</div>
  <div>Action for when we add an account(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Action Contact</div>
  <div>Action for when we add a contact(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customize Lead</div>
  <div>Action for when we create a Lead with Custom Fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Action Lead</div>
  <div>Action for when we add a lead(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Action Opportunity</div>
  <div>Action for when we add an opportunity(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Action for when we update an opportunity(s).</div>
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
          <title>SAM.ai</title>
          <meta name="description" content="SAM is a sales and marketing tool that lets you organize and manage your leads, opportunities, accounts & partners with efficient features." />
        </>
      ),
    },
  };
}

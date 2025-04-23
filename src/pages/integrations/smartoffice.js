import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SmartOffice"
      description={`SmartOffice, powered by Ebix, is the premier CRM solution for the financial services industry. We help insurance agents and financial advisors manage and better understand their existing clients while attracting new ones.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/smartoffice.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SmartOffice Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(43, 102, 154, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SmartOffice, powered by Ebix, is the premier CRM solution for the financial services industry. We help insurance agents and financial advisors manage and better understand their existing clients while attracting new ones.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created in SmartOffice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a contact is updated in SmartOffice.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Business</div>
  <div>Adds a Business Contact (e.g., a Company) to SmartOffice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Adds an Individual Contact (i.e., a Person) to SmartOffice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Adds a SmartPad Entry to a SmartOffice Contact</div>
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
          <title>SmartOffice</title>
          <meta name="description" content={`SmartOffice, powered by Ebix, is the premier CRM solution for the financial services industry. We help insurance agents and financial advisors manage and better understand their existing clients while attracting new ones.`} />
        </>
      ),
    },
  };
}

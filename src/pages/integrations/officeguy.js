import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OfficeGuy/SUMIT"
      description={`OfficeGuy is a comprehensive system for planning, management and execution for the self-employed, non-profit organizations and business organizations.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/officeguy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OfficeGuy/SUMIT Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(84, 110, 122, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">OfficeGuy is a comprehensive system for planning, management and execution for the self-employed, non-profit organizations and business organizations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Card Updated</div>
  <div>Indicates a card was modified (Created / updated / archived / deleted).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient to Email Mailing List</div>
  <div>Adds a recipient to an existing email mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient to SMS Mailing List</div>
  <div>Adds a recipient to an existing SMS mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>Creates a new card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a document (Invoice / Receipt / Donation Receipt / Invoice+Receipt / Proforma Invoice / Payment Request / Order / Price Quotation).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card</div>
  <div>Gets a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends an SMS. Please note this requires SMS credits.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card</div>
  <div>Updates an existing card.</div>
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
          <title>OfficeGuy/SUMIT</title>
          <meta name="description" content={`OfficeGuy is a comprehensive system for planning, management and execution for the self-employed, non-profit organizations and business organizations.`} />
        </>
      ),
    },
  };
}

import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DocuPost Postal Mail"
      description={`DocuPost is a print & mail service allowing you to easily mail your digital files as physical letters and postcards via the US Postal Service.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/docupost.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DocuPost Postal Mail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(92, 118, 226, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DocuPost is a print & mail service allowing you to easily mail your digital files as physical letters and postcards via the US Postal Service.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Mail a Letter</div>
  <div>Mails a physical letter via USPS First Class Mail. You may cancel any test or accidental letter sends on</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mail a Postcard</div>
  <div>This action mails a glossy, color 4x6 postcard via the US Postal Service.</div>
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
          <title>DocuPost Postal Mail</title>
          <meta name="description" content={`DocuPost is a print & mail service allowing you to easily mail your digital files as physical letters and postcards via the US Postal Service.`} />
        </>
      ),
    },
  };
}

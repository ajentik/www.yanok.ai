import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AnonyFlow"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/anonyflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AnonyFlow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 152, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AnonyFlow is a simple and powerful service for encryption-based data anonymization / deanonymization and community sharing, Enabling GDPR, CCPA, and HIPAA data privacy protection compliance.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Anonymize Your Data</div>
  <div>Anonymize your data using AnonyFlow encryption service with your unique private key (managed for you by AnonyFlow)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deanonymize Your Data</div>
  <div>Deanonymize your anonymized data using your AnonyFlow decryption with your unique private key (managed for you by AnonyFlow)</div>
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
          <title>AnonyFlow</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

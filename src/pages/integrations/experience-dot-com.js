import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Experience.com"
      description="Experience.com is a customer experience platform that lets you collect, analyse, and act on customer feedback automatically at every meaningful moment in the customer journey. Our enterprise grade platform helps engage people and power businesses everywhere."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/experience-dot-com.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Experience.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 44, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Experience.com is a customer experience platform that lets you collect, analyse, and act on customer feedback automatically at every meaningful moment in the customer journey. Our enterprise grade platform helps engage people and power businesses everywhere.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Retrive Lendingpad Transaction</div>
  <div>To fetch data from the lendingpad integration</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Monday.com Transaction</div>
  <div>This will be pulling transactions from Monday.com account into Experience.com account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrive Paperless Pipeline Data</div>
  <div>To fetch the transaction data from paperlesspipeline</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrive SmartSheet Transactions</div>
  <div>To fetch data from SmartSheet integration</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Workable Transaction</div>
  <div>To Fetch transaction data from workable</div>
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
          <title>Experience.com</title>
          <meta name="description" content="Experience.com is a customer experience platform that lets you collect, analyse, and act on customer feedback automatically at every meaningful moment in the customer journey. Our enterprise grade platform helps engage people and power businesses everywhere." />
        </>
      ),
    },
  };
}

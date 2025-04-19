import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dext"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dext.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dext Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 101, 37, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dext makes accountants and the businesses you look after more productive and profitable through better data and insights.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Export Receipts When Ready</div>
  <div>Fetch and export the receipt data when it is ready for export. You can also archive the receipts you\'ve exported.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Export New Processed Receipt Data</div>
  <div>When a new receipt is submitted and processed, it automatically exports chosen fields to your preferred destination.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Processed Receipt Notification</div>
  <div>Triggers when a new receipt has been processed and allows you to create custom notifications.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Client Account</div>
  <div>This Zap creates a new client account and sends an invitation to join Receipt Bank to the client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submit Receipts</div>
  <div>This Zap allows you submit an image from another app as a receipt for processing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check Number of Processed Receipts</div>
  <div>Check if you have newly processed items submitted by your clients. Sample data is an overview of new receipts for a demo company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submit Sales Invoices</div>
  <div>This Zap allows you to submit an image to process as a sales invoice from another app.</div>
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
          <title>Dext</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}

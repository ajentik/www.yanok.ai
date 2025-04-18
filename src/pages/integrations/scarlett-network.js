import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Scarlett Network"
      description="Scarlett is a broker in a box software as a service solution tailored for mortgage brokers and lenders. Some its features include; point of sale, Compliance and Payroll"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/scarlett-network.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Scarlett Network Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 165, 215, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Scarlett is a broker in a box software as a service solution tailored for mortgage brokers and lenders. Some its features include; point of sale, Compliance and Payroll</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deal Updated</div>
  <div>Triggers when deal is saved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lender Response Received</div>
  <div>Triggers when deal response is received by lender.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Application Submitted by Borrower</div>
  <div>Triggers when mortgage application is submitted by borrower.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Submitted to Lender</div>
  <div>Triggers when deal is submitted to lender.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Scarlett Network</title>
          <meta name="description" content="Scarlett is a broker in a box software as a service solution tailored for mortgage brokers and lenders. Some its features include; point of sale, Compliance and Payroll" />
        </>
      ),
    },
  };
}

import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ClickBank"
      description="ClickBank is a global digital retailer and leading affiliate marketplace. Our ecosystem enables our clients to launch, scale and support physical and digital products and connect with affiliates to promote them. We empower entrepreneurs with the freedom to work and live across the globe, fuel their purpose and live the life of their dreams."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clickbank.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ClickBank Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(16, 6, 159, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ClickBank is a global digital retailer and leading affiliate marketplace. Our ecosystem enables our clients to launch, scale and support physical and digital products and connect with affiliates to promote them. We empower entrepreneurs with the freedom to work and live across the globe, fuel their purpose and live the life of their dreams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Rebill</div>
  <div>Triggers on the rebill of a recurring product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Chargeback</div>
  <div>Triggers on a chargeback for a standard or recurring product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Refund</div>
  <div>Triggers on the refund of a standard or recurring product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers on the sale of a standard product or initial sale of a recurring product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Test Rebill</div>
  <div>Triggers on the test rebill for a recurring product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Test Refund</div>
  <div>Triggers on the test refund for a test product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Test Sale</div>
  <div>Triggers on the test sale of a product.</div>
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
          <title>ClickBank</title>
          <meta name="description" content="ClickBank is a global digital retailer and leading affiliate marketplace. Our ecosystem enables our clients to launch, scale and support physical and digital products and connect with affiliates to promote them. We empower entrepreneurs with the freedom to work and live across the globe, fuel their purpose and live the life of their dreams." />
        </>
      ),
    },
  };
}

import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="IPQualityScore"
      description="IPQualityScore prevents fraud across any industry, catching high risk users & transactions in real-time without impacting your legitimate audience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ipqualityscore.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        IPQualityScore Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 38, 52, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">IPQualityScore prevents fraud across any industry, catching high risk users & transactions in real-time without impacting your legitimate audience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Email Verification</div>
  <div>Verify the deliverability of an email address and score its reputation. Detect disposable and abusive email addresses along with spam traps and complainers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Number Validation</div>
  <div>Verify phone numbers worldwide and retrieve carrier details, line type, VOIP status, geographic data, risk scores, and much more.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Score IP Address Reputation</div>
  <div>Lookup IP address details and IP reputation to determine geo location and risk analysis, including an overall Fraud Score, recent abusive activity and status as a proxy, VPN, or TOR connection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Score Order, User, or Transaction</div>
  <div>Score an order, transaction, or user to identify fraudulent orders, stolen credit cards, and high risk user behavior. Screen payment or user data for suspicious behavior in real-time.</div>
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
          <title>IPQualityScore</title>
          <meta name="description" content="IPQualityScore prevents fraud across any industry, catching high risk users & transactions in real-time without impacting your legitimate audience." />
        </>
      ),
    },
  };
}

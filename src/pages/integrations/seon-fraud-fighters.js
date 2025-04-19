import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SEON. Fraud Fighters"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/seon-fraud-fighters.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SEON. Fraud Fighters Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(96, 189, 178, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SEON provides a complete end-to-end, fraud-fighting platform for online businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Labeling</div>
  <div>Triggers when a transaction gets labeled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Blacklist/Whitelist</div>
  <div>Triggers when a new value is added to blacklist/whitelist or set to normal by SEON\'s List API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Scores</div>
  <div>Triggers when the Fraud score, Email score, IP score, or Phone score is in the defined interval.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Applied Rules</div>
  <div>Triggers when one or multiple rules get applied.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Label API</div>
  <div>With our Label API, you can label transactions with statuses depending on whether they are fraudulent or not. It can boost our machine learning algorithm to minimize false negatives and positives. Our clients can use custom positive and negative labels, which can be determined on the Settings page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lists API</div>
  <div>With our Lists API, you can blacklist, whitelist, or reset to normal any Fraud API request and response parameter, with a comment and expiration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Self-Exclusion API</div>
  <div>Self-Exclusion API provides client exclusion function for gambling operators using an email address, phone number, full name, date of birth, user country, user zip data fields.</div>
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
          <title>SEON. Fraud Fighters</title>
        </>
      ),
    },
  };
}
